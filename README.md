<div align="center">
    <img width="200" src="https://raw.githubusercontent.com/tsejx/mutare/master/images/logo.png">
</div>

<h1 align="center">Mutare</h1>

<p align="center">mutare 取名自拉丁语：变化</p>

[![NPM Version](https://img.shields.io/npm/v/mutare.svg)](https://www.npmjs.com/package/mutare) [![NPM Download](https://img.shields.io/npm/dm/mutare.svg)](https://www.npmjs.com/package/mutare) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![LICENSE](https://img.shields.io/npm/l/mutare.svg)](https://github.com/tsejx/mutare/blob/master/LICENSE)

## Installation 安裝

```bash
$ npm install mutare --save

$ yarn add mutare
```

## Catalog 目录

* Animation
    * `animate`
    * `shake` 抖动函数
* Array
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
* Cookie
    * `getCookie`
    * `rmCookie`
    * `setCookie`
* Date
* Debug
    * `warning`
* Device
    * `getBrowser` 获取浏览器类型
    * `getOS` 获取操作系统类型
* DOM
    * `css`
    * `cssTransform`
    * `html`
    * `selector`
    * `val`
* Function
    * `argToArray`
    * `isAllFunction`
    * `mixBindWithApply`
* Hash
    * `guid`
* Math
    * `accAdd`
    * `accDiv`
    * `accMul`
    * `accSub`
    * `accValidation`
    * `convertToInt`
    * `countDecimals`
    * `fixZero`
    * `formatDecimal`
    * `formatDigit`
    * `randomRange`
    * `uppercaseMoney`
* Module
    * `getModuleName`
* Object
    * `getPrototypeOf`
    * `isPlainObject`
* Regexp
* Request
    * `request`
* String
* URL
    * `parseQuery`
* Validation
    * `isAlpha`
    * `isBlank`
    * `isBoolean`
    * `isDecimal`
    * `isFunction`
    * `isHtmlElement`
    * `isIdentityCodeValid`
    * `isNegativeDecimal`
    * `isNull`
    * `isNumber`
    * `isPositiveDecimal`
    * `isString`
    * `isSymbol`
    * `isUndefined`
