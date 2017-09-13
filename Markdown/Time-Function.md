# 日期时间相关函数

Tags： FunctionPackage

---
## 数组中对象的日期排序

```
    var abb = [{ _id: '2015-07-02', minValue: 67108.864, maxValue: 67108.864, pointEnergy: 0 },
            { _id: '2015-07-04', minValue: 67108.864, maxValue: 67108.864, pointEnergy: 0 },
            { _id: '2015-06-30', minValue: 67108.864, maxValue: 67108.864, pointEnergy: 0 }];
        abb.sort(function (a, b) {
            return parseInt(a._id.replace(/-/g, ''), 10) - parseInt(b._id.replace(/-/g, ''), 10);//升序
            //return parseInt(b._id.replace(/-/g, ''), 10) - parseInt(a._id.replace(/-/g, ''), 10);//降序
        });
        console.log(abb)
```



