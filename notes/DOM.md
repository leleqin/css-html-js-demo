# DOM(document object model) 文档对象模型

一套操作页面元素的 API。

简化对 HTMl 页面的操作。

DOM 把 HTML 抽象成了 Document 对象。文档树模型。

## 获取元素

### `getElementById`（常用）

通过元素的 id 获取元素

需要写在 html 结果之后，否则会导致结构未加载，不能获取对应的 id 元素。

```JavaScript
    var para = document.getElementById("id_name");
    para.style.background = "pink";
    // 在控制台打印具体的对象
    console.dir(para);
```

### `getElementsByTagName`（常用）

通过**标签**名获取元素

多个同名的标签，返回同名的元素对象组成的**数组** `HTMLCollection()`。

`getElementsByTagName`的元素是**动态增加**的，可以放在 html 加载前。

```JavaScript
    // 选择<p>标签
    var ps = document.getElementsByTagName("p");
    console.log(ps);
```

### `getElementsByName`

通过 name 属性值获取元素

返回 name 属性值相同的元素对象组成的数组。类数组。 `NodeList`。

在 IE 和 Opera 中有兼容问题，会多选中 id 属性值相同的元素。

```JavaScript
    var ages = document.getElementsByName("age");
    console.log(ages);
```

### `getElementsByClassName`

通过 class 名获取元素

返回 class 名相同的元素对象组成的数组。 `HTMLCollection()`。

不支持 IE 8 及以下浏览器

是动态增加的

```JavaScript
var box1 = document.getElementsByClassName("class_name");
```

### `querySelector`

通过 css 选择器选择

返回第一个符合条件的元素

不支持 IE 8 及以下浏览器

```JavaScript
    var para = document.querySelector("#id_name .class_name");
    console.log(para);
```

### `querySelectorAll`

通过 css 选择器选择

返回所有符合条件的元素。`NodeList`

不支持 IE 8 及以下浏览器

```JavaScript
    var para = document.querySelectorAll("#id_name .class_name");
    console.log(para);
```

## 函数内部`this`指向

- 普通函数。this 指向 window 对象
- 构造函数。this 指向生成的实例对象
- 对象方法。this 指向对象本身
- 事件函数。this 指向事件源

## 取消`<a>`标签跳转

给 onclick 属性，方法 return false;

```JavaScript
    a_object.onclick = function () {
        return false;
    }
```

## 自定义属性操作

与 element 属性的区别是获取**任意**的行内属性，包括自定义属性

可以获取或设置已有属性和自定义属性

### `getAttribut(name)` 获取属性方法

```JavaScript
ver box = document.getElementById('id_name');
box.getAttribute('customer_name');
```

### `setAttribute('customer_name','velue')` 设置属性或增加属性

### `removeAttribute('name')` 移除行内属性

## 根据对象的 style 属性操作样式

元素对象的 style 属性的值是一个**行内样式**组成的对象，对象内部封装了所有的行内的样式属性及属性值

不能获取到外部样式（内联式，外联式）

复合型的单一属性写法，要用驼峰命名的方式书写获取

```JavaScript
ver box = document.getElementById('id_name');
box.style.backgroundColor; // 驼峰命名法
```

## DOM事件

### 注册事件

- `element.addEventListener('click',fn)`
- `element.attachEvent('onclick',fn)`

兼容写法

```JavaScript
    var btn = document.getElementById('btn');

    addEventListener(btn, 'click', function () {
        alert('123123');
    })

    function addEventListener(element, eventName, fn) {
        if (element.addEventListener) {
            element.addEventListener(eventName, fn);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, fn);
        } else {
            element['on' + eventName] = fn;
        }
    }
```

### 移除事件

- `element.removeEventListener('click',fn)`
- `element.detachEvent('onclick',fn)`

### 事件委托

利用事件冒泡，将子级的事件委托给父级加载

同时，需要利用事件函数的一个 e 参数，内部存储的是事件对象

#### 事件对象

e 在低版本浏览器中有兼容问题，低版本浏览器使用的是 window.event

- `e.eventPhas` 查看事件触发所处阶段
- `e.target` 获取除法事件的元素
- `e.srcElement` 获取触发事件的元素，低版本浏览器使用
- `e.currentTarget` 获取绑定事件的事件源元素
- `e.type` 获取事件类型
- `e.clientX/e.clientY` 所有浏览器都支持，鼠标距离浏览器窗口左上角的距离
- `e.pageX/e.pageY` IE8 以前不支持，鼠标距离整个HTML页面左上顶点的距离

#### 取消默认行为和阻止事件传播

- `e.preventDefault()` 取消默认行为
- `e.returnValue` 取消默认行为，低版本浏览器使用
- `e.stopPropagation();` 阻止冒泡，标准方式
- `e.cancelBubble = true;` 阻止冒泡，IE 低版本，标准中已废弃

## DOM特效

### 偏移量属性

- `offsetParent` 偏移参考父级，距离自己最近的有定位的父级，如果都没有定位参考body(html)
- `offsetLeft/offsetTop` 偏移位置
- `offsetWidth/offsetHeight` 偏移大小

![offset]("/notes/assets/dom_offset.jpg")

客户端大小 没有参考父级元素

- `clientLeft/clientTop` 边框区域尺寸，不常用
- `clientWidth/clientHeight` 边框内部大小

![offset]("/notes/assets/dom_client.jpg")

滚动偏移量

- `scrollLeft/scrollTop` 盒子内部滚动出去的尺寸
- `scrollWidth/scrollHeight` 盒子内容的宽度和高度

![offset]("/notes/assets/dom_scroll.jpg")
