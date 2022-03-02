// 1.创建xhr兼容写法
var xhr = null;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  // 兼容IE6
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2.开启请求 .open(method,url)
// method: GET,POST,PUT,DELETE
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// 3.发送请求 .send(body)
// 发送数据(POST)，需要设置请求头，在open和send之间
// `setRequestHeader(header,value)`
// header: 传输数据类型 "Content-Type"
// value: 具体的数据类型 "application/x-www-form-urlencoded" 或者  "application/json"

// 使用POST发送请求
// xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.send("name=mary&age=20");

// 3.发送请求
xhr.send(null);

// 4.返回指定函数，处理得到数据
xhr.onreadystatechange = function () {
  // 判断请求是否完成
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
};
