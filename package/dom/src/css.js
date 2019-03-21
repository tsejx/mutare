/**
 * 用来获取和设置元素的css样式
 */
export function css() {
    var args = arguments,
        ele = args[0],
        type = args[1],
        value = args[2],
        len = args.length,
        ret,
        _this = this;

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
            }
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
        return (
            type === 'width' ||
            type === 'height' ||
            type === 'left' ||
            type === 'top' ||
            type === 'right' ||
            type === 'bottom'
        );
    }

    function getTransform(type) {
        return (
            type === 'translateX' ||
            type === 'translateY' ||
            type === 'rotate' ||
            type === 'rotateX' ||
            type === 'rotateY' ||
            type === 'scale' ||
            type === 'scaleX' ||
            type === 'scaleY' ||
            type === 'skewX' ||
            type === 'skewY' ||
            type === 'translate' ||
            type === 'skew'
        );
    }
}