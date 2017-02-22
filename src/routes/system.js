import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './system.less';

// 方法
function System() {
  return (
    <Layouts>system
    </Layouts>
  );
}

// 参数验证
System.propTypes = {
};

// 暴露方法
export default connect()(System);
