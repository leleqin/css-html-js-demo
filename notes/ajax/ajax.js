// 封装Ajax

/**
 * 第一个参数 {string} 请求的方法(GET,POST,PUT,DELETE)
 * 第二个参数 {Object} 请求的参数
 * 第三个参数 {String} 请求的接口url
 * 第四个参数 {function} 请求完成的回调函数
 */

function ajax(method, params, url, done) {
  // 处理method的大小写
  method = method.toUpperCase();
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");

  // url拼接参数
  var strArr = [];
  var str = "";
  for (const key in params) {
    strArr.push(key + "=" + params[key]);
  }
  str = strArr.join("&");
  if (method === "GET") {
    url += "?" + str;
  }
  xhr.open(method, url);

  // 判断传入的数据
  var data = null;
  if (method === "POST") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    data = str;
  }

  xhr.send(data);
  xhr.onreadystatechange = function (responseData) {
    if (this.readyState === 4) {
      done(this.responseText);
    }
  };
}

// // 1.创建xhr兼容写法
// var xhr = null;
// if (window.XMLHttpRequest) {
//   xhr = new XMLHttpRequest();
// } else {
//   // 兼容IE6
//   xhr = new ActiveXObject("Microsoft.XMLHTTP");
// }

// // 2.开启请求 .open(method,url)
// // method: GET,POST,PUT,DELETE
// // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// // 3.发送请求 .send(body)
// // 发送数据(POST)，需要设置请求头，在open和send之间
// // `setRequestHeader(header,value)`
// // header: 传输数据类型 "Content-Type"
// // value: 具体的数据类型 "application/x-www-form-urlencoded" 或者  "application/json"

// // 使用POST发送请求
// xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.send("name=mary&age=20");

// // 3.发送请求
// // xhr.send(null);

// // 4.返回指定函数，处理得到数据
// xhr.onreadystatechange = function () {
//   // 判断请求是否完成
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// };
