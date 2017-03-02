// 引入 React
import React from 'react';
// 引入布局样式
import styles from './adsense.less';
// 引入阿里的antd视觉组件
import { Table, Icon } from 'antd';

//列表数据来源
const data = [{
  key: '1',
  ID:'1',
  Advertisingtitle: '圈圈红包就是好',
  Advertisingpicture: '图片',
  Createtime: '2017-02-16 09：30：00',
  status:'正常'
}, {
  key: '2',
  ID:'2',
  Advertisingtitle: '圈圈红包就是好',
  Advertisingpicture: '图片',
  Createtime: '2017-02-16 09：30：00',
  status:'禁用'
}];

//列表字段
const columns = [{
  title: 'ID',
  dataIndex: 'ID',
  key: 'ID',
},{
    title: '广告标题',
    dataIndex: 'Advertisingtitle',
    key: 'Advertisingtitle'
  },{
    title: '广告图片',
    dataIndex: 'Advertisingpicture',
    key: 'Advertisingpicture',
  },{
    title: '创建时间',
    dataIndex: 'Createtime',
    key: 'Createtime',
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
