module.exports = [
  {
    title: "框架",
    collapsable: false,
    children: [
      'read',
    ]
  },
  {
    title: 'React',
    children: [
      'React/read',
      {
        title: 'API解析',
        children: [
          'React/api/createElement',
          'React/api/cloneElement',
          'React/api/isValidElement',
          'React/api/lazy',
          'React/api/memo',
          'React/api/symbol',
        ]
      },
      {
        title: '基本概念',
        children: [
          'React/basic/宏观包结构',
          'React/basic/两大工作循环',
          'React/basic/高频对象',
        ]
      },
      {
        title: '运行核心',
        children: [
          'React/core/启动过程',
          'React/core/reconciler运作流程',
          'React/core/优先级管理',
          'React/core/调度原理',
          'React/core/fiber树构造基础准备',
          'React/core/fiber树构造初次创建',
          'React/core/fiber树构造对比更新',
          'React/core/fiber树渲染',
        ]
      },
      {
        title: '状态管理',
        children: [
          'React/state/状态与副作用',
          'React/state/Hook原理概述',
          'React/state/Hook原理状态',
          'React/state/Hook原理副作用',
          'React/state/context原理',
        ]
      },
      {
        title: '交互',
        children: [
          'React/interact/合成事件',
        ]
      },
      {
        title: '高频算法',
        children: [
          'React/algorithm/调和算法',
          'React/algorithm/位运算',
          'React/algorithm/深度优先遍历',
          'React/algorithm/堆排序',
          'React/algorithm/链表操作',
          'React/algorithm/栈操作',
        ]
      }
    ]
  }
]