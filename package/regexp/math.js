//  正数
const positive = /^0\.([1-9]\d*|\d*[1-9]){1}$|^([1-9]\d*|\d*[1-9]){1}(\.\d*)?$/;

// 正数(保留两位小数)
const positiveTwoDecimal = /^0\.([1-9]\d?|\d?[1-9]){1}$|^([1-9]\d*|\d*[1-9]){1}(\.\d{1,2})?$/;

// 负数
const negative = /^-0\.([1-9]\d*|\d*[1-9]){1}$|^-([1-9]\d*|\d*[1-9]){1}(\.\d*)?$/;

// 负数(保留两位小数)
const negativeTwoDecimal = /^-0\.([1-9]\d?|\d?[1-9]){1}$|^-([1-9]\d*|\d*[1-9]){1}(\.\d{1,2})?$/;

// 非正数
const nonPositive = /^0$|^-\d+(\.\d+)?$/;

// 非负数
const nonNegative = /^\d+(\.\d+)?$/;

// 正整数
const positiveInteger = /^\d*[1-9]\d*$/;

// 负整数
const negativeInteger = /^-\d*[1-9]\d*$/;

// 整数
const integer = /^-?\d+$/;

// 非负整数
const nonNegativeInteger = /^\d+$/;

// 非正整数
const noPositiveInteger = /^((-\d+)|(0+))$/;

// 正浮点数
const positiveFloat = /^((\d+\.\d*[1-9]\d*)|(\d*[1-9]\d*\.\d+)|(\d*[1-9]\d*))$/;

// 负浮点数
const negativeFloat = /^(-((\d+\.\d*[1-9]\d*)|(\d*[1-9]\d*\.\d+)|(\d*[1-9]\d*)))$/;

// 浮点数
const float = /^(-?\d+)(\.\d+)?$/;

// 非正浮点数
const nonPositiveFloat = /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/;

// 非负浮点数
const nonNegativeFloat = /^\d+(\.\d+)?$/;
