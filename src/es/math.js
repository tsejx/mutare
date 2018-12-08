/*
 * @Author: tsejx 
 * @Date: 2018-12-01 12:26:33 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-08 22:09:51
 */

/**
 * 补零函数（补到十位数）
 * @param {number} val 需要补零的数值 
 */
const fixedZero = (val) => val * 1 < 10 ? `0${val}` : val;

/**
 * 阿拉伯数字与中文大写转换
 * @param  {any} arg1 
 * @param  {any} arg2 
 * @return 
 */
function accMul(arg1, arg2) {
    let m = 0;
    const s1 = arg1.toString();
    const s2 = arg2.toString();
    m += s1.split(".").length > 1 ? s1.split(".")[1].length : 0;
    m += s2.split(".").length > 1 ? s2.split(".")[1].length : 0;
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / 10 ** m;
  }
  
  function digitUppercase(n) {
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [['元', '万', '亿'],['', '拾', '佰', '仟', '万']];
    let num = Math.abs(n);
    let s = '';
    fraction.forEach((item, index) => {
      s += (digit[Math.floor(accMul(num, 10 * 10 ** index)) % 10] + item).replace(/零./, '');
    });
    s = s || '整';
    num = Math.floor(num);
    for (let i = 0; i < unit[0].length && num > 0; i += 1) {
      let p = '';
      for (let j = 0; j < unit[1].length && num > 0; j += 1) {
        p = digit[num % 10] + unit[1][j] + p;
        num = Math.floor(num / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
  
    return s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整');
  }

  /**
   * 随机生成范围内整数
   * @param {number} min 最小值
   * @param {number} max 最大值
   */
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)

  /**
   * 浮点精度修复函数
   * 适用于保留两位浮点数的金额字符串,在不丢失精度的前提下从以元为单位转换为以分为单位
   * @param {string} n 
   */
  const fixFloatPointAccuracy = (n) => {
    if (typeof n !== 'string') {
      throw Error('n must be string')
    }
    if (n.indexOf('.') > -1){
      const a = n.split('.')
      if (a[1].length > 2){
        throw Error('float point cant more than two')
      }
      const i = a[0] * 100
      const f = a[1].length === 1 ? a[1] * 10 : a[1]
      return Number(i) + Number(f)
    }
  }