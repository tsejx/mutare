function nest(items, id = null, link = 'parent_id') {
    return items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, children: nest(items, item.id) }));
}

export default nest;
