// 驼峰转换函数
function humpCharacter(str, sep){
    let arr = str.split(sep)
    for(let i = 1;i < arr.length;i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    return arr.join(sep)
}

// trim profill
function trim(str){

    while( start < end && str[start] === ' '){
    start++;
    }
    
    while( start < end && str[end] === ' '){
    end--;
    }
    
    return str.substring(start,end + 1);
}

// 字符串检索指定字符出现次数和位置
function findStr(str){
    var n = 0, index, x = 0
    while((index = str.indexOf('ab', n)) != -1){
        x++;
        n = index + 2;
    }
}

// 删除数组中指定位置的元素
function deleteEleInArr(arr, index) {
    for(var i=index; i<arr.length; i++){
        arr[i] = arr[i+1];
      }
      arr.pop();
}