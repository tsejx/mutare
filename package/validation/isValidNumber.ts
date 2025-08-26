export function isValidNumber(value: unknown): boolean {
  return typeof value === 'number' && !isNaN(value);
}
