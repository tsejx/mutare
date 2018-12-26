/*
 * @Author: tsejx 
 * @Date: 2018-12-01 12:23:32 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-13 23:57:17
 */

/**
 * 检测对象内的属性是否全是函数类型
 * @param {any} obj 检测对象
 */
const isAllFunction = obj => Object.keys(obj).every(key => isFunction(obj[key]))

 /**
  * 
  * @param {*} ctx 
  */
 function mixBindWithApply(ctx){
    // 保存this,也就是调用bind的那个函数
    const s = this
    let args = [].slice.call(arguments, 1)
    return function(){
        // 将第一次的参数与此次传入的参数合并,调用s函数
        return s.apply(ctx, args.concat([].slice.call(arguments)))
    }
}
//  绑定到Function对象原型上
// Function.prototype.bind = mixBindWithApply