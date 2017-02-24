import React from 'react';
import styles from './activity.less';
import {Table, Icon} from 'antd';

const data = [
  {
    key: '1',
    id: '1',
    activity: '冰桶挑战',
    pic: 'pic',
    activitycycle: '2017-02-14 00:00:00至2017-02-14 23:59:59',
    condition: '正常/已到期/禁用'
  }, {
    key: '2',
    id: '2',
    activity: '与王失聪面对面',
    pic: 'pic',
    activitycycle: '2017-02-14 00:00:00至2017-02-14 23:59:59',
    condition: '正常'
  }
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '活动名',
    dataIndex: 'activity',
    key: 'activity',
    render: text => <a href="#">{text}</a>
  }, {
    title: '活动图片',
    dataIndex: 'pic',
    key: 'pic'
  }, {
    title: '活动周期',
    dataIndex: 'activitycycle',
    key: 'activitycycle'
  }, {
    title: '状态',
    dataIndex: 'condition',
    key: 'condition'
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: (text, record) => (
      <span>
        <a href="#" className="ant-dropdown-link">查看</a>
      </span>
    )
  }
];

// 方法
const List = (props) => {
  return (
    <div>
      <Table columns={columns} dataSource={data}/>
    </div>
  );
};

// 参数验证
List.propTypes = {};

// 暴露方法
export default List;
