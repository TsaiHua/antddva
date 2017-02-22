import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './statistics.less';

// 方法
function Statistics() {
  return (
    <Layouts>statistics
    </Layouts>
  );
}

// 参数验证
Statistics.propTypes = {
};

// 暴露方法
export default connect()(Statistics);
