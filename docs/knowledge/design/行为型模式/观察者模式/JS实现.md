---
title: JS实现
---

# 观察者模式—JS

* [求职](#求职)

## 求职

求职者在求职网站上，订阅了自己的求职岗位，当网站发现有合适的岗位时就会通知求职者。

```js
// 新工作信息
const jobPost = title => ({
  title: title
});

// 求职者类
class JobSeeker {
  constructor(name) {
    this._name = name;
  }
  // 接受通知
  notify(jobPost) {
    console.log(this._name, "has been notified of a new posting :", jobPost.title);
  }
}

// 招聘网站类
class JobBoard {
  constructor() {
    this._subscribers = [];
  }
  // 添加订阅本网站的求职者
  subscribe(jobSeeker) {
    this._subscribers.push(jobSeeker);
  }
  // 有新职业了，通知订阅者
  addJob(jobPosting) {
    this._subscribers.forEach(subscribe => {
      subscribe.notify(jobPosting);
    });
  }
}

// 客户端使用
const jonDoe = new JobSeeker('John Doe')
const janeDoe = new JobSeeker('Jane Doe')
const kaneDoe = new JobSeeker('Kane Doe')

// Create publisher and attach subscribers
const jobBoard = new JobBoard()
jobBoard.subscribe(jonDoe)
jobBoard.subscribe(janeDoe)

// Add a new job and see if subscribers get notified
jobBoard.addJob(jobPost('Software Engineer'))

// Output
// John Doe has been notified of a new posting : Software Engineer
// Jane Doe has been notified of a new posting : Software Engineer
```

