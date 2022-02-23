export default function unionBy(a, b, fn) {
    const s = new Set(a.map(fn));
    return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
}