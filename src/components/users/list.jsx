// 引入 React
import React from 'react'

// 引入 视觉组件
import {Table, Icon, Popconfirm, Button} from 'antd'

// 引入 样式
import styles from './users.less'

//列表字段
const columns = [
  {
    title: '用户名',
    dataIndex: 'real_name',
    key: 'real_name',
    render: text => <a href="#">{text}</a>
  }, {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile'
  }, {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: text => <a href="#">{text}</a>
  }, {
    title: '昵称',
    dataIndex: 'nickname',
    key: 'nickname'
  }, {
    title: '最后登录IP',
    dataIndex: 'login_ip',
    key: 'login_ip'
  }, {
    title: '积分',
    dataIndex: 'jifen',
    key: 'jifen'
  }, {
    title: '最后登录时间',
    dataIndex: 'login_time',
    key: 'login_time'
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
        <a href="#">授权</a>
        <span className="ant-divider"/>
        <a href="/#users/" className="ant-dropdown-link">查看</a>
      </span>
    )
  }
];

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
