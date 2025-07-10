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
