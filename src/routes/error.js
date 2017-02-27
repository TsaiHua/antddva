// 引入 React，参数
import React from 'react'
// 引入 antd视觉组件
import {Icon} from 'antd'
// 引入 样式
import styles from './error.less'

const Error = ({ location }) => (
  <div className='content-inner'>
    <div className={styles.error}>
      <Icon type='frown-o'/>
      <h1>404 Not Found <code>{location.pathname}</code></h1>
    </div>
  </div>
)

export default Error
