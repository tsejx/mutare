/*
 * @Author: tsejx 
 * @Date: 2018-12-15 17:15:25 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-15 21:54:35
 */

/**
 * ES6+ Array.prototype.includes()兼容性函数
 */
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchValue, fromIndex) {
            if (this == null) throw new TypeError('"this" is null or not defined')

            var o = Object(this);

            var len = o.length >>> 0;

            if (len === 0) return false;

            var n = fromIndex | 0;

            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            while (k < len) {
                if (o[k] === searchValue) return true
                k++;
            }
            return false
        }
    })
}