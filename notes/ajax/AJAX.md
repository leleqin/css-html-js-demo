# AJAX

## 原生AJAX

### 创建原生AJAX

1. 创建一个`XMLHttpRequest`对象
2. 准备发送，打开一个与网址间的连接
3. 执行发送动作
4. 指定`XMLHttpRequest`状态变化处理函数

```JavaScript
    // 1.创建xhr兼容写法
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
    // 兼容IE6
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2.开启请求
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // 3.发送请求
    xhr.send(null);
    xhr.onreadystatechange = function () {
    // 判断请求是否完成
    if (this.readyState === 4) {
        console.log(this.responseText);
        }
    };
```

- `.open(method,url,true)` 开启请求
  - method 一般有 GET,POST,PUT,DELETE
  - url 接口地址
  - true or false 设置请求是同步（flase），还是异步（true）一般不适用同步的方式
- `.send(body)` 发送请求
  - 当method是GET时，body可以为null
  - 当method是POST时，需要传入数据，在此之前需要设置请求头`.setRequestHeader(header,value)`
- `.setRequestHeader(header,value)` 设置请求头
  - header 传输数据类型，一般是 "Content-Type"
  - value 具体数据类型，一般是 "application/x-www-form-urlencoded" 或者 "application/json"
- `.readyState` 返回一个 XMLHttpRequest 代理当前所处的状态
  - 0 UNSENT 代理创建，但是未调用`open()`方法
  - 1 OPENED `open()`方法已调用，建立了连接
  - 2 HEADER_RECEIVED `send()`方法已调用，并且获得了请求头和请求体
  - 3 LOADING 响应体下载中，`responseText`已含有部分数据
  - 4 DONE 响应体下载完成，可以直接使用`responseText`

## 响应数据格式

### XML

是一种数据格式。元数据，用来描述数据的数据

```xml
<?xml verson="1.0" encoding="utf-8" ?>
<booklist>
  <book>
    <name>三国演义</name>
    <author>罗贯中</author>
    <cate>古典名著</cate>
  </book>
  <book>
    <name>西游记</name>
    <author>吴承恩</author>
    <cate>古典名著</cate>
  </book>
  <book>
    <name>红楼梦</name>
    <author>曹雪芹</author>
    <cate>古典名著</cate>
  </book>
</booklist>
```

缺点

- 元数据占用的数据量大，不利于大量的网络传输
- 解析内部数据复杂，不便于操作
- 数据冗余

### JSON(JavaScript Object Notation)

```json
{
    "name": "Mary",
    "age":20
}
```

#### JSON对象

- `JSON.stringify(obj)` 对象转json类型的字符串
- `JSON.parse(str)` json类型的字符串转对象
