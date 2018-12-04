/* * @Author: tsejx  * @Date: 2018-12-01 11:58:05  * @Last Modified by:   tsejx  * @Last Modified time: 2018-12-01 11:58:05 */

// GUID 全局唯一标识符
// Generate four random hex digits.
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
// Generate a pseudo-GUID by concatenating random hexadecimal.
function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}