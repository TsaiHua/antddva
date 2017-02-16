import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Layouts from '../components/layouts';
import { Link } from 'dva/router';
import styles from './orders.css';

function orders() {
  return (
      <Layouts>
        dfsfa
      </Layouts>
  );
}

orders.propTypes = {
};

export default connect()(orders);
