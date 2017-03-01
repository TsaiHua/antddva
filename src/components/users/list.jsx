// 引入 React
import React from 'react'

// 引入 视觉组件
import {Table, Icon, Pagination, Popconfirm, Button} from 'antd'

// 引入 样式
import styles from './users.less'

//列表数据来源
const data = [
  {
    key: '1',
    username: '何晓亮',
    mobile: '13133339998',
    role: '超管',
    nickname: '小何',
    last_ip: '127.0.0.1',
    jifen: 88,
    last_time: '2017-02-14 22:55:20',
    status: '正常'
  }, {
    key: '2',
    username: '何晓亮',
    mobile: '15533339998',
    role: '超管',
    nickname: '小何',
    last_ip: '127.0.0.1',
    jifen: 88,
    last_time: '2017-02-14 22:55:20',
    status: '正常'
  }
];

//列表字段
const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    render: text => <a href="#">{text}</a>
  }, {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile'
  }, {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: text => <a href="#">{text}</a>
  }, {
    title: '昵称',
    dataIndex: 'nickname',
    key: 'nickname'
  }, {
    title: '最后登录IP',
    dataIndex: 'last_ip',
    key: 'last_ip'
  }, {
    title: '积分',
    dataIndex: 'jifen',
    key: 'jifen'
  }, {
    title: '最后登录时间',
    dataIndex: 'last_time',
    key: 'last_time'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">授权</a>
        <span className="ant-divider"/>
        <a href="/#users/" className="ant-dropdown-link">查看</a>
      </span>
    )
  }
];

// 方法
const List = (props) => {

  function deleteHandler(id) {
    dispatch({type: 'users/remove', payload: id});
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({pathname: '/users', query: {
        page
      }}));
  }

  function editHandler(id, values) {
    dispatch({
      type: 'users/patch',
      payload: {
        id,
        values
      }
    });
  }

  function createHandler(values) {
    dispatch({type: 'users/create', payload: values});
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} loading={loading} rowKey={record => record.id} pagination={false}/>
      <Pagination total={total} current={current} pageSize={PAGE_SIZE} onChange={pageChangeHandler}/>
    </div>
  )
}

// 参数验证
List.propTypes = {}

// 暴露方法
export default List
