// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 视觉组件
import { Table, Icon } from 'antd'

// 引入 样式
import styles from './role.less'

// 列表字段
const columns = [{
    title: '角色名',
    dataIndex: 'name',
    key: 'name'
  },{
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },{
      title: '数量',
      dataIndex: 'Numder',
      key: 'Numder',
      render: (text, record) => <Link to={'/Numder/' + record.id}>{text}</Link>
  },{
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  }, {
    title: '操作',
    key: 'action',
    className:styles['right'],
    render: (text, record) => (
      <span>
          <Link to={'/auth/' + record.id}>授权</Link>
        <span className="ant-divider" />
          <Link to={'/users/' + record.id}>查看</Link>
      </span>
    ),
  }]


// 方法
const List = (props) => {
  return (
    <div>
      <Table columns={columns} dataSource={props.dataSource} loading={props.loading} rowKey={record => record.id} pagination={true}/>
    </div>
  )
}

// 参数验证
List.propTypes = {
}

// 暴露方法
export default List
