import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './brands.less';

// 方法
function Brands() {
  return (
    <Layouts>brands
    </Layouts>
  );
}

// 参数验证
Brands.propTypes = {
};

// 暴露方法
export default connect()(Brands);
