import Tween from './tween';

/**
 * 动画函数
 * @param {DOMElement} ele DOM元素
 * @param {object} attrs CSS属性
 * @param {number} duration 延迟时间
 * @param {function} fx 动画类型
 * @param {function} fn 回调函数
 */
function animate(ele, attrs, duration, fx, fn) {
    if (typeof duration === 'undefined') {
        duration = 500;
        fx = 'linear';
    }

    if (typeof duration === 'number') {
        if (typeof fx === 'function') {
            fn = fx;
            fx = 'linear';
        }
        if (typeof fx === 'undefined') {
            fx = 'linear';
        }
    }

    if (typeof duration === 'function') {
        fn = duration;
        fx = 'linear';
        duration = 500;
    }

    if (typeof duration === 'string') {
        if (typeof fx === 'undefined') {
            fx = duration;
            duration = 500;
        } else {
            fn = fx;
            fx = duration;
            duration = 500;
        }
    }

    var beginValue = {},
        changeValue = {};

    for (var key in attrs) {
        beginValue[key] = this.css(ele, key) || 0;
        changeValue[key] = attrs[key] - beginValue[key];
    }

    var d = duration;
    var startTime = Date.now();
    var current,
        c,
        b,
        t,
        _this = this;

    window.cancelAnimationFrame(ele.animate);

    (function animate() {
        ele.animate = window.requestAnimationFrame(animate, ele);

        t = Date.now() - startTime;

        if (t >= d) {
            t = d;
            window.cancelAnimationFrame(ele.animate);
            ele.animate = null;
        }

        for (key in changeValue) {
            c = changeValue[key];
            b = beginValue[key];
            current = Tween[fx](t, b, c, d);
            _this.css(ele, key, current);
        }

        if (!ele.animate && typeof fn === 'function') {
            fn.call(ele);
        }
    })();
}

export default animate;
