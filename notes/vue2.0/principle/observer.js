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
