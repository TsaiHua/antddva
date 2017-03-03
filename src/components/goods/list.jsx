// 引入 React
import React from 'react';
// 引入布局样式
import styles from './goods.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';


//列表字段
const columns = [{
  title: 'ID',
  dataIndex: 'ID',
  key: 'ID',
},{
    title: '商品名',
    dataIndex: 'name',
    key: 'name',
   render: text => <a href="#">{text}</a>
  },{
    title: '商品号',
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
    title: '品牌',
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
    className:styles['right'],
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
      <Table columns={columns} dataSource={props.dataSource} loading={props.loading} rowKey={record => record.id} pagination={true}/>
    </div>
  );
};

// 参数验证
List.propTypes = {
};

// 暴露方法
export default List;
