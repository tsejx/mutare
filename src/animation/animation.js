/*
 * @Author: tsejx 
 * @Date: 2018-12-02 14:21:53 
 * @Last Modified by: tsejx
 * @Last Modified time: 2018-12-04 16:05:26
 */

import Tween from './tween'

/**
 * 动画函数
 * @param {DOMElement} ele DOM元素
 * @param {object} attrs CSS属性
 * @param {number} duration 延迟时间
 * @param {function} fx 动画类型
 * @param {function} fn 回调函数
 */
const animate = (ele, attrs, duration, fx, fn) => {
  if(typeof duration === 'undefined'){
    duration = 500;
    fx = 'linear';
  }
  
  if(typeof duration === 'number'){
    if(typeof fx === 'function'){
      fn = fx;
      fx = 'linear';
    }
    if(typeof fx === 'undefined'){
      fx = 'linear';
    }
  }
  
  if(typeof duration === 'function'){
    fn = duration;
    fx = 'linear';
    duration = 500;
  }
  
  if(typeof duration === 'string'){
    if(typeof fx === 'undefined'){
      fx = duration;
      duration = 500;
    }else{
      fn = fx;
      fx = duration;
      duration = 500;
    }
  }
  
  var beginValue = {}, changeValue = {};
  
  for(var key in attrs){
    beginValue[key] = this.css(ele, key) || 0;
    changeValue[key] = attrs[key] - beginValue[key];
  }
  
  var d = duration;
  var startTime = Date.now();
  var current, c, b, t, _this = this;
  
  window.cancelAnimationFrame(ele.animate);
  
  (function animate(){
    ele.animate = window.requestAnimationFrame(animate, ele);
    
    t = Date.now() - startTime;
    
    if(t >= d){
      t = d;
      window.cancelAnimationFrame(ele.animate);
      ele.animate = null;
    }
    
    for(key in changeValue){
      c = changeValue[key];
      b = beginValue[key];
      current = Tween[fx](t, b, c, d);
      _this.css(ele, key, current);
    }
    
    if(!ele.animate && typeof fn === 'function'){
      fn.call(ele);
    }
  })();
};

/**
 * 抖函数
 * @param {DOMElement} ele DOM元素
 * @param {object} attr CSS属性
 * @param {number} nums 延迟时间
 * @param {function} fn 回调函数
 */
const shake = (ele, attr, nums, fn) => {
  if(ele.shake) return;
  
  var arr = [], index = 0, _this = this;
  
  for(var i=nums < 30 ? 30 : nums; i>=0; i--){
    if(i == 0){
      arr.push(i);
      break;
    }
    arr.push(-i, i);
  }
  
  (function shake(){
    ele.shake = window.requestAnimationFrame(shake, ele);
    _this.css(ele, attr, arr[index++]);
    if(index === arr.length) {
      window.cancelAnimationFrame(ele.shake);
      ele.shake = null;
      if(typeof fn === 'function'){
        fn.call(ele);
      }
    }
  })();
}