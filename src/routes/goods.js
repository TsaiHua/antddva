import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './goods.less';

// 方法
function Goods() {
  return (
    <Layouts>goods
    </Layouts>
  );
}

// 参数验证
Goods.propTypes = {
};

// 暴露方法
export default connect()(Goods);
