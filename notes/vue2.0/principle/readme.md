# Vue.js 响应式原理

[toc]

## 数据驱动

- 数据驱动（核心特性 驱动的是视图）只需要关注 data
- 数据响应式 数据驱动的具体实现方式，避免 DOM 操作，性能稳定性更高。
  - Vue2.x 响应式基于 ES5 的 Object.defineProperty 实现。
  - Vue3.x 响应式基于 ES6 的 Proxy 实现。
- 双向数据绑定 数据驱动的体现。如 v-model。

## 响应式的核心原理

### Vue2.x 基于 ES5 的 Object.defineProperty 实现

#### `Object.defineProperty`

直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```JavaScript
let obj = { name: 'mary' }

// Object.defineProperty(obj, prop, descriptor)
// obj 要定义属性的对象
// prop 属性的 key
// descriptor 要定义的属性的值的描述 如 value，writable，enumerable，configurable，get，set
Object.defineProperty(obj, 'sex', {
    // 当前要定义的属性的值 默认值 undefined
    value: 'man',
    // 定义的属性是否可以修改 默认 false
    writable: true,
    // 该属性是否出现在对象的枚举中，就是可不可以遍历 默认值为 false
    enumerable: true,
    // 设置该属性的 [描述符] 是否可以修改 默认值为 false
    configurable: true,
})

Object.defineProperty(obj, 'age', {
    // 获取当前属性的值 和 value 冲突，两个描述符只能有一个
    // 默认值 undefined
    get() {
        return this.age;
    },
    // 设置当前属性的值 和 writable 冲突，两个描述符只能由一个
    // 默认值 undefined
    set() {
        boj.age = this.age;
    }
})

```

#### 使用 `Object.defineProperty` 简单实现响应式

给定义的 data 对象中的每个元素，通过 `Object.defineProperty` 数据劫持的方式 将 data 的属性设置为 getter/setter。在 set 方法中对页面元素做修改。

[简单页面例子](https://github.com/leleqin/css-html-js-demo/blob/master/notes/vue2.0/principle/index.html)

```JavaScript
// 以简单数据类型为例

// 模拟 vue 中的 data 对象
let data = {
    name: "Mary",
    age: 18,
};
// 模拟 vue 实例
let vm = {}；
// 做数据劫持
Object.keys(data).forEach((key) => {
    // 通过数据劫持的方式，将 data 的属性设置为 getter/setter
    Object.defineProperty(vm, key, {
        get() {
            return data[key];
        },
        set(newVale) {
            data[key] = newVale;
            // 页面同步改变
            document.getElementById("app").textContent = data[key];
        },
    });
});
```

### Vue3.x 基于 ES6 的 Proxy 实现

#### Proxy

用于创建一个对象的代理，从而实现基本操作的拦截和自定义。比如赋值，查找。

```JavaScript
let data = {
    name: 'Mary',
    age: 18,
    arr: [1, 2, 3],
    obj: {
        name: 'Alisa',
        age: 20,
    }
}

// 第一个参数传的是要代理的对象
// 第二个参数配置在执行各种操作时代理 p 的行为
const p = new Proxy(data, {
    // 读取操作的捕捉器
    // 第一个参数是 目标对象
    // 第二个参数是 被获取的属性名
    // 第三个参数是 Proxy 或者被继承的 Proxy
    get (target, property, receiver) {
        return target[property];
    },
    // value 要设置的值
    set (target, property, value, receiver) {
        target[property] = value;
    }
});
```

## 设计模式

针对软件设计中普遍存在的各种问题所提出的解决方案

### 观察者模式

目标对象（被观察者 Subject）和多个对象（观察者 Observer）之间的关联；当被观察者对象发生状态改变，观察者做出相应的处理动作。比如：我和我的朋友（观察者）关注着门（被观察者），当门响了，我去开门，我的朋友去倒水。

适合组件内操作

#### 简单代码实现

```JavaScript
// 被观察者对象
// 1. 添加所有观察者
// 2. 能够通知观察者
class Subject {
  constructor() {
    // 观察者列表
    this.observers = [];
  }
  // 添加观察者
  addObservers(observer) {
    if (observer && observer.update) {
      this.observers.push(observer);
    }
  }
  // 通知观察者
  notify() {
    this.observers.forEach((o) => o.update());
  }
}
// 观察者对象
// 观察事物变化，做出相应的改变
class Observer {
  update() {
    console.log("观察者改变，做出相应动作");
  }
}
let s = new Subject();
let o1 = new Observer();
let o2 = new Observer();
s.addObservers(o1);
s.addObservers(o2);
s.notify();
```

### 发布-订阅模式

观察者模式解耦的进阶版本。

在发布者（Publisher）和订阅者（Subscriber）之间添加消息中心（Dependence），所有的消息都通过消息中心管理。也就是找个第三方，发布者和订阅者不会直接联系，从而实现了两者之间的解耦。

适合消息类型复杂的情况。

#### 代码实现

```JavaScript
// 消息中心
let eventBus = new Vue();

// 注册事件 订阅者
eventBus.$on("dataChange", () => {
    console.log("事件处理功能1");
});

eventBus.$on("dataChange", () => {
    console.log("事件处理功能2");
});

// 触发事件 发布者
eventBus.$emit("dataChange");
```
