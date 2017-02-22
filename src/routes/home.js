import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './home.less';

// 方法
function Home() {
  return (
    <Layouts>
      kkk
    </Layouts>
  );
}

// 参数验证
Home.propTypes = {

};

// 暴露方法
export default connect()(Home);
