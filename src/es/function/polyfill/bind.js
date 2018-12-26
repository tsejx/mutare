/*
 * @Author: tsejx
 * @Date: 2018-12-13 23:51:04
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-26 21:14:34
 */

/**
 * ES6+ Function.prototype.bind()兼容性函数
 * 实现依赖于 Array.prototype.slice() Array.prototype.concat() Function.prototype.call() Function.prototype.apply()
 */

if (!Function.prototype.bind) {
    Function.prototype.bind = function (param) {
        if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
        }
        //
        var args = Array.prototype.slice.call(arguments, 1),
            _this = this,
            noop = function () { },
            bind = function () {
                // this instanceof noop === true 时,说明返回的函数bind被当作new的构造函数调用
                return _this.apply(this instanceof noop ? this : param, args.concat(Array.prototype.slice.call(arguments)))
            }
        // 维护原型关系
        if (this.prototype) {
            noop.prototype = this.prototype
        }
        bind.prototype = new noop()
        return bind
    }
}
