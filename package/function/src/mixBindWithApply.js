/**
 *
 * @param {*} ctx
 */
export function mixBindWithApply(ctx) {
  // 保存this,也就是调用bind的那个函数
  const s = this;
  let args = [].slice.call(arguments, 1);
  return function() {
    // 将第一次的参数与此次传入的参数合并,调用s函数
    return s.apply(ctx, args.concat([].slice.call(arguments)));
  };
}

// 绑定到Function对象原型上
// Function.prototype.bind = mixBindWithApply
