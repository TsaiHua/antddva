// 引入 React
import React from 'react';

// 引入布局样式
import styles from './auth.less';

// 引入 链接组件
import {Link} from 'dva/router'

// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表字段
const columns = [{
    title: '规则名称',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '规则描述',
    dataIndex: 'desc',
    key: 'desc',
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
