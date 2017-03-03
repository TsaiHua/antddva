// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 容器组件
import {connect} from 'dva'

// 引入 路由链接组件
import {Link} from 'dva/router'

// 引入 头管理组件
import Helmet from "react-helmet"

// 引入 自定义模块
import Search from '../components/adsense/search'
import List from '../components/adsense/list'
import Modal from '../components/adsense/modal'

// 引入 视觉组件
import {Table, Icon} from 'antd'

// 引入 样式
import styles from './adsense.less'

// 方法
function Adsense({loading,location, dispatch, adsense}) {

  // 从模型带参数到路由
  const {
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = adsense;

    // 搜索关键字
  const {field, keyword} = location.query;

  // 弹窗参数
  const modalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `adsense/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'adsense/hideModal'})
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


  // 搜索属性
  const searchProps = {
    field,
    keyword,


  }

  return (
    <div>
      <Helmet title="广告管理"/>
      <Search {...searchProps}/>
      <List  {...listProps}/>
      <Modal {...modalProps}/>
    </div>
  );
};

// 参数验证
Adsense.propTypes = {
  adsense: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
};

// 输入逻辑（将外部state属性转进来当参数用）
const mapStateToProps = (state) => {
  return {loading: state.loading.models.adsense, adsense: state.adsense}
}

// 输出逻辑（把动作dispatch传出去）
// const mapDispatchToProps = ({adsense}) =>{
//   return {adsense}
// }


// 暴露方法
export default connect(mapStateToProps)(Adsense)
