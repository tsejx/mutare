/**
 * 用来获取选择的元素
 */

var Fq = {};

// 元素选择器
Fq.$ = function (selector, context){
  var context = context || document;
  var first = selector.substr(0, 1);
  var len = selector.split(' ').length; // join
  var eles;
  // 如果是id选择器
  if(first === '#' && len === 1){
    console.log(selector.substr(1));
    return document.getElementById(selector.substr(1));
  }
  // 如果是CSS选择器
  eles = context.querySelectorAll(selector);
  return eles.length === 1 ? eles[0] : Array.from(eles);
}

/**
 * 获取或者设置一个DOM元素的innerHTML
 */
Fq.html = function html(ele, val){
  if(typeof val === 'undefined'){
    return ele.innerHTML;
  }
  ele.innerHTML = val;
}

/**
 * 获取或者设置一个元素的value
 */
Fq.val = function val(ele, value){
  if(typeof value === 'undefined'){
    return ele.value;
  }
  ele.value = value;
}

// 判断某个元素是否有某个class
Fq.hasClass = function (ele, cls){
  return ele.classList.contains(cls);
};

// 给某个元素添加一个class
Fq.addClass = function (ele, cls){
  ele.classList.add(cls);
};

// 给某个元素删除某个class
Fq.rmClass = function (ele, cls){
  ele.classList.remove(cls);
};

// 给某个元素toggle某个class
Fq.toggle = function (ele, cls){
  ele.classList.toggle(cls);
};

/**
 * 用来获取和设置元素的css样式
 */
Fq.css = function css(){
  var args = arguments, ele = args[0], type = args[1], value = args[2], len = args.length, ret, _this = this;
  
  if(len === 2){
    if(type === ''){
      ele.style.cssText = '';
      return true;
    }
    
    if(typeof type === 'string'){
      if(getTransform(type)){
        return this.cssTransform(ele, type);
      }
      
      ret = getComputedStyle(ele)[type];
      if(getStyle(type)){
        return parseFloat(ret);
      };
      return ret * 1 ? ret * 1 : ret;
    }
    
    if(typeof type === 'object'){
      for(var key in type){
        setStyle(key, type[key]);
      }
      return true;
    }
  }
  
  if(len === 3){
    setStyle(type, value);
  }
  
  function setStyle(attr, value){
    if(getStyle(attr)){
      ele.style[attr] = value.trim() === '' ? '' : value.toString().indexOf('%') === -1 ? parseFloat(value) + 'px' : value;
    }else if(getTransform(attr)){
      _this.cssTransform(ele, attr, value);
    }else{
      ele.style[attr] = value;
    }
  }
  
  function getStyle(type){
    return type === 'width' ||  type === 'height'|| type === 'left' || type === 'top' || type === 'right' || type === 'bottom';
  }
  function getTransform(type){
    return type === 'translateX' ||  type === 'translateY'|| type === 'rotate' || type === 'rotateX' || type === 'rotateY' || type === 'scale' || type === 'scaleX' || type === 'scaleY' || type === 'skewX' || type === 'skewY' || type === 'translate' || type === 'skew';
  }
}

// 必须通过这个函数设置的才能通过这个函数获取
Fq.cssTransform = function cssTransform(ele, type, value){
  var attrs = ele.__transform = ele.__transform || {}, str = '';
  if(typeof value === 'undefined'){
    return attrs[type];
  }
  attrs[type] = value;
  for(var key in attrs){
    switch(key){
      case 'translateX':
      case 'translateY':
        str += ` ${key}(${parseFloat(attrs[key])}px)`;
      break;
      case 'rotate':
      case 'rotateX':
      case 'rotateY':
      case 'skewX':
      case 'skewY':
        str += ` ${key}(${parseFloat(attrs[key])}deg)`;
      break;
      default:
        str += ` ${key}(${attrs[key]})`;
    }
  }
  ele.style.transform = str.trim();
}