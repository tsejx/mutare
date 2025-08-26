<div align="center">
    <img width="200" src="https://raw.githubusercontent.com/tsejx/mutare/master/images/logo.png">
</div>

<h1 align="center">Mutare</h1>

<p align="center">mutare 取名自拉丁语：变化</p>

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/mutare.svg)](https://www.npmjs.com/package/mutare) [![NPM Download](https://img.shields.io/npm/dm/mutare.svg)](https://www.npmjs.com/package/mutare) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![LICENSE](https://img.shields.io/npm/l/mutare.svg)](https://github.com/tsejx/mutare/blob/master/LICENSE)


</div>

## Installation 安裝

```bash
$ npm install mutare --save

$ yarn add mutare
```

## Catalog 目录


* Array 数组操作
  * 遍历
    * `bifurcate` 通过映射关系分离数组成员
    * `chunk` 按指定成员数量分离数组
    * `findIn` 查询对象数组或二维数组是否存在相同的键
  * 过滤
    * `dedupe` 数组去重函数
    * `difference` 数组差集函数
    * `intersection` 数组交集函数
    * `union` 数组并集函数
  * 操作
    * `remove` 删除数组某项元素
    * `shuffle` 数组乱序函数
  * 验证
    * `isAll` 是否数组内所有成员符合条件
    * `isAny` 是否数组内部分成员符合条件
    * `isArray` 是否是数组
    * `isEqual` 是否数组内每一项均严格相等
* Object
  * `getPrototypeOf` - 获取对象原型对象
  * `getTypeOf` - 获取数据类型
  * `setPropertyOf` - 设置对象属性
  * `deepClone` - 深拷贝
* DOM
  * `css` - 获取和设置元素的 CSS 样式
  * `cssTransform`
  * `html` - 获取或设置一个 DOM 的 innerHtml
  * `selector` - DOM 元素选择器
  * `value`
  * `getElementWidth` - 获取元素宽度
* Function
  * `argToArray`
  * `isAllFunction`
  * `mixBindWithApply`
* Hash
  * `guid` - 随机生成 GUID 码
* Math
  * `accAdd` - 加法运算
  * `accDiv` - 除法运算
  * `accMul` - 乘法运算
  * `accSub` - 减法运算
  * `accValidation` - 运算验证
  * `convertToInt` - 转化为整数
  * `countDecimals` - 计算数值小数点后位数
  * `fixZero` - 补零函数
  * `formatDecimal` - 格式化数值（金额数值）并可指定保留小数个数
  * `formatDigit` - 格式化数字（千位断点）
  * `randomRange` - 随机生成指定范围内整数
  * `uppercaseMoney` - 数字转为中文大写金额
* String
* URL
    * `queryParse` - 将 URL 字符串转为 JavaScript 对象
* Validation
  * `isUndefined` - 用于判断是否是 Undefined
  * `isNull` - 用于判断是否是 Null
  * `isBlank` - 用于判断是否为空
  * `isNumber` - 用于判断是否是 Number 类型
  * `isBoolean` - 用于判断是否为 Boolean 类型
  * `isString` - 用于判断是否是 String 类型
  * `isArray` - 用于判断是否为数组类型
  * `isPlainObject` - 用于判断是否为纯对象
  * `isEmptyObject` - 用于判读是否为空对象
  * `isFunction` - 用于判断是否为 Function 类型
  * `isSymbol` - 用于判断是否是 Symbol 类型
  * `isHtmlElement` - 用于判断是否为 HTMLElement 元素
  * `isAlpha` - 用于判断是否为单个字母字符串
  * `isDecimal` - 用于判断数值是否含有浮点数
  * `isNegativeDecimal` - 用于判断是否为负数值并且含有浮点数
  * `isPositiveDecimal` - 用于判断是否为正数值并且含有浮点数
  * `isIdentityCodeValid` - 用于判断身份证合法性
