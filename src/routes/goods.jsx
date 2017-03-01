// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react';

// 引入 dva链接模型组件
import {connect} from 'dva';

// 引入 路由链接组件
import {Link} from 'dva/router';

// 引入 头管理组件
import Helmet from "react-helmet";

// 引入 自定义模块
import Modal from '../components/goods/modal';
import Search from '../components/goods/search';
import List from '../components/goods/list';

// 引入 antd视觉组件
import {Table, Icon} from 'antd';

// 引入 样式
import styles from './goods.less';

// 方法
function Goods({location, dispatch, goods}) {

  const {
    loading,
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = goods;
  const {field, keyword} = location.query;

  const modalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `goods/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'goods/hideModal'})
    }
  }

  const searchProps = {
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
    onAdd() {
      dispatch({
        type: 'goods/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  return (
    <div>
      <Helmet title="商品管理"/>
      <Search {...searchProps}/>
      <List/>
      <Modal {...modalProps}/>
    </div>
  );
};

// 参数验证
Goods.propTypes = {
  goods: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps({goods}) {
  return {goods}
}

// 暴露方法
export default connect(mapStateToProps)(Goods)
