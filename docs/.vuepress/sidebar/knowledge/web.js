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
        'html/滚动条',
        'html/交叉观察者'
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
            'react/从零构建React/回顾React',
            'react/从零构建React/实现createElement'
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
    }
  ]