// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
//import {connect} from 'dva'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import List from '../components/statistics/list'

// 引入 样式
import styles from './statistics.less'

// 方法
function Statistics() {
  return (
    <div>
      <Helmet title="数据统计"/>
      <List />
    </div>
  );
}

// 参数验证
Statistics.propTypes = {};

// 暴露方法
export default Statistics;
