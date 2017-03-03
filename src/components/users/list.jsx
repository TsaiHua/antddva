// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 视觉组件
import {Table, Icon, Popconfirm, Button} from 'antd'

// 引入 样式
import styles from './users.less'

// 列表 字段格式
const columns = [
  {
    title: '用户名',
    dataIndex: 'real_name',
    key: 'real_name',
  }, {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile'
  }, {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: (text, record) => <Link to={'/role/' + record.id}>{text}</Link>
  }, {
    title: '昵称',
    dataIndex: 'nickname',
    key: 'nickname'
  },{
    title: '积分',
    dataIndex: 'jifen',
    key: 'jifen'
  }, {
    title: '最后登录',
    dataIndex: 'login_ip',
    key: 'login_ip'
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
        <Link to={'/auth/' + record.id}>授权</Link>
        <span className="ant-divider"/>
        <Link to={'/users/' + record.id}>详情</Link>
      </span>
    )
  }
];

// 方法
const List = (props) => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.dataSource}
        loading={props.loading}
        rowKey={record => record.id} 
        pagination={true}
      />
    </div>
  )
}

// 参数验证
List.propTypes = {}

// 暴露方法
export default List
