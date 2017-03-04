// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 链接组件
import {routerRedux} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import Search from '../components/finance/search'
import List from '../components/finance/list'
import Modal from '../components/finance/modal'

// 引入 视觉组件
//import {Table, Icon} from 'antd'

// 引入 样式
import styles from './finance.less'

// 方法
function Finance({loading, location, dispatch, finance}) {

  // 从模型带参数到路由
  const {
    list,
    total,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = finance

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
      dispatch({type: `finance/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'finance/hideModal'})
    }
  }

  // 数据列参数
  const listProps = {
    loading: loading,
    dataSource: list
  }

  // 搜索参数
  const searchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      fieldsValue.keyword.length
        ? dispatch(routerRedux.push({
          pathname: '/finance',
          query: {
            field: fieldsValue.field,
            keyword: fieldsValue.keyword
          }
        }))
        : dispatch(routerRedux.push({pathname: '/finance'}))
    },
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
      <Helmet title="充值管理"/>
      <Search {...searchProps}/>
      <List {...listProps}/>
      <Modal {...modalProps}/>
    </div>
  )
}

// 参数验证
Finance.propTypes = {
  finance: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

// 输入逻辑（将外部state属性转进来当参数用）
const mapStateToProps = (state) => {
  return {loading: state.loading.models.finance, finance: state.finance}
}

// 输出逻辑（把动作dispatch传出去）
// const mapDispatchToProps = ({finance}) =>{
//   return {finance}
// }

// 暴露方法
export default connect(mapStateToProps)(Finance)
