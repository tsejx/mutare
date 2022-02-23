
/**
 * 根据位数和分隔符分隔数值
 *
 * @param {*} num 数值
 * @param {*} digit 分隔距离（默认千分位）
 * @param {*} seperator 分隔符（默认为逗号）
 */
function seperate (num, digit = 3, seperator = ',') {
  if (typeof num !== 'number') {
    throw new TypeError(`${num} is not a number.`)
  }
  if (typeof digit !== 'number') {
    throw new TypeError(`${digit} is not a number`)
  }
  if (digit < 0) {
    console.warn(`${digit} must be greater than 0`)

    return num
  }

  const regexp = RegExp(`\\B(?=(\\d{${digit}})+(?!\\d))`, 'g')

  return String(num).replace(regexp, seperator)
}

export default seperate
