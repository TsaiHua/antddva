import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
//引入样式文件
import styles from './users.less';

// 路由（routes）里面准确用法是下面这样；
// 因为涉及到交互脚本，这样写最有效；
function Users({location, dispatch, users}) {
  return (
    <Layouts>
      activity
    </Layouts>
  );
}

//验证参数
// Users.propTypes = {
// users: PropTypes.object,
// location: PropTypes.object,
// dispatch: PropTypes.func
// };

//注入模型写法
// function mapStateToProps ({ users }) {
//   return { users }
// }

//链接models/users的写法
//export default connect(mapStateToProps)(Users)

//不链接模型的写法
//export default Users;
