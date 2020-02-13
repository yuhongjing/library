module.exports = [
    {
      title: "设计模式知识",
      collapsable: false,
      children: [
        'read'
      ]
    },
    {
      title: '基础原则',
      children: [
        '基础原则/solid',
        '基础原则/迪米特法则',
        {
          title: '反射',
          children: [
            '基础原则/反射/read',
          ]
        }
      ]
    },
    {
      title: '创建型模式',
      children: [
        {
          title: '简单工厂模式',
          children: [
            '创建型模式/简单工厂模式/read',
            '创建型模式/简单工厂模式/PHP实现'
          ]
        },
        '创建型模式/工厂方法模式',
        '创建型模式/原型模式',
        '创建型模式/建造者模式',
        {
          title: '抽象工厂模式',
          children: [
            '创建型模式/抽象工厂模式/read',
            '创建型模式/抽象工厂模式/PHP实现',
            '创建型模式/抽象工厂模式/JS实现',
          ]
        }
      ]
    },
    {
      title: '行为型模式',
      children: [
        '行为型模式/策略模式',
        '行为型模式/模板方法模式',
        '行为型模式/观察者模式',
        {
          title: '状态模式',
          children: [
            '行为型模式/状态模式/read',
            '行为型模式/状态模式/PHP实现',
            '行为型模式/状态模式/JS实现'
          ]
        },
        {
          title: '备忘录模式',
          children: [
            '行为型模式/备忘录模式/read',
            '行为型模式/备忘录模式/PHP实现',
            '行为型模式/备忘录模式/JS实现'
          ]
        }
      ]
    },
    {
      title: '结构型模式',
      children: [
        '结构型模式/装饰者模式',
        '结构型模式/代理模式',
        '结构型模式/外观模式',
        {
          title: '适配器模式',
          children: [
            '结构型模式/适配器模式/read',
            '结构型模式/适配器模式/PHP实现',
            '结构型模式/适配器模式/JS实现'
          ]
        },
        {
          title: '组合模式',
          children: [
            '结构型模式/组合模式/read',
            '结构型模式/组合模式/PHP实现',
            '结构型模式/组合模式/JS实现'
          ]
        }
      ]
    }
  ]