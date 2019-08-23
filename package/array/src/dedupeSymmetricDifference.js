function dedupeSymmetricDifference(a, b) {
    return [...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includs(v))])];
}

export default dedupeSymmetricDifference;
