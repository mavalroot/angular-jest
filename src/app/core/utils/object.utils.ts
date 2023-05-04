export function getPropertiesAsArray(obj: Record<string, any>): string[] {
  return Object.entries(obj).map(([k, _v]) => k);
}
