import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './activity.less';

// 方法
function Activity() {
  return (
    <Layouts>
        activity
    </Layouts>
  );
}

// 参数验证
Activity.propTypes = {
};

// 暴露方法
export default connect()(Activity);
