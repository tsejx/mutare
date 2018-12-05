/*
 * @Author: tsejx 
 * @Date: 2018-12-04 17:06:36 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-04 17:07:37
 */

// GUID 全局唯一标识符
// Generate four random hex digits.
const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

// Generate a pseudo-GUID by concatenating random hexadecimal.
const guid = () => (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());