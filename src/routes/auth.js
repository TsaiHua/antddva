// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react';
// 引入 dva链接模型组件
import {connect} from 'dva';
// 引入 路由链接组件
import {Link} from 'dva/router';
// 引入 头管理组件
import Helmet from "react-helmet";
// 引入 自定义模块
import Modal from '../components/auth/modal';
import Search from '../components/auth/search';
import List from '../components/auth/list';
// 引入 antd视觉组件
import {Table, Icon} from 'antd';
// 引入 样式
import styles from './auth.less';

// 方法
const Auth = ({location}) => {
  return (
    <div>
        <Helmet title="权限管理"/>
        <List/>
    </div>
  )
}

// 参数验证
// Auth.propTypes = {
//   auth: PropTypes.object,
//   location: PropTypes.object,
//   dispatch: PropTypes.func
// };


// 暴露方法
export default Auth
