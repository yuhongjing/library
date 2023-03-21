---
title: JS实现
---

# 工厂方法模式-JS

* [招聘](#招聘)

## 招聘

招聘各职位经理。

```js
class Developer {
  askQuestions() {
    console.log('Asking about design patterns!');
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log('Asking about community building');
  }
}

class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

// client
const devManager = new DevelopmentManager();
devManager.takeInterview(); // output: Asking about design patterns

const marketing = new MarketingManager();
marketing.takeInterview(); // output: Asking about community building
```

