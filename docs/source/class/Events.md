---
title: Events
---

# Events

实现了Node的`events`模块，提供给`浏览器`等环境使用。

其API及调用方式，参考[Node手册](https://nodejs.org/dist/v11.13.0/docs/api/events.html)即可。

[源码地址](https://github.com/browserify/events)

## 结构分析

只保留核心代码，去除参数验证、功能函数等。

`events`模块的结构不像`redux`那样模块之间强依赖。

`events`生成实例后，其各个原型方法任君调用，相互都比较独立，不存在一环嵌套一环的情况。

因此，其结构就是普通的`订阅/发布者模式`的结构，非常简单。

```js
EventEmitter.prototype._events = undefined; // 订阅对象，记录当前存在的订阅方法
EventEmitter.prototype._eventsCount = 0; // 订阅方法数量
EventEmitter.prototype._maxListeners = undefined; // 每个订阅方法，最大订阅成员

// 入口
function EventEmitter() {
  // new 生成实例时，会调用init方法，初始化配置
  EventEmitter.init.call(this);
}

// 暴露出口
module.exports = EventEmitter;
module.exports.once = once;

// 实例生成时，初始化配置
EventEmitter.init = function() {
  // ...
};

// 设置最大订阅者数量
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
 // ... 
};

// 获得最大订阅者数量
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  // ...
};

// 发布事件
EventEmitter.prototype.emit = function emit(type) {
  // ...
};

// 添加订阅者
EventEmitter.prototype.addListener = function addListener(type, listener) {
  // ...
};

// 订阅发布相关三方库中，几乎都以on与addListerner两者之一，表示添加订阅者
// 这里为了兼容，将两者都设置了
EventEmitter.prototype.on = EventEmitter.prototype.addListener;

// 事件是同步执行的，因此需要区分先后
// 订阅者队列靠前，先执行
// on，在订阅者队列的尾部插入
// prepend，在订阅者队列的头部插入
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
	// ...
};

// 仅发布一次的订阅方法
EventEmitter.prototype.once = function once(type, listener) {
 // ... 
};

// 在订阅者队列头部，添加仅发布一次的订阅方法
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
 // ... 
}；

// 移除某个订阅方法
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
 // ... 
}；

// 与on一样，为了兼容，移除某个订阅方法
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

// 移除所有订阅方法
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  // ...
}；

// 获取某个订阅方法，其订阅者队列中的所有订阅者，不包括封装的订阅者(once)
EventEmitter.prototype.listeners = function listeners(type) {
  // ... 
};

// 获取某个订阅方法，其订阅者队列的所有订阅者
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  // ...
};
  
// 获取某个订阅方法，其订阅者队列的订阅人数
EventEmitter.prototype.listenerCount = listenerCount;

// 获取当前所有的订阅方法
EventEmitter.prototype.eventNames = function eventNames() {
  // ...
};
```

`events`模块是完全根据`Node events`模块实现的。

其暴露了两个API：

* `EventEmitter`：包含了`Node events`的所有方法。
* `once`：仅发布一次的订阅方法，与原型方法`once`相同。

`events`模块整体实现的功能也比较简单，主要是围绕着`订阅`与`发布`相关的操作：

* 订阅

  * 添加——头部添加(`prependListener`)、尾部添加(`addListener、on`)
  * 删除——删除单个(`removeListener、off`)、删除全部(`removeAllListeners`)
  * 配置——订阅人数(`listenerCount`)、订阅者(`listeners、rawListeners`)、最大订阅人数(`getMaxListeners`)、设置最大订阅人数(`setMaxListeners`)
  * 单次订阅(`prependOnceListener`、`once`)

* 发布

  * 发布(`emit`)

* 配置

  * （**非原型方法**）初始化配置(`init`)

  * 获取全部订阅方法名(`eventNames`)

    

## 例子

```js
const EventEmitter = require('./event');
// 这样也是可以的
// const {EventEmitter, once} = require('./event');

const event = new EventEmitter();

event.on('test', () => {
  console.log('我是监听函数')
});

event.emit('test');
// output: 我是监听函数
```

使用方法非常简单，如下三步，即可实现订阅发布功能。

* 生成实例`new EventEmiiter()`，即可使用所有的原型方法了。
* 添加订阅方法
* 发布

## 代码解析

下面将依次分析，`events`是如何实现的订阅/发布者模式功能。

其源码类似函数块的方式，非强依赖，因此逐个解读即可。

### init

```js
function EventEmitter() {
  EventEmitter.init.call(this);
}

EventEmitter.init = function() {
  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};
```

生成实例时`new EventEmitter()`时，会调用`init`方法。

其作用是初始化参数配置，`undefined`表示未初始化。

### on/addListener/prependListener

```js
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

// prependListener和addListener一样，仅仅是最后一个参数为true
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
	return _addListener(this, type, listener, true);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

function _addListener(target, type, listener, prepend) {
  
  var m; // 最大订阅者个数
  var events; // 全部订阅方法
  var existing; // 当前订阅方法成员
  
  // 检查listener是否为函数，这里必须是回调函数
  checkListener(listener);

  // 获取所有的订阅事件
  events = target._events;
  // once包裹一层时的情况
  if (events === undefined) {
    // 跟init方法一样，初始化配置
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // 提供一个插入的副作用
    // 在newListener回调中注册到相同name的任何其他监听器，将插入到正在添加的监听器之前
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      events = target._events;
    }
    // 获取当前订阅事件
    existing = events[type];
  }

  // 如果当前订阅事件不存在，说明需要新生成一个订阅事件
  if (existing === undefined) {
    // 只有一个订阅者时，不需要订阅队列，直接赋值回调函数即可。
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    // 如果当前订阅事件为函数，说明已经有一个订阅者了
    // 现在再添加一个订阅者时，需要一个订阅者队列了
    if (typeof existing === 'function') {
      // 这里根据prepend来判断，新订阅者的插入位置
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // 否则，说明已经存在两个订阅者了，这里根据prepend判断插入顺序
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }
    // 因此，以上这一段说明了，订阅者队列有三个类型
    // 1. 当前无订阅者 -> undefined，此时新增订阅者直接赋值回调函数即可 -> function
    // 2. 当前存在一个订阅者 -> function，此时新增订阅者，需要改造成数组队列 -> array
    // 3. 当前存在两个以上订阅者 -> array，此时新增，直接插入数组两端即可 -> array

    // 获取每个订阅方法最多存在几个订阅者，默认10个
    m = _getMaxListeners(target); 
    // 判断订阅者长度是否合法
    if (m > 0 && existing.length > m && !existing.warned) {
      // 控制台报错信息，!existing.warned只报错一次。
      existing.warned = true;
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}
```

该`API`实现添加订阅者的功能，主要核心逻辑就是`将回调函数存入在对应数组中`。

这里面做了一些优化操作。

* 一个订阅者存放函数，多个订阅者为队列
* 插入顺序控制，可以前后选择
* 副作用`newListener`，注册订阅者时提供一个前置钩子
* 订阅者数量控制

关于`newListener`的例子，它提供一个副作用特性，其它地方注册方法时，会先执行`newListener`的回调函数。

```js
const myEmitter = new MyEmitter();
// 只处理一次，避免无限循环。
// 执行顺序 1
myEmitter.once('newListener', (event, listener) => {
  // 执行顺序 3
  if (event === 'event') {
    // 在前面插入一个新的监听器。
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
// 执行顺序 2 触发回调
myEmitter.on('event', () => {
  console.log('A');
});
// 执行顺序 4
myEmitter.emit('event');
// 打印:
//   B
//   A
```

其实现了一个订阅者订阅的前置钩子，执行流程为

* `once`执行，给原型队列添加了`newListener`
* 添加`event`方法时，发现原型队列存在`newListener`，立刻触发其回调函数
* 回调函数完毕，再继续执行之前的语句
* 从而实现插入添加

### emit

```js
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  // 获取其他参数
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    // events.error语句处理，当订阅事件名为error时不与doError混淆
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // 监听error类型的事件，出现错误时，直接抛出异常，避免返回不精准的值
  // 例如false和true等
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      throw er;
    }
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err;
  }

  // 获取该订阅事件所对应的订阅成员
  var handler = events[type];

  // 订阅事件不存在，也可以说无人订阅
  if (handler === undefined)
    return false;

  // 订阅者队列只有一个成员时，为函数类型
  if (typeof handler === 'function') {
    // 反射API Reflect.apply
    // 等同于ES5 Function.prototype.apply.call通过Reflect更简洁
    // 这里需要绑定this，不能直接触发回调函数的原因
    // 因为once订阅事件，触发完毕后，还需要执行清除订阅成员操作
    // 因此不能直接触发回调函数，导致this丢失，从而无法执行后续操作
    ReflectApply(handler, this, args);
  } else {
    // 订阅者队列多个时，循环队列触发
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }
  

  return true;
};
```

该`API`实现了订阅事件触发功能，核心逻辑就是`依次触发所有传入的回调函数`。

这里做了几个操作

* 参数分离，`type`和其他参数
* `error`事件处理与区分混淆
* 触发回调函数，无成员、单成员、多成员的触发
* 循环监听避免

如何避免的死循环

```js
// 这样处理并不会导致死循环
emitter.on('lock', function lock() {
  emitter.on('lock', lock);
});

//  --------------------------- 分隔 --------------------------
// 监听嵌套时，会导致订阅者不断增加
// 例如[lock, lock, lock, lock, lock]
// 但是因为在执行之前，已经复制了一份订阅者队列
// 数组的长度已经固定下来，从而避免了死循环
var listeners = arrayClone(handler, len);
```



### once/prependOnceListener

```js
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

// prependOnceListener和once一样
// on与prependListener都是调用的_addlistener
// 其最后一个参数分别为false与true，仅此区别
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
	checkListener(listener);
	this.prependListener(type, _onceWrap(this, type, listener));
	return this;
};

// fired: 标识位，是否移除此订阅器
// wrapFn: 包装后的函数，用于移除订阅器
function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  // 真正的订阅函数
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  // 返回了包装函数，触发的回调函数就是这个包装函数
  return wrapped;
}

// 包装函数
function onceWrapper() {
  // 是否需要移除该订阅成员
  if (!this.fired) {
    // 先移除监听器，再触发真正的订阅函数
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    // 调用真正的订阅函数
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
```

该`API`实现一次性订阅事件，其核心逻辑为`装饰器模式，订阅函数外层包括一层函数，执行真正订阅函数之前，移除该订阅成员`。

### off/removeListener/removeAllListeners

```js
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

// 移除指定的listener，因此传入的listener函数引用必须与on订阅的回调引用一致
// const callback = () => {console.log("我是回调函数")}
// myEmitter.on('test', callback);
// myEmitter.removeListener('test', callback); 移除的callback与订阅的callback引用相同
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      // 当前是否存在订阅事件
      if (events === undefined)
        return this;

      // 获取当前订阅事件的成员
      list = events[type];
      if (list === undefined)
        return this;

      // 当前订阅方法，仅有一个订阅成员时或者当前订阅成员为once类型
      if (list === listener || list.listener === listener) {
        // 如果移除当前订阅方法后，订阅方法数为0
        if (--this._eventsCount === 0)
          // 则初始化订阅配置
          this._events = Object.create(null);
        else {
          // 当前存在多个订阅方法时，按正常逻辑，移除当前listener
          delete events[type];
          // 如果当前订阅方法中，存在订阅removeListener方法，发布相关信息
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
        // 订阅队列有多个成员，为队列类型时
      } else if (typeof list !== 'function') {
        // 循环整个队列，寻找当前listener位置
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          // 判断是否等于listener，以方法和once两种情况判断
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        // 未找到，直接返回不做任何处理
        if (position < 0)
          return this;

        // 移除成员，做了特殊处理，shift效率更高
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        // 一个成员时，将队列退回方法，保持一致
        if (list.length === 1)
          events[type] = list[0];

        // 如果当前订阅方法中，存在订阅removeListener方法，发布相关信息
        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };
```

`off/removeListener API`实现了移除单个订阅成员的功能，核心逻辑为`找到订阅方法，获取其成员是否与存在传入listener，然后删除此成员`。

这里做了几个操作

* `listener`必须为函数
* 区分成员数，单个与多个的操作区分
* 数组成员时，移除策略做了区分，然后成员为单个时，成员队列变换为成员方法
* 如果存在`removeListener`订阅事件，则发布它

```js
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // 没订阅removeListener方法，则无须触发removeListener
      if (events.removeListener === undefined) {
        // 没有传送任何参数
        if (arguments.length === 0) {
          // 直接初始化订阅配置，清除全部订阅方法及其事件
          this._events = Object.create(null);
          this._eventsCount = 0;
          // 如果传送了type参数，且订阅方法中存在type时，仅移除此订阅方法
        } else if (events[type] !== undefined) {
          // 如果移除此订阅方法后，订阅方法数为0
          if (--this._eventsCount === 0)
            // 初始化订阅配置
            this._events = Object.create(null);
          else
            // 否则仅移除此订阅方法
            delete events[type];
        }
        return this;
      }

      // 如果订阅了removeListener，需触发removeListener订阅方法
      // 如果没有传送任何参数，则移除全部订阅方法
      if (arguments.length === 0) {
        // 遍历订阅方法的全部key
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          // 除了removeListener，其余订阅方法全部移除
          if (key === 'removeListener') continue;
          // 除了removeListener，其余key移除传入removeAllListeners遍历删除
          // 每个方法移除时，都会触发removeAllListeners方法
          this.removeAllListeners(key);
        }
        // 其余事件移除完毕后，最后移除removeListener方法
        this.removeAllListeners('removeListener');
        // 初始化订阅配置
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      // 如果传入type，则仅移除此订阅方法
      listeners = events[type];

      // 这里不直接调用this.removeAllListeners(key)的原因是为了触发removeListener方法

      // 单个成员时直接移除
      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
        // 多个成员时，遍历移除
      } else if (listeners !== undefined) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };
```

该`API`实现了删除全部订阅方法或者删除某个订阅方法的功能，其核心逻辑为`直接初始化订阅配置，或者删除某个订阅方法即可`。

这里做了几个操作

* 区分是否订阅`removeListener`
* 区分是否传入`type`
* 其他方法移除时，需要触发`removeListener`方法，因此`removeListener`需要在最后移除

### listenerCount

```js
// 这个API在Node V4.0.0已被弃用，调用方式如下：
// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// console.log(EventEmitter.listenerCount(myEmitter, 'event')); output: 2

EventEmitter.listenerCount = function(emitter, type) {
  // 兼容，判断当前emitter是否存在listenerCount方法
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

// 目前使用这个API
EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    // 获取对应的订阅事件成员
    var evlistener = events[type];

    // 为function表示单个成员
    if (typeof evlistener === 'function') {
      return 1;
      // 否则多个成员，返回成员数组长度
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}
```

该`API`实现了返回当前某个订阅方法的订阅成员人数，核心逻辑为`返回订阅成员长度，数组或函数`。

### listeners/rawListeners

```js
// 返回订阅队列全部成员，封装的订阅成员，返回其真正的订阅成员 event.listener
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

// 返回订阅队列全部成员，包括封装的订阅成员，例如 once
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  // 单个成员时
  if (typeof evlistener === 'function')
    // 判断是否返回封装的订阅成员(例如once)
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  // 遍历成员队列
  // 判断是否为封装的订阅成员
  // 是->返回真正的订阅成员 arr[i].listener
  // 否->直接返回订阅成员 arr[i]
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
```

该`API`返回了订阅方法的全部成员(**拷贝**)，核心逻辑为`获取对应订阅方法，拷贝订阅队列或方法返回即可`。

这里做了如下操作

* 判断是否需要返回封装的订阅成员，是否获取`.listener`
* 单成员直接返回，多成员拷贝返回

###  getMaxListeners/setMaxListeners

```js
EventEmitter.prototype._maxListeners = undefined;

var defaultMaxListeners = 10;

function _getMaxListeners(that) {
  // 判断是否设置了最大订阅成员，否则为默认的订阅成员数量
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  // 判断是否为数值型
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
```

这两`API`实现了获取、设置最大订阅成员数量的功能，实现非常简单。核心逻辑为`改变_maxListeners变量即可`。

这里做了几个操作

* 判断数值规范
* 判断是否使用默认值

## 总结

典型的`订阅/发布模式`代码，算是这个设计模式的经典例子。
