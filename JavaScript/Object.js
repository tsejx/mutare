// 对象浅拷贝
let obj = {name: 'abc', sex: 'female'}

let newObj = obj

// 对象深拷贝
// 假-深拷贝
let obj = {name: 'abc', sex: 'female'}

let newObj = Object.assign({}, obj)

// 真-深拷贝
// 封装方法
function deepClone(obj) {
  if(!obj && typeof obj!== 'object') return;

  var newObj = obj.constructor === Array ? [] : {};
  for(var key in obj) {
    if (obj[key]) {
      if (obj[key] && typeof obj[key] === 'object') {
        newObj[key] = obj[key].constructor === Array ? [] : {};
        // 递归
        newObj[key] = deepClone(obj[key]);
      }else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj
}