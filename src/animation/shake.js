/**
 * 抖函数
 * @param {DOMElement} ele DOM元素
 * @param {object} attr CSS属性
 * @param {number} nums 延迟时间
 * @param {function} fn 回调函数
 */
function shake(ele, attr, nums, fn) {
    if (ele.shake) return;

    var arr = [],
        index = 0,
        _this = this;

    for (var i = nums < 30 ? 30 : nums; i >= 0; i--) {
        if (i == 0) {
            arr.push(i);
            break;
        }
        arr.push(-i, i);
    }

    (function shake() {
        ele.shake = window.requestAnimationFrame(shake, ele);
        _this.css(ele, attr, arr[index++]);
        if (index === arr.length) {
            window.cancelAnimationFrame(ele.shake);
            ele.shake = null;
            if (typeof fn === 'function') {
                fn.call(ele);
            }
        }
    })();
}

export default shake;
