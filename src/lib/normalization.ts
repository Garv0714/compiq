export function normalizeCompanyName(company: string) {
  return company
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
}