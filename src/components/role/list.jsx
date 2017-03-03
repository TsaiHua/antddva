// 引入 React
import React from 'react';
// 引入布局样式
import styles from './role.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表字段
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
      render: text => <a href="#">{text}</a>,
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
        <a href="">授权</a>
        <span className="ant-divider" />
        <a href="" className="ant-dropdown-link">查看</a>
      </span>
    ),
  }];


// 方法
const List = (props) => {
  return (
    <div>
      <Table columns={columns} dataSource={props.dataSource} loading={props.loading} rowKey={record => record.id} pagination={true}/>
    </div>
  );
};

// 参数验证
List.propTypes = {
};

// 暴露方法
export default List;
