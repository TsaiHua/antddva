import React,{ Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';

import Modal from '../components/auth/modal';
import Search from '../components/auth/search';
import List from '../components/auth/list';

import { Table, Icon } from 'antd';
import styles from './auth.less';

// 方法
function Auth() {
  return (
    <Layouts>
      <Search />
      <List />
      <Modal />
    </Layouts>
  );
}


// 参数验证
Auth.propTypes = {
  // users: PropTypes.object,
  // location: PropTypes.object,
  // dispatch: PropTypes.func
};

function mapStateToProps ({ auth }) {
  return { auth }
}

// 暴露方法
export default connect(mapStateToProps)(Auth);
