// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 视觉组件
import {Table, Icon} from 'antd'

// 引入 样式
import styles from './goods.less'

//列表字段
const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID'
  }, {
    title: '商品名',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={'/name/' + record.id}>{text}</Link>
  }, {
    title: '商品号',
    dataIndex: 'Commodityquantity',
    key: 'Commodityquantity'
  }, {
    title: '单位',
    dataIndex: 'Company',
    key: 'Company'
  }, {
    title: '分类',
    dataIndex: 'classification',
    key: 'classification'
  }, {
    title: '品牌',
    dataIndex: 'brand',
    key: 'brand'
  }, {
    title: '退货规则',
    dataIndex: 'Returnrule',
    key: 'Returnrule'
  }, {
    title: '厂价',
    dataIndex: 'Factory',
    key: 'Factory'
  }, {
    title: '进货价',
    dataIndex: 'buyingprice',
    key: 'buyingprice'
  }, {
    title: '销售价',
    dataIndex: 'Sellingprice',
    key: 'Sellingprice'
  }, {
    title: '积分',
    dataIndex: 'integra',
    key: 'integra'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: '操作',
    key: 'action',
    className: styles['right'],
    render: (text, record) => (
      <span>
        <Link to={'/delete/' + record.id}>删除</Link>
        <span className="ant-divider"/>
        <Link to={'/auth/' + record.id}>授权</Link>
        <span className="ant-divider"/>
        <Link to={'/users/' + record.id}>查看</Link>
      </span>
    )
  }
]

// 方法
const List = (props) => {
  return (
    <div>
      <Table columns={columns} dataSource={props.dataSource} loading={props.loading} rowKey={record => record.id} pagination={true}/>
    </div>
  )
}

// 参数验证
List.propTypes = {}

// 暴露方法
export default List
