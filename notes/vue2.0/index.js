// ******************Vue实例********************
var vm = new Vue({
  el: "#app",
  data: {
    num: 100,
    content: "<span>文本内容</span>",
    title: "动态绑定",
    classNum: "a",
    isShowA: true,
    isShowB: false,
    obj: {
      title: "多属性绑定",
      name: "对象绑定",
    },
    styleObj: { width: "200px", height: "200px", backgroundColor: "red" },
    styleObj2: {
      border: "1px solid black",
      color: "yellow",
    },
    liArr: ["arr1", "arr2", "arr3", "arr4"],
    liMap: {
      id: 1,
      content: "map1",
    },
    liArrKey: [
      { id: 1, name: "value1" },
      { id: 2, name: "value2" },
      { id: 3, name: "value3" },
      { id: 4, name: "value4" },
    ],
    isShowKey: false,
    isShow: false,
    modelText1: "",
    modelText2: "",
    radioValue: "",
    checkbox1: "",
    checkbox2: [],
    selectValue1: "",
    selectValue2: [],
  },
  methods: {
    increase() {
      this.num++;
    },
    reverse() {
      this.isShowKey ? this.liArr.reverse() : this.liArrKey.reverse();
    },
    isBindKey() {
      this.isShowKey = !this.isShowKey;
    },
    submit(content, event) {
      this.isShow = !this.isShow;
      console.log("事件", content, event);
    },
  },
  computed: {
    bindKeyContent() {
      return this.isShowKey ? "有key" : "没有key";
    },
  },
});

console.log(vm.$el);
console.log(vm.$data.num);
console.log(vm.num);

// ******************修饰符********************
var eventVue = new Vue({
  el: "#event",
  data: {
    count: 0,
    content: "",
  },
  methods: {
    preventFn() {
      alert("a标签点击事件");
    },
    stopEventFn() {
      this.count++;
    },
    onceEventFn() {
      alert("只弹出一次");
    },
    keyupEventFn(event) {
      alert("按键事件");
      console.log(event);
    },
  },
});

// ******************自定义指令********************

// 自定义全局指令
// 第一个参数是指令名称
// 第二个参数是配置对象
Vue.directive("focus", {
  // DOM中要执行的钩子函数
  // 钩子函数：在某些条件下执行的函数
  inserted: function (el, binding) {
    console.log(el);
    console.log(binding);
    el.focus();
  },
});

new Vue({
  el: "#app2",
  data: {},
});

// 自定义局部指令
new Vue({
  el: "#app3",
  data: {},
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
});

// ******************过滤器********************

// 全局过滤器
// return 处理过的文本
Vue.filter("filterA", function (value) {
  console.log(value);
  return value.split("").join("-");
});

Vue.filter("filterB", function (value) {
  console.log(value);
  return value.toUpperCase();
});

Vue.filter("filterC", function (value, par2, par3) {
  return value + par2 + par3;
});

new Vue({
  el: "#filter",
  data: {
    value: "abc",
  },
});

// 局部过滤器
new Vue({
  el: "#filter2",
  data: {
    content: "1234",
  },
  filters: {
    filterD: function (value) {
      console.log(value);
      return value.split("").join("-");
    },
  },
});

// ******************计算属性********************
// 多个相同的调用，只会执行一次，当执行的返回数据有改变，才会再次执行
new Vue({
  el: "#computed",
  data: {
    arr: [1, 2, 3, 4, 5, 6],
  },
  computed: {
    // 默认书写方式
    sum() {
      var sum = 0;
      for (var i = 0; i < this.arr.length; i++) {
        sum += this.arr[i];
      }
      return sum;
    },
  },
});

// setter
//computed2.sum = 10
var computed2 = new Vue({
  el: "#computed2",
  data: {
    arr: [1, 2, 3, 4, 5, 6],
  },
  computed: {
    sum: {
      // getter
      get() {
        var sum = 0;
        for (var i = 0; i < this.arr.length; i++) {
          sum += this.arr[i];
        }
        return sum;
      },
      // setter
      // 修改计算属性 sum 时自动调用
      set(newValue) {
        this.arr.push(newValue);
      },
    },
  },
});

// ******************侦听器********************
var watch = new Vue({
  el: "#watch",
  data: {
    value: "",
    obj: {
      content1: "内容1",
      content2: "内容2",
    },
  },
  watch: {
    value(newValue, oldvalue) {
      console.log("执行了侦听器", newValue, oldvalue);
    },
    // watch.obj.content1 = '新'
    // 触发
    obj: {
      deep: true,
      handler(value) {
        console.log("执行了对象监听器", value);
      },
    },
  },
});
