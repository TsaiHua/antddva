import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './adsense.less';

// 方法
function Adsense() {
  return (
    <Layouts>
    </Layouts>
  );
}
// 参数验证
Adsense.propTypes = {

};

// 暴露方法
export default Adsense;
//export default connect()(adsense);
