// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react';
// 引入 dva链接模型组件
import {connect} from 'dva';
// 引入 链接组件
import {Link} from 'dva/router';
// 引入 头管理组件
import Helmet from "react-helmet";
// 引入 布局
import Layouts from '../components/layouts';
// 引入 样式
import styles from './statistics.less';

// 方法
function Statistics() {
  return (
    <div>
      <Helmet title="统计"/>
      <Layouts>statistics
      </Layouts>
    </div>
  );
}

// 参数验证
Statistics.propTypes = {};

// 暴露方法
export default connect()(Statistics);
