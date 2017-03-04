// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 链接组件
import {routerRedux} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import Search from '../components/types/search'
import List from '../components/types/list'
import Modal from '../components/types/modal'

// 引入 视觉组件
//import {Table, Icon} from 'antd'

// 引入 样式
import styles from './types.less'

// 方法
function Types({loading, location, dispatch, types}) {

  // 从模型带参数到路由
  const {
    list,
    total,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = types

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
      dispatch({type: `types/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'types/hideModal'})
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
          pathname: '/types',
          query: {
            field: fieldsValue.field,
            keyword: fieldsValue.keyword
          }
        }))
        : dispatch(routerRedux.push({pathname: '/types'}))
    },
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
      <List {...listProps}/>
      <Modal {...modalProps}/>
    </div>
  )
}

// 参数验证
Types.propTypes = {
  types: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

// 输入逻辑（将外部state属性转进来当参数用）
const mapStateToProps = (state) => {
  return {loading: state.loading.models.types, types: state.types}
}

// 输出逻辑（把动作dispatch传出去）
// const mapDispatchToProps = ({types}) =>{
//   return {types}
// }

// 暴露方法
export default connect(mapStateToProps)(Types)
