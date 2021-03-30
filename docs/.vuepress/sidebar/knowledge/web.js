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
        'css/read',
        'css/滚动穿透',
        'css/CSS书写规范'
      ]
    },
    {
      title: "JavaScript",
      children: [
        'javascript/read',
        {
          title: '基础概念',
          children: [
            {
              title: 'You-Dont-Know-JS',
              children: [
                'javascript/基础概念/you-dont-know-js/read',
                'javascript/基础概念/you-dont-know-js/入门与进阶',
                'javascript/基础概念/you-dont-know-js/作用域与闭包',
                'javascript/基础概念/you-dont-know-js/this与对象原型',
                'javascript/基础概念/you-dont-know-js/类型与文法',
                'javascript/基础概念/you-dont-know-js/异步与性能',
                'javascript/基础概念/you-dont-know-js/ES6与未来'
              ]
            },
            'javascript/基础概念/原型与原型链',
            'javascript/基础概念/作用域执行上下文与闭包',
            'javascript/基础概念/同步异步',
            'javascript/基础概念/实现class与extends',
            'javascript/基础概念/实现继承',
            'javascript/基础概念/this',
            'javascript/基础概念/applyCallBind',
            'javascript/基础概念/模块化',
            'javascript/基础概念/轮询',
            'javascript/基础概念/长连接和短连接',
            'javascript/基础概念/存储',
            'javascript/基础概念/跨域',
            'javascript/基础概念/async与defer'
          ]
        },
        {
          title: 'ECMAScript',
          children: [
            'javascript/ECMAScript/交叉观察者',
            'javascript/ECMAScript/弱引用映射',
            'javascript/ECMAScript/代理',
            'javascript/ECMAScript/反射'
          ]
        },
        {
          title: '正则表达式',
          children: [
            'javascript/正则表达式/read',
            {
              title: 'JavaScript正则迷你书',
              children: [
                'javascript/正则表达式/JS正则迷你书/read',
                'javascript/正则表达式/JS正则迷你书/字符匹配攻略',
                'javascript/正则表达式/JS正则迷你书/位置匹配攻略',
                'javascript/正则表达式/JS正则迷你书/括号的作用',
                'javascript/正则表达式/JS正则迷你书/回溯法原理',
                'javascript/正则表达式/JS正则迷你书/正则表达式的拆分',
                'javascript/正则表达式/JS正则迷你书/正则表达式的构建',
                'javascript/正则表达式/JS正则迷你书/正则表达式编程',
                'javascript/正则表达式/JS正则迷你书/速查表'
              ]
            }
          ]
        },
        {
          title: '函数式编程',
          children: [
            'javascript/函数式编程/read',
            'javascript/函数式编程/柯里化',
            'javascript/函数式编程/组合'
          ]
        },
        {
          title: '编写规范',
          children: [
            'javascript/编写规范/read',
            'javascript/编写规范/代码注释'
          ]
        }
      ]
    },
    {
      title: "Vue",
      children: [
        'vue/read',
        'vue/编码规范',
        'vue/项目结构',
        'vue/devtool'
      ]
    },
    {
      title: "React",
      children: [
        'react/read',
        'react/编码规范',
        'react/项目结构',
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
        'react/ReactHooks',
        'react/useEffect',
        'react/Immer',
        'react/ReduxThunk'
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
        'node/npm管理包',
        {
          title: 'CLI',
          children: [
            'node/cli/read',
            'node/cli/template-cli',
          ]
        }
      ]
    },
  ]