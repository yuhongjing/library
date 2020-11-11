---
title: JS实现
---

# 模板模式-JS

* [手机系统](#手机系统)

## 手机系统

针对不同的手机系统，做不同的测试。

```js
class Builder {
  // Template method
  build() {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }
}

class AndroidBuilder extends Builder {
  test() {
    console.log('Running android tests');
  }

  lint() {
    console.log('Linting the android code');
  }

  assemble() {
    console.log('Assembling the android build');
  }

  deploy() {
    console.log('Deploying android build to server');
  }
}

class IosBuilder extends Builder {
  test() {
    console.log('Running ios tests');
  }

  lint() {
    console.log('Linting the ios code');
  }

  assemble() {
    console.log('Assembling the ios build');
  }

  deploy() {
    console.log('Deploying ios build to server');
  }
}

const androidBuilder = new AndroidBuilder()
androidBuilder.build()

// Output:
// Running android tests
// Linting the android code
// Assembling the android build
// Deploying android build to server

const iosBuilder = new IosBuilder()
iosBuilder.build()

// Output:
// Running ios tests
// Linting the ios code
// Assembling the ios build
// Deploying ios build to server
```

