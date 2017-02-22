import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './finance.less';

// 方法
function Finance() {
  return (
    <Layouts>finance
    </Layouts>
  );
}

// 参数验证
Finance.propTypes = {
};

// 暴露方法
export default connect()(Finance);
