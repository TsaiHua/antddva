// 引入 React
import React from 'react';
// 引入布局样式
import styles from './brands.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表数据来源
const data = [{
    key: '1',
    id: '1',
    brand: '特能赢',
    classification: '一级特供',
    brandseries: '白色黑色',
    quantity: '59',
    condition: '禁用',
  },{
      key: '2',
      id: '2',
      brand: '宝宝乐',
      classification: '特供',
      brandseries: '白色',
      quantity: '233',
      condition: '正常',
    }];

//列表字段
const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },{
    title: '品牌名',
    dataIndex: 'brand',
    key: 'brand',
  },{
    title: '品牌分类',
    dataIndex: 'classification',
    key: 'classification',
  },{
    title: '品牌系列',
    dataIndex: 'brandseries',
    key: 'brandseries',
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
    render: (text, record) => (
      <span>
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
