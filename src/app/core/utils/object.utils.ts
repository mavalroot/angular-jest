export function getPropertiesAsArray(obj: Record<string, any>): string[] {
  if (obj) {
    return Object.entries(obj).map(([k, _v]) => k);
  } else {
    return [];
  }
}
