import React from 'react';
import styles from './statistics.less';
import { Table, Icon } from 'antd';

const data = [{
  key: '1',
  username: '何晓亮',
  mobile: '13133339998',
  role: '超管',
  nickname: '小何',
  last_ip: '127.0.0.1',
  jifen: 88,
  last_time: '2017-02-14 22:55:20',
  status:'正常'

}, {
  key: '2',
  username: '何晓亮',
  mobile: '15533339998',
  role: '超管',
  nickname: '小何',
  last_ip: '127.0.0.1',
  jifen: 88,
  last_time: '2017-02-14 22:55:20',
  status:'正常'
}];

const columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    render: text => <a href="#">{text}</a>,
  },{
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  },{
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: text => <a href="#">{text}</a>,
  },{
    title: '昵称',
    dataIndex: 'nickname',
    key: 'nickname',
  },{
    title: '最后登录IP',
    dataIndex: 'last_ip',
    key: 'last_ip',
  },{
    title: '积分',
    dataIndex: 'jifen',
    key: 'jifen',
  },{
    title: '最后登录时间',
    dataIndex: 'last_time',
    key: 'last_time',
  },{
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">授权</a>
        <span className="ant-divider" />
        <a href="/#users/" className="ant-dropdown-link">查看</a>
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
