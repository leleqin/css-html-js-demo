// 对请求进行拦截
axios.interceptors.request.use(function (config) {
  config.params = {
    id: 2,
  };
  config.baseURL = "https://jsonplaceholder.typicode.com";
  return config;
});

// 对响应进行拦截
axios.interceptors.response.use(function (response) {
  return response.data;
});

// axios({
//   // 请求地址
//   url: "https://jsonplaceholder.typicode.com/users",
//   // 请求方法
//   method: "get",
//   // 传递相对 URL 前缀，将自动加在 url 前面
//   //   baseUrl: "https://jsonplaceholder.typicode.com",
//   // 自定义请求头
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // 与请求一起发送的url参数
//   //   params:
//   // 发送的数据
//   //   data: {
//   //     name: "mary",
//   //     age: 19,
//   //   },
// })
//   .then(function (response) {
//     // 正常请求的响应结果
//     console.log(response);
//   })
//   .catch(function (error) {
//     // 捕获错误
//     console.log(error);
//   });

// 发送get请求
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     // 正常请求的响应结果
//     console.log(response);
//   })
//   .catch(function (error) {
//     // 捕获错误
//     console.log(error);
//   });

// 全局配置默认值
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// // axios 方法
// axios({
//   url: "/users",
//   method: "get",
// })
//   .then(function (res) {
//     console.log(res.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
