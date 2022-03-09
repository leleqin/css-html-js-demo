// 参数是一个 配置的对象
// $.ajax({
//   // 请求的地址
//   url: "https://jsonplaceholder.typicode.com/users",
//   // 请求方式 默认是get
//   type: "get",
//   // 服务响应数据类型
//   dataType: "json",
//   // 需要传到服务器端的数据
//   data: { id: 2 },
//   // 请求体内容类型,默认是'application/x-www-form-urlencoded'
//   contentType: "application/x-www-form-urlencoded",
//   // 请求超时时间
//   timeout: 1000,
//   // 请求发起前触发
//   beforeSend: function (xhr) {
//     console.log("before send", xhr);
//   },
//   // 请求成功后的回调函数
//   success: function (data) {
//     console.log("success data:", data);
//   },
//   // 请求失败触发
//   error: function (e) {
//     console.log("error", error);
//   },
//   // 请求完成触发，不管成功与否
//   complete: function (xhr) {
//     console.log("complete:", xhr);
//   },
// });

// get请求便捷方法
// $.get(
//   "https://jsonplaceholder.typicode.com/users",
//   {
//     id: 3,
//   },
//   function (data) {
//     console.log(data);
//   }
// );

// post请求便捷方法
// $.post(
//   "https://jsonplaceholder.typicode.com/users",
//   { name: "mary", age: 19 },
//   function (data) {
//     console.log(data);
//   }
// );

// delete 请求，删除数据
// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/users/3",
//   type: "delete",
//   success: function (data) {
//     console.log(data);
//   },
// });
