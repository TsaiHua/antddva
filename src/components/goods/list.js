// 引入 React
import React from 'react';
// 引入布局样式
import styles from './goods.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表数据来源
const data = [{
  key: '1',
  ID:'1',
  Commodityname: '王小牙',
  Commodityquantity: 'cs0843',
  Company: '包',
  classification: '股票',
  brand: '牛匹选',
  Returnrule: '允许退货',
  Factory: '56.00',
  buyingprice:'58.00',
  Sellingprice: '62.8',
  integra: '56',
  status:'上架'
}, {
  key: '2',
  ID:'2',
  Commodityname: '王小牙',
  Commodityquantity: 'cs0843',
  Company: '箱',
  classification: '股票',
  brand: '牛匹选',
  Returnrule: '允许退货',
  Factory: '56.00',
  buyingprice:'58.00',
  Sellingprice: '62.8',
  integra: '56',
  status:'下架'
}];

//列表字段
const columns = [{
  title: 'ID',
  dataIndex: 'ID',
  key: 'ID',
},{
    title: '商品名',
    dataIndex: 'Commodityname',
    key: 'Commodityname',
   render: text => <a href="#">{text}</a>
  },{
    title: '商品编号',
    dataIndex: 'Commodityquantity',
    key: 'Commodityquantity',
  },{
    title: '单位',
    dataIndex: 'Company',
    key: 'Company',
  },{
      title: '分类',
      dataIndex: 'classification',
      key: 'classification',
  },{
    title: '分类',
    dataIndex: 'brand',
    key: 'brand',
  },{
    title: '退货规则',
    dataIndex: 'Returnrule',
    key: 'Returnrule',
  },{
    title: '厂价',
    dataIndex: 'Factory',
    key: 'Factory',
  },{
    title: '进货价',
    dataIndex: 'buyingprice',
    key: 'buyingprice',
  },{
    title: '销售价',
    dataIndex: 'Sellingprice',
    key: 'Sellingprice',
  },{
    title: '积分',
    dataIndex: 'integra',
    key: 'integra',
  },{
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
      <a href="">删除</a>
      <span className="ant-divider" />
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
