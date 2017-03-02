// 引入 React
import React from 'react';
// 引入布局样式
import styles from './auth.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表数据来源
const data = [{
  key: '1',
  Rulename: 'user/admin',
  Ruledescription: '后台管理员，用户名',
  state: '正常'
},{
  key: '2',
  Rulename: 'user/admin',
  Ruledescription: '后台管理员，用户名',
  state: '禁用'
}];

//列表字段
const columns = [{
    title: '规则名称',
    dataIndex: 'Rulename',
    key: 'Rulename',
  },{
    title: '规则描述',
    dataIndex: 'Ruledescription',
    key: 'Ruledescription',
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
