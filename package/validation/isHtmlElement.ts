/**
 * 检测给定节点是否为 HTML 元素。
 * @param node - 要检查的节点。
 * @returns 如果节点是 HTML 元素，则为 true；否则为 false。
 */
export function isHtmlElement(node: any): node is HTMLElement {
  return typeof node === 'object' && node !== null && node.nodeType === 1 && typeof node.nodeName === 'string';
}
