// 引入 React
import React from 'react';
// 引入布局样式
import styles from './activity.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表字段
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '活动名',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="#">{text}</a>
  }, {
    title: '活动图片',
    dataIndex: 'position',
    key: 'position'
  }, {
    title: '活动周期',
    dataIndex: 'activitycycle',
    key: 'activitycycle'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    className:styles['right'],
    render: (text, record) => (
      <span>
        <a href="#" className="ant-dropdown-link">查看</a>
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
  );
};

// 参数验证
List.propTypes = {};

// 暴露方法
export default List;
