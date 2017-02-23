import React from 'react';
import styles from './role.less';
import { Table, Icon } from 'antd';

const data = [{
  key: '1',
  rolename: 'admin',
  describe: '平台管理员',
  Numder: '64',
  state: '正常'
},{
  key: '2',
  rolename: 'admin',
  describe: '平台管理员',
  Numder: '86',
  state: '禁用'
}];

const columns = [{
    title: '角色名',
    dataIndex: 'rolename',
    key: 'rolename'
  },{
    title: '描述',
    dataIndex: 'describe',
    key: 'describe',
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

// 参数验证
List.propTypes = {
};

// 暴露方法
export default List;
