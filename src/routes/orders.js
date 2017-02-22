import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Layouts from '../components/layouts';
import { Link } from 'dva/router';
import styles from './orders.less';

// 方法
function Orders() {
  return (
      <Layouts>
        dfsfa
      </Layouts>
  );
}

// 参数验证
Orders.propTypes = {
};

// 暴露方法
export default connect()(Orders);
