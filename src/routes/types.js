import React,{ Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
// 引入 头管理组件
import Helmet from "react-helmet";
import Modal from '../components/types/modal';
import Search from '../components/types/search';
import List from '../components/types/list';

import { Table, Icon } from 'antd';
import styles from './types.less';


// 方法
function Types ({ location, dispatch, users }) {

  const { loading, list, pagination, currentItem, modalVisible, modalType } = users;
  const { field, keyword } = location.query;


    const userModalProps = {
      item: modalType === 'create' ? {} : currentItem,
      type: modalType,
      visible: modalVisible,
      onOk (data) {
        dispatch({
          type: `users/${modalType}`,
          payload: data
        })
      },
      onCancel () {
        dispatch({
          type: 'users/hideModal'
        })
      }
    }

    const userSearchProps = {
          field,
          keyword,
          // onSearch (fieldsValue) {
          //   fieldsValue.keyword.length ? dispatch(routerRedux.push({
          //     pathname: '/users',
          //     query: {
          //       field: fieldsValue.field,
          //       keyword: fieldsValue.keyword
          //     }
          //   })) : dispatch(routerRedux.push({
          //     pathname: '/users'
          //   }))
          // },
          onAdd () {
            dispatch({
              type: 'users/showModal',
              payload: {
                modalType: 'create'
              }
            })
          }
  }


  return (
    <div>
      <Helmet title="分类"/>
      <Layouts>
        <Search {...userSearchProps} />
        <List/>
        <Modal {...userModalProps} />
      </Layouts>
    </div>
  );
};

// 参数验证
Types.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps ({ users }) {
  return { users }
}

// 暴露方法
export default connect(mapStateToProps)(Types)
