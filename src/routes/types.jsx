// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 路由链接组件
import {Link} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import Modal from '../components/types/modal'
import Search from '../components/types/search'
import List from '../components/types/list'

// 引入 视觉组件
import {Table, Icon} from 'antd'

// 引入 样式
import styles from './types.less'

// 方法
function Types({location, dispatch, types}) {

  const {
    loading,
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = types
  const {field, keyword} = location.query

  // 弹窗属性
  const modalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `types/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'types/hideModal'})
    }
  }

  // 搜索属性
  const searchProps = {
    field,
    keyword,
    // onSearch (fieldsValue) {
    //   fieldsValue.keyword.length ? dispatch(routerRedux.push({
    //     pathname: '/types',
    //     query: {
    //       field: fieldsValue.field,
    //       keyword: fieldsValue.keyword
    //     }
    //   })) : dispatch(routerRedux.push({
    //     pathname: '/types'
    //   }))
    // },
    onAdd() {
      dispatch({
        type: 'types/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  return (
    <div>
      <Helmet title="分类管理"/>
      <Search {...searchProps}/>
      <List/>
      <Modal {...modalProps}/>
    </div>
  );
};

// 参数验证
Types.propTypes = {
  types: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
};

// 模型状态转到属性
function mapStateToProps({types}) {
  return {types}
}

// 暴露方法
export default connect(mapStateToProps)(Types)
