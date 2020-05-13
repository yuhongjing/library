module.exports = [
    {
      title: "前端知识",
      collapsable: false,
      children: [
        'read'
      ]
    },
    {
      title: "HTML",
      children: [
        'html/read',
        'html/滚动条'
      ]
    },
    {
      title: "CSS",
      children: [
        'css/read'
      ]
    },
    {
      title: "JavaScript",
      children: [
        'javascript/read',
        {
          title: 'ECMAScript',
          children: [
            'javascript/ECMAScript/交叉观察者',
            'javascript/ECMAScript/弱引用映射'
          ]
        },
        {
          title: '正则表达式',
          children: [
            'javascript/正则表达式/read',
            'javascript/正则表达式/字符匹配攻略',
            'javascript/正则表达式/位置匹配攻略',
            'javascript/正则表达式/括号的作用',
            'javascript/正则表达式/回溯法原理',
            'javascript/正则表达式/正则表达式的拆分',
            'javascript/正则表达式/正则表达式的构建',
            'javascript/正则表达式/正则表达式编程',
            'javascript/正则表达式/速查表'
          ]
        },
        'javascript/函数柯里化'
      ]
    },
    {
      title: "Vue",
      children: [
        'vue/read',
        'vue/编码规范',
        'vue/devtool'
      ]
    },
    {
      title: "React",
      children: [
        'react/read',
        'react/编码规范',
        {
          title: '从零构建React',
          children: [
            'react/从零构建React/前言',
            'react/从零构建React/从最简单的React渲染说起',
            'react/从零构建React/实现createElement函数',
            'react/从零构建React/实现render函数',
            'react/从零构建React/并发模式ConcurrentMode',
            'react/从零构建React/Fibers数据结构',
            'react/从零构建React/render和commit阶段',
            'react/从零构建React/更新和删除节点Reconciliation',
            'react/从零构建React/函数组件',
            'react/从零构建React/函数组件Hooks',
            'react/从零构建React/总结'
          ]
        },
        {
          title: '从零实现Redux',
          children: [
            'react/从零实现Redux/前言',
            'react/从零实现Redux/状态管理器',
            'react/从零实现Redux/多文件协作',
            'react/从零实现Redux/中间件middleware',
            'react/从零实现Redux/完整的redux',
            'react/从零实现Redux/最佳实践',
            'react/从零实现Redux/总结'
          ]
        },
        'react/完全理解高阶组件',
        'react/ReactHooks'
      ]
    },
    {
      title: "Webpack",
      children: [
        'webpack/read'
      ]
    },
    {
      title: "TypeScript",
      children: [
        'typescript/read'
      ]
    },
    {
      title: "Node",
      children: [
        'node/read',
        'node/npm管理包'
      ]
    },
  ]