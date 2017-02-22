import React,{ Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';

import Modal from '../components/activity/modal';
import Search from '../components/activity/search';
import List from '../components/activity/list';

import { Table, Icon } from 'antd';
import styles from './activity.less';

// 方法
function Activity() {
  return (
    <Layouts>
      <Search />
      <List />
      <Modal />
    </Layouts>
  );
}


// 参数验证
Activity.propTypes = {
  // users: PropTypes.object,
  // location: PropTypes.object,
  // dispatch: PropTypes.func
};

function mapStateToProps ({ activity }) {
  return { activity }
}

// 暴露方法
export default connect(mapStateToProps)(Activity);
