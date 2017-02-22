import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './auth.less';

// 方法
function Auth() {
  return (
    <Layouts>
      auth
    </Layouts>
  );
}

// 参数验证
Auth.propTypes = {
};

// 暴露方法
export default connect()(Auth);
