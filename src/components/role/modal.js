import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,Select } from 'antd'
const FormItem = Form.Item

import styles from './role.less';

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

// 方法
const Modals = ({
  visible,
  type,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {

  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建用户' : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='角色名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '角色名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='模块名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('nickName', {
            initialValue: item.nickName,
            rules: [
              {
                required: true,
                message: '模块名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>


        <FormItem label='控制器名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                message: '控制器名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='节点名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                message: '节点名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='角色描述：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: item.address,
            rules: [
              {
                required: true,
                message: '角色描述未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='状态' hasFeedback {...formItemLayout}>
          <Select placeholder="正常">
              <Option value="china">正常</Option>
              <Option value="use">禁用</Option>
            </Select>
        </FormItem>

      </Form>
    </Modal>
  );
};

// 参数验证
Modals.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
};

// 暴露方法
export default Form.create()(Modals);
