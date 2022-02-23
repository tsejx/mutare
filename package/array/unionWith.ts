export default function unionWith(a, b, comparator) {
    return Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
}
