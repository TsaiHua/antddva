// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 视觉组件
import {Table, Icon, Popconfirm, Button} from 'antd'

// 引入 样式
import styles from './types.less'

// 列表 字段格式
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '分类名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '分类级别',
    dataIndex: 'unit',
    key: 'unit'
  }, {
    title: '商品数量',
    dataIndex: 'quantity',
    key: 'quantity'
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
        <Link to={'/types/' + record.id}>增加子级</Link>
        <span className="ant-divider"/>
        <Link to={'/types/' + record.id}>查看</Link>
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
