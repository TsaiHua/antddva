// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 路由链接组件
import {Link} from 'dva/router'

// 引入 样式
import styles from './home.less'

// 方法
const Home = () => <div>home</div>

// 参数验证
Home.propTypes = {}

// 暴露方法
export default Home
