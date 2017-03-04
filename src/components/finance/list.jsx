// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 视觉组件
import {Table, Icon, Popconfirm, Button} from 'antd'

// 引入 样式
import styles from './finance.less'

// 列表 字段格式
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '客户名/类型',
    dataIndex: 'user_id',
    key: 'user_id'
  }, {
    title: '充值途径',
    dataIndex: 'topupway',
    key: 'topupway'
  }, {
    title: '充值金额',
    dataIndex: 'recharge',
    key: 'recharge'
  }, {
    title: '账户余额',
    dataIndex: 'balance',
    key: 'balance'
  }, {
    title: '创建时间',
    dataIndex: 'creationtime',
    key: 'creationtime'
  }, {
    title: '支出',
    dataIndex: 'expenditure',
    key: 'expenditure'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    className: styles['right'],
    render: (text, record) => (
      <span>
        <Link to={'/users/' + record.id}>账户明细</Link>
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
