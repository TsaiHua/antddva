// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 视觉组件
import {Table, Icon} from 'antd'

// 引入 样式
import styles from './orders.less'

//列表字段
const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID'
  }, {
    title: '订单编号',
    dataIndex: 'sn',
    key: 'sn',
    render: (text, record) => <Link to={'/sn/' + record.id}>{text}</Link>
  }, {
    title: '收货人',
    dataIndex: 'Consignee',
    key: 'Consignee'
  }, {
    title: '下单人',
    dataIndex: 'Undersingle',
    key: 'Undersingle'
  }, {
    title: '联系电话',
    dataIndex: 'mobile',
    key: 'mobile'
  }, {
    title: '送货地址',
    dataIndex: 'Deliveryaddress',
    key: 'Deliveryaddress'
  }, {
    title: '运费',
    dataIndex: 'freight',
    key: 'freight'
  }, {
    title: '订单总价',
    dataIndex: 'Orderprice',
    key: 'Orderprice'
  }, {
    title: '创建时间',
    dataIndex: 'Createtime',
    key: 'Createtime'
  }, {
    title: '状态',
    dataIndex: 'pay_status',
    key: 'pay_status'
  }, {
    title: '操作',
    key: 'action',
    className: styles['right'],
    render: (text, record) => (
      <span>
        <Link className="ant-dropdown-link" to={'/users/' + record.id}>查看</Link>
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
