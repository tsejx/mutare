// 去除字符串空格
// type 1-所有空格 2-前后空格 3-前空格 4-后空格
function trim(str, type){
  switch(type){
    case 1:return str.replace(/\s+/g,'');
    case 2:return str.replace(/^(\s*)|(\s^$)/g,'');
    case 3:return str.replace(/(^\s*)/g,'');
    case 4: return str.replace(/\s*$/g,'')
    default: return str;
  }
}

// 字母大小写切换
// type 1-首字母大写 2-首字母小写 3-大小写转换 4-全部大写 5-全部小写

function changCase(str, type){
  function ToggleCase(str){
    let itemText ='';
    str.split('').forEach(item => {
      if (/^([a-z]+)/.test(item)) {
        itemText += item.toUpperCase();
      }else if(/^([A-Z])/.test(item)){
        itemText += item.toLowerCase();
      }else{
        itemText += item;
      }
    });
    return itemText;
  }

  switch(type){
    case 1:
      return str.replace(/^(\w)(\w+)/,functon(v, v1, v2){
        return v1.toLowerCase() + v2.toUpperCase();
      });
    case 2:
      return str.replace(/(\w)(\w+)/,function(v, v1, v2){
          return v1.toLowerCase() + v2.toUpperCase();
      });
    case 3:
      return ToggleCase(str);
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

// 字符串循环复制
function repeatStr(str, count){
  var text = '';
  for(let i = 0;i < count; i++){
    text += str;
  }
  return text;
}

// 字符串替换
function replaceAll(str,AFindText,ARepText){
　　raRegExp = new RegExp(AFindText,"g");
　　return str.replace(raRegExp,ARepText);
}


// 替换*
function replaceStr(str, regArr, type, ARepText){
  let regText = '',Reg = null, replaceText = ARepText || '';
  // replaceStr('15626036326',[3,5,3],0)
  // 156*****326
  //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
  if (regArr.length === 3 && type === 0) {
      regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
      Reg = new RegExp(regtext);
      var replaceCount = repeatStr(replaceText, regArr[1]);
      return str.replace(Reg, '$1' + replaceCount + '$2')
  }
  //replaceStr('asdasdasdaa',[3,5,3],1)
  //***asdas***
  else if (regArr.length === 3 && type === 1) {
      regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
      Reg = new RegExp(regtext);
      var replaceCount1 = repeatSte(replaceText, regArr[0]);
      var replaceCount2 = repeatSte(replaceText, regArr[2]);
      return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
  }
  //replaceStr('1asd88465asdwqe3',[5],0)
  //*****8465asdwqe3
  else if (regArr.length === 1 && type == 0) {
      regtext = '(^\\w{' + regArr[0] +  '})'
      Reg = new RegExp(regtext);
      var replaceCount = repeatSte(replaceText, regArr[0]);
      return str.replace(Reg, replaceCount)
  }
  //replaceStr('1asd88465asdwqe3',[5],1,'+')
  //"1asd88465as+++++"
  else if (regArr.length === 1 && type == 1) {
      regtext = '(\\w{' + regArr[0] +  '}$)'
      Reg = new RegExp(regtext);
      var replaceCount = repeatSte(replaceText, regArr[0]);
      return str.replace(Reg, replaceCount)
  }
}

// 检测字符串
function checkType(str, type){
  switch(type){
    case 'email':
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'phone':
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
    case 'tel'
      return /^(0\d{2,3}-d{7,8})(-\d{1,4})?$/.test(str);
  }
}