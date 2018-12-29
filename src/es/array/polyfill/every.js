/*
 * @Author: tsejx
 * @Date: 2018-12-16 00:37:54
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-26 21:14:47
 */

/*
 * Array.prototype.every()函数兼容性实现
 * 假定Object和TypeError拥有初始值
 */
if (!Array.prototype.every) {
    Array.prototype.every = function (fun /*, thisArg */ ) {
        'use strict';

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function')
            throw new TypeError();

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && !fun.call(thisArg, t[i], i, t))
                return false;
        }

        return true;
    };
}