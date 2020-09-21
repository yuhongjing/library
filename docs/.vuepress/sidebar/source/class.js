module.exports = [
  {
    title: "类库",
    collapsable: false,
    children: [
      'read',
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
      'Events',
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
      }
    ]
  }
]