/*
 * @Author: tsejx 
 * @Date: 2018-12-01 12:28:58 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-07 11:46:26
 */

 /**
  * 检测数组成员是否都符合检测器的条件
  * @param {array} arr 
  * @param {function} fn 检测器
  */
 const isAllItems = (arr, fn = Boolean) => arr.every(fn)

 /**
  * 检测数组成员是否存在任意一项符合检测器的条件
  * @param {array} arr 
  * @param {function} fn 检测器
  */
 const isAnyItems = (arr, fn = Boolean) => arr.some(fn)

/**
 * 检测数组成员是否每项均严格相等
 * @param {array} arr 
 */
 const isEqual = arr => arr.every(v => v === arr[0])
 
/**
 * 通过判定条件将数组成员分离
 * @param {arr} arr 
 * @param {function} filter 
 */
const bifurcate = (arr, filter) => arr.reduce((acc, v, i) => (arr[filter[i] ? 0 : 1].push(v), acc), [[], []]);

/**
 * 将一元数组按指定如
 * @param {arr} arr 
 * @param {number} size 
 */
const chunk = (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));

/**
 * 数组去重函数(ES6+)（只限基本数据类型）
 * @param {array} a 处理函数
 * @returns {array} 返回去重后的数组
 */
const dedupe = a => Array.from(new Set(a))

/**
 * 数组并集函数(ES6+)（只限基本数据类型）
 * @param {array} a 需要处理的函数
 * @param {array} b 需要处理的函数
 * @returns {array} 返回并集数组
 */
const union = (a, b) => Array.from(new Set([...a, ...b]))

// ES7+
const unionES7 = (a, b) => a.concat(b.filter(v => !a.includes(v)))

/**
 * 数组交集函数(ES6+)（只限基本数据类型）
 * @param {array} a 需要处理的函数
 * @param {array} b 需要处理的函数
 * @returns {array} 返回交集数组
 */
const intersection = (a, b) => Array.from(new Set([...a].filter(x => new Set(b).has(x))))

// ES7+
const intersectionES7 = (a, b) => a.filter(v => b.includes(v))

/**
 * 数组差集函数(ES6+)（只限基本数据类型）
 * @param {array} a 需要处理的函数
 * @param {array} b 需要处理的函数
 * @returns {array} 返回差集数组
 */
const difference = (a, b) => Array.fron(new Set([...a].filter(x => !b.has(x))))

// ES7+
const differenceES7 = (a, b) => a.concat(b).filter(v => a.includes(v) && !b.includes(v))

/**
 * 查询对象数组是否存在相同的对应键
 * @param {array} a 对象数组
 * @param {string} k 查询的键名
 * @param {any} v 查询的键值
 * @returns {object|undefined} 当查询成功后返回第一个对象
 */
const queryArrayObjects = (a, k, v) => {
    if (!Array.isArray(a)) return
    return a.filter(i => i[k] === v)
}

/**
 * 删除数组某项元素
 * @param {array} a 数组
 * @param {numbet} i 删除元素的索引
 * @returns {array} 删除元素后新数组
 */
const deleteIndex = (a, i) => {
    let r = a.slice(i + 1)
    arr.splice(i, a.length)
    return a.concat(r)
}