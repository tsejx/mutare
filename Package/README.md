# Function Package

# AJAX封装函数

**SAMPLE**

实例化一个 AJAX 或 JSONP 对象
参数 `opt` 为配置参数

```
  fetch(opt) 
```

配置参数 `opt` ==> `{type:'ajax',url:...}`

```
  type : `ajax` || `jsonp`
  url : 请求路径
  data ： 发送给服务器的数据，json类型
  method ： 请求类型，默认 get
  timeout : 超时时间
  cb : 'cb' 回调函数
```

请求数据，返回的是 Promise对象

```
  fetch(opt).init()
```

进行异步操作,`data`为获取到的数据
```
  fetch(opt).init().then((data)=>{})
```




# Cookie 函数

 Cookie 方法
 
 设置 Cookie 的方法
```
   cookie.set(naem, value, expires, domain, path, sercure)
   name : 名称,
   value : 值,
   expires : 失效时间,
   domain : 域,
   path : 路径,
   sercure : 安全标志（表示是否需要https链接）
   
```
 
 获取 Cookie 的方法
```
   cookie.get(name)
```
 
 删除 Cookie 的方法
```
   cookie.delete(name, domain, path, sercure)
```
 
 

