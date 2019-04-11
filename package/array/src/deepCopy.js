export function deepCopy(arr) {
  var temp;
  if (typeof arr === 'number' || typeof arr === 'boolean' || typeof arr === 'string') {
    return arr;
  }
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    temp = [];
    for (x in arr) {
      temp[x] = deepCopy(arr[x]);
    }
    return temp;
  } else if (Object.prototype.toString.call(arr) === '[object RegExp]') {
    temp = arr.valueOf();
    var str = (temp.global ? 'g' : '') + (temp.ignoreCase ? 'i' : '') + (temp.multiline ? 'm' : '');
    return new RegExp(arr.valueOf().source, str);
  } else if (Object.prototype.toString.call(arr) === '[object Function]') {
    var str = arr.toString();
    /^function\s*\w*\s*\(.*\)\s*\{(.*)/m.test(str);
    var str1 = RegExp.$1.slice(0, -1);
    return new Function(str1); //函数有换行就出事，求更好的解决方法
  } else if (Object.prototype.toString.call(arr) === '[object Date]') {
    return new Date(arr.valueOf());
  } else if (Object.prototype.toString.call(arr) === '[object Object]') {
    try {
      temp = JSON.parse(JSON.stringify(arr));
    } catch (e) {
      //环引用解决：取出环引用部分stringify再放回去
      var temp1 = {},
        circle,
        result,
        reset = false,
        hash;
      function traverse(obj) {
        for (x in obj) {
          if (!reset && obj.hasOwnProperty(x)) {
            if (!temp1[x]) {
              temp1[x] = obj[x];
            } else if (typeof obj[x] === 'object' && typeof temp1[x] === 'object') {
              try {
                JSON.stringify(obj[x]);
              } catch (e) {
                circle = obj[x];
                hash = new Date().getTime();
                obj[x] = hash;
                break;
              } finally {
                return traverse(obj[x]);
              }
            }
            if (typeof obj[x] === 'object') {
              return traverse(obj[x]);
            }
          } else if (reset) {
            if (obj[x] === hash) {
              obj[x] = circle;
              return;
            }
            if (typeof obj[x] === 'object') {
              return traverse(obj[x]);
            }
          }
        }
      }
      traverse(arr);
      result = JSON.parse(JSON.stringify(arr));
      reset = true;
      traverse(result);
      traverse(arr);
      temp = result;
    } finally {
      //考虑到原型链和Object.create（null）
      if (arr.__proto__.constructor && arr.__proto__.constructor !== Object) {
        temp.__proto__.constructor = arr.__proto__.constructor;
      }
      if (!arr.__proto__.constructor) {
        temp.__proto__.constructor = null;
      }
      return temp;
    }
  }
  if (!arr) {
    return arr;
  }
}
