// 引入 React
import React from 'react';
// 引入布局样式
import styles from './types.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表数据来源
const data = [{
    key: '1',
    id: '1',
    name: '股票',
    class: '一级分类',
    quantity: '168',
    condition: '正常',
  },{
      key: '2',
      id: '2',
      name: '股票>牛匹选',
      class: '二级分类',
      quantity: '168',
      condition: '正常',
    }];

//列表字段
const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },{
    title: '分类名称',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '分类级别',
    dataIndex: 'class',
    key: 'class',
  },{
    title: '商品数量',
    dataIndex: 'quantity',
    key: 'quantity',
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
        <a href="#" className="ant-dropdown-link">增加子级</a>
        <span className="ant-divider" />
        <a href="#" className="ant-dropdown-link">查看</a>
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
