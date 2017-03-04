// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import Search from '../components/auth/search'
import List from '../components/auth/list'
import Modal from '../components/auth/modal'

// 引入 视觉组件
import {Table, Icon} from 'antd'

// 引入 样式
import styles from './auth.less'

// 方法
const Auth = ({loading, location, dispatch, auth}) => {

  // 从模型带参数到路由
  const {
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = auth

  // 搜索关键字
  const {field, keyword} = location.query


  // 弹窗参数
  const modalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `auth/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'auth/hideModal'})
    }
  }

  // 数据列参数
  const listProps = {
    // dispatch,
    loading: loading,
    dataSource: list,
    // pagination:
    // total,
    //page: pagination.current,
  }


  // 搜索参数
  const searchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      fieldsValue.keyword.length
        ? dispatch(routerRedux.push({
          pathname: '/auth',
          query: {
            field: fieldsValue.field,
            keyword: fieldsValue.keyword
          }
        }))
        : dispatch(routerRedux.push({pathname: '/auth'}))
    },
    onAdd() {
      dispatch({
        type: 'auth/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  return (
    <div>
      <Helmet title="权限管理"/>
      <Search {...searchProps}/>
      <List {...listProps} />
      <Modal {...modalProps}/>
    </div>
  )
}

// 参数验证
Auth.propTypes = {
  auth: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

// 输入逻辑（将外部state属性转进来当参数用）
const mapStateToProps = (state) => {
  return {loading: state.loading.models.auth, auth: state.auth}
}

// 输出逻辑（把动作dispatch传出去）
// const mapDispatchToProps = ({auth}) =>{
//   return {auth}
// }

// 暴露方法
export default connect(mapStateToProps)(Auth)
