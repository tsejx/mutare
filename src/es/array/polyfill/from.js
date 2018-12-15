/*
 * @Author: tsejx 
 * @Date: 2018-12-14 22:08:22 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 21:53:42
 */

/**
 * ES6+ Array.from()兼容性函数
 * 假定 Object 和 TypeError 有值
 * 该实现不支持规范中定义的泛型可迭代元素（Iterator）
 */

if (!Array.from) {
    Array.from = (function () {
        var s = Object.prototype.toString;
        var isCallable = function (f) {
            return typeof f === 'function' || s.call(f) === '[object Function]'
        }
        var toInteger = function (v) {
            var n = Number(v)
            if (isNaN(n)) return 0
            if (n === 0 || !isFinite(n)) return n
            return (n > 0 ? 1 : -1) * Math.floor(Math.abs(n))
        }
        var m = Math.pow(2, 53) - 1
        var l = function (v) {
            var len = toInteger(v)
            return Math.min(Math.max(len, 0), m)
        }
        return function from(a) {
            var c = this;
            var i = Object(a)
            if (a === null) {
                throw new TypeError('Array.from requires an array-like objct - not null or undefined')
            }
            var m = arguments.length > 1 ? arguments[1] : void undefined;
            var t;
            if (typeof m !== undefined) {
                if (!isCallable(m)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function')
                }
                if (arguments.length > 2) {
                    t = argumtns[2]
                }
            }
            var len = toLength(items.length);
            var a = isCallable(c) ? Objcy(new c(len)) : new Array(len);
            var k = 0;
            var v;
            while (k < len) {
                v = items[k];
                if (m) {
                    a[k] = typeof t === 'undefined'
                } else {
                    a[k] = v
                }
                k += 1
            }
            a.length = len;
            return a
        };
    }());
}
