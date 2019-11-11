/**
 * @file 测试用例
 * @author yuhongjing(yuhongjing@baidu.com)
 * @Date 2019-11-11 15:56:20
*/

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(num1, num2) {
        return this.strategy.doOperation(num1, num2);
    }
}

// 策略组
class StrategyOperation {
    doOperation(num1, num2) {}
}

// 单独策略
class AddOperation extends StrategyOperation {
    doOperation(num1, num2) {
        return num1 + num2;
    }
}
class SubtractOperation extends StrategyOperation {
    doOperation(num1, num2) {
        return num1 - num2;
    }
}

let context = new Context(new AddOperation());
console.log(context.executeStrategy(10, 5)); // 15
// 变化算法
context = new Context(new SubtractOperation());
console.log(context.executeStrategy(10, 5)); // 5
