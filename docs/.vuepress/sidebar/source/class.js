module.exports = [
  {
    title: "类库",
    collapsable: false,
    children: [
      'read',
      'Events',
    ]
  },
  {
    title: 'Redux',
    children: [
      'Redux/read',
      'Redux/createStore',
      'Redux/combineReducers',
      'Redux/bindActionCreators',
      'Redux/applyMiddleware',
      'Redux/compose',
      'Redux/isPlainObject'
    ]
  },
  {
    title: 'Axios',
    children: [
      'Axios/read',
      'Axios/入口文件',
      'Axios/默认Config配置',
      'Axios/axios构造器类',
      'Axios/拦截器中间件',
      'Axios/dispatchRequest',
      'Axios/取消请求cancel',
      'Axios/工具方法'
    ]
  },
  {
    title: 'Promise',
    children: [
      'Promise/read',
      'Promise/Promise构造器',
      'Promise/finally',
      'Promise/done',
      'Promise/es6',
      'Promise/node',
      'Promise/rejection',
      'Promise/synchronous'
    ]
  }
]