/*
 * @Author: tsejx 
 * @Date: 2018-12-05 12:42:56 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-05 12:52:46
 */

 // 中文字符
 const chinese = /[\u4e00-\u9fa5]/

 // 双字节字符
 const doubleByte = /[^\x00-\xff]/

 // 数字
 const number = /^\d$/

 // n位数字
 const numberFixed = /^\d{n}$/

 // 至少n位数字
 const numberLowLimit = /^\d{n,}$/

 // m-n取值范围的数字
 const numberRange = /^\d{m,n}$/

 // 26个字母组成的字符
 const letter = /^[A-Za-z]+$/

 // 26个大写字母组成的字符
 const letterUppercase = /^[A-Z]+$/

 // 26个小写字母组成的字符
 const letterLowercase = /^[a-z]+$/

 // 数字和26个英文字母组成的字符
 const numberLetter = /^[A-Za-z0-9]$/

 // 数字、字母和下划线组成的字符
 const word = /^\w+$/