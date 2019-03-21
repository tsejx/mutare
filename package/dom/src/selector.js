/**
 * DOM元素选择器
 * @param {*} selector 选择器
 * @param {*} context 选择器上下文
 */
export function selector(selector, context) {
    context = context || document;
    const first = selector.substr(0, 1);
    const len = selector.split(' ').length;
    let eles;
    // 如果是id选择器
    if (first === '#' && len === 1) {
        return document.getElementById(selector.substr(1));
    }
    // 如果是CSS选择器
    eles = context.querySelectorAll(selector);
    return eles.length === 1 ? eles[0] : Array.from(eles);
};