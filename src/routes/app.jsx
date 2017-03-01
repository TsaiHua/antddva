// 引入 React，组件，参数
import React from 'react'

// 引入 dva链接模型组件
//import {connect} from 'dva'

// 引入 布局视图
import Layouts from '../components/layouts'

// 引入 样式
import styles from './app.less'

// 方法
const App = ({children,location}) => {

  return (
    <Layouts location={location}>
      {children}
    </Layouts>
  )
}

// 参数验证
// App.propTypes = {}

// 暴露方法
export default App
//export default connect()(App)
