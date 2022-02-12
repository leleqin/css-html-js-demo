# BOM(browser object model) 浏览器对象模型

一套操作浏览器功能的 API。例如:弹出框，控制浏览器跳转，获取分辨率等。

## window 对象

window 是浏览器的顶级对象，当调用 window 下的属性和方法时，可以省略 window。

除`window.name`、`window.top`。

## 对话框

- `alert()`
- `prompt()`
- `confirm()`

## 加载事件 `onload`

利用 `window.onload` 事件，可以将 js 代码提前到 html 结构之前

一个页面中只能有一个 window.onload 事件。

## 延时器

### 创建延时器

`window.setTimeout(func,time)`

- func 不加()
- time 毫秒为单位
- 在指定的时间后，延迟执行一个函数。

### 清除延时器

`window.clearTimeout(timerName)`

## 定时器

### 创建定时器

`window.setInterval(func,interval)`

- func 不加()
- time 毫秒为单位
- 每隔一个指定的时间，周期性的执行一个函数。

### 清除定时器

`window.clearTimeout(timerName)`

## location 对象

location 可以获取或者设置浏览器地址栏的 URL

### 成员

- `assign()`
- `reload()`
- `replace()`
- hash/host/hostname/search/href

### url

![url]('/notes/assets/bom_url.jpg')

## histroy 对象

history 对象可以与浏览器历史记录进行交互，浏览器历史记录是对用户所访问的页面按时 间顺序进行的记录和保存。

- `back()` 返回上一页
- `forward()` 打开过的前一页
- `go()` （）里可以写1，同forward，-1 同back
