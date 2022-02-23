/**
 * HTMLElement检测函数
 * @param {any} node 检测是否HTMLElement的DOM节点
 */
export function isHtmlElement(node) {
  return typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
}
