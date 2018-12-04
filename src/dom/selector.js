/*
 * @Author: tsejx 
 * @Date: 2018-12-02 14:39:07 
 * @Last Modified by:   tsejx 
 * @Last Modified time: 2018-12-02 14:39:07 
 */

/**
 * DOM元素选择器
 * @param {*} selector 选择器
 * @param {*} context 选择器上下文
 */
const $ = (selector, context) => {
    const context = context || document;
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
}

/**
 * 获取或者设置一个DOM元素的innerHTML
 * @param {*} ele 获取或者设置值的DOM元素
 * @param {*} val html值
 */
const html = (ele, val) => {
    if (typeof val === 'undefined') {
        return ele.innerHTML;
    }
    ele.innerHTML = val;
}

/**
 * 获取或者设置一个元素的value
 * @param {*} ele 获取或设置值的DOM元素
 * @param {*} value 
 */
const val = (ele, value) => {
    if (typeof value === 'undefined') {
        return ele.value;
    }
    ele.value = value;
}

/**
 * 判断某个元素是否有某个class
 * @param {*} ele 判断的DOM元素
 * @param {*} cls 样式类名
 */
const hasClass = (ele, cls) => ele.classList.contains(cls)

/**
 * 增加class到指定元素
 * @param {*} ele 判断类名的DOM元素
 * @param {*} cls 样式类名
 */
const addClass = (ele, cls) => ele.classList.add(cls)

/**
 * 删除指定元素的class
 * @param {*} ele 删除类名的DOM元素
 * @param {*} cls 样式类名
 */
const rmClass = (ele, cls) => ele.classList.remove(cls)

/**
 * 切换某个元素的class
 * @param {*} ele 切换的类名的DOM元素
 * @param {*} cls 样式类名
 */
const toggleClass = (ele, cls) => ele.classList.toggle(cls)

/**
 * 用来获取和设置元素的css样式
 */
const css = () => {
    var args = arguments,
        ele = args[0],
        type = args[1],
        value = args[2],
        len = args.length,
        ret, _this = this;

    if (len === 2) {
        if (type === '') {
            ele.style.cssText = '';
            return true;
        }

        if (typeof type === 'string') {
            if (getTransform(type)) {
                return this.cssTransform(ele, type);
            }

            ret = getComputedStyle(ele)[type];
            if (getStyle(type)) {
                return parseFloat(ret);
            };
            return ret * 1 ? ret * 1 : ret;
        }

        if (typeof type === 'object') {
            for (var key in type) {
                setStyle(key, type[key]);
            }
            return true;
        }
    }

    if (len === 3) {
        setStyle(type, value);
    }

    function setStyle(attr, value) {
        if (getStyle(attr) && typeof value === 'string') {
            ele.style[attr] = value;
        } else if (getStyle(attr)) {
            ele.style[attr] = parseFloat(value) + 'px';
        } else if (getTransform(attr)) {
            _this.cssTransform(ele, attr, value);
        } else {
            ele.style[attr] = value;
        }
    }

    function getStyle(type) {
        return type === 'width' || type === 'height' || type === 'left' || type === 'top' || type === 'right' || type === 'bottom';
    }

    function getTransform(type) {
        return type === 'translateX' || type === 'translateY' || type === 'rotate' || type === 'rotateX' || type === 'rotateY' || type === 'scale' || type === 'scaleX' || type === 'scaleY' || type === 'skewX' || type === 'skewY' || type === 'translate' || type === 'skew';
    }
}

/**
 * 必须通过这个函数设置的才能通过这个函数获取
 * @param {*} ele DOM元素
 * @param {*} type 类型
 * @param {*} value 值
 */
const cssTransform = (ele, type, value) => {
    var attrs = ele.__transform = ele.__transform || {},
        str = '';
    if (typeof value === 'undefined') {
        return attrs[type];
    }
    attrs[type] = value;
    for (var key in attrs) {
        switch (key) {
            case 'translateX':
            case 'translateY':
                str += ` ${key}(${parseFloat(attrs[key])}px)`;
                break;
            case 'rotate':
            case 'rotateX':
            case 'rotateY':
            case 'skewX':
            case 'skewY':
                str += ` ${key}(${parseFloat(attrs[key])}deg)`;
                break;
            default:
                str += ` ${key}(${attrs[key]})`;
        }
    }
    ele.style.transform = str.trim();
}
