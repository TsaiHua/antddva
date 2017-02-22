import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './types.less';

// 方法
function Types() {
  return (
    <Layouts>types
    </Layouts>
  );
}

// 参数验证
Types.propTypes = {
};

// 暴露方法
export default connect()(Types);
