/**
 * Utility function to handle multiple inputs from a string or an array of strings.
 * It trims whitespace and splits the input by commas or spaces.
 * If the input is an empty string or undefined, it returns an empty array.
 * @param input - The input string or array of strings to process.
 * @returns An array of strings.
 */
export function handleMultipleInputs(input?: string | string[]): string[] {
  if (!input)
    return []
  if (Array.isArray(input))
    return input.map(i => i.trim())
  if (input.includes(","))
    return input.split(",").map(i => i.trim())
  if (input.includes(" "))
    return input.split(" ").map(i => i.trim())
  return [input.trim()]
}
