// 引入 React
import React from 'react';
// 引入布局样式
import styles from './finance.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表数据来源
const data = [{
    key: '1',
    id: '1',
    client: '李某(个人)',
    topupway: '微信',
    recharge: '123.45',
    balance: '123.45',
    creationtime: '2017-04-01 00:00:00',
    expenditure: '0.22',
    condition: '成功到帐',
  }, {
      key: '2',
      id: '2',
      client: '王某某(个人)',
      topupway: '支付宝',
      recharge: '666.22',
      balance: '666.22',
      creationtime: '2017-04-01 00:00:00',
      expenditure: '666',
      condition: '未到帐',
    }];

//列表字段
const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },{
    title: '客户名/类型',
    dataIndex: 'client',
    key: 'client',
  },{
    title: '充值途径',
    dataIndex: 'topupway',
    key: 'topupway',
  },{
    title: '充值金额',
    dataIndex: 'recharge',
    key: 'recharge',
  },{
    title: '账户余额',
    dataIndex: 'balance',
    key: 'balance',
  },{
    title: '创建时间',
    dataIndex: 'creationtime',
    key: 'creationtime',
  },{
    title: '支出',
    dataIndex: 'expenditure',
    key: 'expenditure',
  },{
    title: '状态',
    dataIndex: 'condition',
    key: 'condition',
  },{
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    className:styles['right'],
    render: (text, record) => (
      <span>
        <a href="#" className="ant-dropdown-link">账户明细</a>
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
