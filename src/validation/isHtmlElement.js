/**
 * HTMLElement检测函数
 * @param {any} node 检测是否HTMLElement的DOM节点
 */
function isHtmlElement(node) {
    return typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
}

export default isHtmlElement;
