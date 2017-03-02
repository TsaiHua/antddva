// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 路由链接组件
import {Link} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import Modal from '../components/finance/modal'
import Search from '../components/finance/search'
import List from '../components/finance/list'

// 引入 视觉组件
import {Table, Icon} from 'antd'

// 引入 样式
import styles from './finance.less'

// 方法
function Finance({location, dispatch, finance}) {

  const {
    loading,
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = finance
  const {field, keyword} = location.query

  const modalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `finance/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'finance/hideModal'})
    }
  }

  const searchProps = {
    field,
    keyword,
    // onSearch (fieldsValue) {
    //   fieldsValue.keyword.length ? dispatch(routerRedux.push({
    //     pathname: '/finance',
    //     query: {
    //       field: fieldsValue.field,
    //       keyword: fieldsValue.keyword
    //     }
    //   })) : dispatch(routerRedux.push({
    //     pathname: '/finance'
    //   }))
    // },
    onAdd() {
      dispatch({
        type: 'finance/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  return (
    <div>
      <Helmet title="充值"/>
      <Search {...searchProps}/>
      <List/>
      <Modal {...modalProps}/>
    </div>
  );
};

// 参数验证
Finance.propTypes = {
  finance: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps({finance}) {
  return {finance}
}

// 暴露方法
export default connect(mapStateToProps)(Finance)
