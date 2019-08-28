function getValueOf(from, ...selectors) {
    return [...selectors].map(s => {
        return s
            .replace(/\[([^\[\]]*)\]/g, '.$1.')
            .split('.')
            .filter(t => t !== '')
            .reduce((prev, cur) => prev && prev[cur], from);
    });
}

export default getValueOf;