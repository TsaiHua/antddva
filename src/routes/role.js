import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './role.less';

// 方法
function Role() {
  return (
    <Layouts>role
    </Layouts>
  );
}

// 参数验证
Role.propTypes = {
};

// 暴露方法
export default connect()(Role);
