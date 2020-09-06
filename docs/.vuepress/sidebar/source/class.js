module.exports = [
  {
    title: "类库",
    collapsable: false,
    children: [
      'read',
      {
        title: 'Redux源码',
        children: [
          'Redux/read',
          'Redux/createStore',
          'Redux/combineReducers',
          'Redux/bindActionCreators',
          'Redux/applyMiddleware',
          'Redux/compose',
          'Redux/isPlainObject'
        ]
      }
    ]
  }
]