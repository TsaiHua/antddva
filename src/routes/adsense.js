import React,{ Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
// 引入 布局
import Layouts from '../components/layouts';
// 引入 自定义模块
import Modal from '../components/adsense/modal';
import Search from '../components/adsense/search';
import List from '../components/adsense/list';

import { Table, Icon } from 'antd';
// 引入 样式
import styles from './adsense.less';

// 方法
function Adsense() {
  return (
    <Layouts>
      <Search />
      <List />
      <Modal />
    </Layouts>
  );
}


// 参数验证
Adsense.propTypes = {
  // users: PropTypes.object,
  // location: PropTypes.object,
  // dispatch: PropTypes.func
};

function mapStateToProps ({ adsense }) {
  return { adsense }
}

// 暴露方法
export default connect(mapStateToProps)(Adsense);
