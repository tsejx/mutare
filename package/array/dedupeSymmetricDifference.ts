
/**
 *
 * @param a
 * @param b
 * @returns
 */
export default function dedupeSymmetricDifference(a, b) {
    return [...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includs(v))])];
}
