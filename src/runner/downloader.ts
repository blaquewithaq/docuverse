import { mkdirSync } from "node:fs"
import { platform } from "node:os"
import { dirname, join } from "node:path"
import AdmZip from "adm-zip"
import * as tar from "tar"

export interface ExtractOptions {
  /**
   * Patterns to include when extracting files.
   * If empty, all files are included.
   */
  include?: string[]
  /**
   * Patterns to exclude when extracting files.
   * If empty, no files are excluded.
   */
  exclude?: string[]
  /**
   * Whether to overwrite existing files.
   */
  overwrite?: boolean
  /**
   * Whether to unwrap the extracted files from their directory structure.
   * If true, only the last part of the path is used.
   */
  unwrap?: boolean
}

export interface DownloaderOptions extends ExtractOptions {
  /**
   * The tag of the release to download.
   */
  tag?: string
  /**
   * The directory to save the downloaded file.
   */
  outputDir?: string
  /**
   * The name of the output file (without extension).
   * If not provided, the original asset name will be used.
   */
  outputFileName?: string
  /**
   * Whether to extract the downloaded file after downloading.
   */
  extract?: boolean
  /**
   * Whether to delete the downloaded file after extraction.
   */
  clean?: boolean
}

export interface Downloader {
  /**
   * The owner of the GitHub repository.
   */
  owner: string
  /**
   * The name of the GitHub repository.
   */
  repo: string
  /**
   * Options for downloading and extracting the file.
   */
  options?: DownloaderOptions
}

/**
 * Extracts files from a ZIP archive.
 * @param filePath The path to the ZIP file.
 * @param outputDir The directory where the files will be extracted.
 * @param options Options for extraction, including patterns to include or exclude, whether to overwrite existing files, and whether to unwrap the files from their directory structure.
 * @returns An object indicating success or failure, and the paths of the extracted files if successful.
 */
export async function extractZip(
  filePath: string,
  outputDir: string,
  options?: ExtractOptions,
): Promise<{ success: boolean, paths?: string[], error?: string }> {
  try {
    const zip = new AdmZip(filePath)
    const entries = zip.getEntries()
    const include = options?.include || []
    const exclude = options?.exclude || []
    const overwrite = options?.overwrite ?? true
    const unwrap = options?.unwrap ?? false

    const extractedPaths: string[] = []

    for (const entry of entries) {
      const fileName = entry.entryName

      if ((include.length && !include.some(p => fileName.includes(p)))
        || (exclude.length && exclude.some(p => fileName.includes(p)))) {
        continue
      }

      let outputPath = join(outputDir, fileName)
      if (unwrap && !entry.isDirectory) {
        const parts = fileName.split("/")
        outputPath = join(outputDir, parts[parts.length - 1] || "")
      }

      mkdirSync(dirname(outputPath), { recursive: true })

      if (entry.isDirectory)
        continue

      if (!Bun.file(outputPath).exists() || overwrite) {
        const data = entry.getData()
        await Bun.write(outputPath, data)
        extractedPaths.push(outputPath)
      }
    }

    return { success: true, paths: extractedPaths }
  }
  catch (error) {
    return { success: false, error: `Failed to extract ZIP: ${String(error)}` }
  }
}

/**
 * Extracts files from a TAR.GZ archive.
 * @param filePath The path to the TAR.GZ file.
 * @param outputDir The directory where the files will be extracted.
 * @param options Options for extraction, including patterns to include or exclude, whether to overwrite existing files, and whether to unwrap the files from their directory structure.
 * @returns An object indicating success or failure, and an error message if applicable.
 */
export async function extractTarGz(
  filePath: string,
  outputDir: string,
  options?: ExtractOptions,
): Promise<{ success: boolean, error?: string }> {
  try {
    const unwrap = options?.unwrap ?? false
    const include = options?.include
    const exclude = options?.exclude

    await tar.extract({
      file: filePath,
      cwd: outputDir,
      strict: true,
      filter: (path: string) => {
        if (include && include.length && !include.some(p => path.includes(p)))
          return false
        if (exclude && exclude.length && exclude.some(p => path.includes(p)))
          return false
        return true
      },
      onentry: (entry) => {
        if (unwrap) {
          const parts = entry.path.split("/")
          entry.path = parts[parts.length - 1] || ""
        }
      },
    })

    return { success: true }
  }
  catch (error) {
    return { success: false, error: `Failed to extract TAR.GZ: ${String(error)}` }
  }
}

/**
 * Downloads and extracts a file from a GitHub repository.
 * @param args The arguments for downloading and extracting a file from a GitHub repository.
 * @returns An object indicating whether the download and extraction were successful, the path of the downloaded file, whether it was extracted, and any error message if applicable.
 */
export async function useDownloader(
  args: Downloader,
): Promise<{ success: boolean, path?: string, extracted?: boolean, error?: string }> {
  try {
    const tag = args.options?.tag || "latest"
    const outputDir = args.options?.outputDir || "."
    const extract = args.options?.extract ?? true
    const clean = args.options?.clean ?? false

    const os = platform()
    const ext = os === "win32" ? ".zip" : ".tar.gz"

    const apiUrl = tag === "latest"
      ? `https://api.github.com/repos/${args.owner}/${args.repo}/releases/latest`
      : `https://api.github.com/repos/${args.owner}/${args.repo}/releases/tags/${tag}`

    const res = await fetch(apiUrl)
    if (!res.ok)
      return { success: false, error: `Failed to fetch release: ${res.status} ${res.statusText}` }

    const release = await res.json() as any

    const asset = release.assets.find((a: any) => {
      const name = a.name.toLowerCase()
      const matchesExt = name.endsWith(ext)
      const matchesArch = os === "win32"
        ? name.includes("x64") || name.includes("win64") || name.includes("windows")
        : true
      return matchesExt && matchesArch
    })

    if (!asset)
      return { success: false, error: `No asset found with extension "${ext}"` }

    const downloadRes = await fetch(asset.browser_download_url)
    if (!downloadRes.ok)
      return { success: false, error: `Failed to download asset: ${downloadRes.status}` }

    if (!Bun.file(outputDir).exists())
      mkdirSync(outputDir, { recursive: true })

    const fileName = args.options?.outputFileName
      ? args.options.outputFileName + ext
      : asset.name

    const filePath = join(outputDir, fileName)
    await Bun.write(filePath, downloadRes)

    let extracted = false
    if (extract) {
      const extractOpts = {
        include: args.options?.include,
        exclude: args.options?.exclude,
        overwrite: args.options?.overwrite,
        unwrap: args.options?.unwrap,
      }

      const result = ext === ".zip"
        ? await extractZip(filePath, outputDir, extractOpts)
        : await extractTarGz(filePath, outputDir, extractOpts)

      if (!result.success)
        return { success: false, error: result.error }

      extracted = true

      if (clean) {
        const file = Bun.file(filePath)
        await file.delete()
      }
    }

    return { success: true, path: filePath, extracted }
  }
  catch (error) {
    return { success: false, error: `Unexpected failure: ${String(error)}` }
  }
}
