/**
 * 国内手机马赛克函数(目标匹配)
 * @param {string} n 手机号码
 * @returns {string} 屏蔽中间四位的手机号码
 */
const mosaicPhone = n => n.replace(/\d{4}(?=\d{4}$)/, '****');

// 分组匹配 const mosaicPhone = n => n.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')

// slice const mosaicPhone = n => `${n.slice(0, 3)}****${n.slice(7)}`
