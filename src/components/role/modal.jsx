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
    title: `${type === 'create' ? '新增角色' : '修改用户'}`,
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

        <FormItem label='角色描述：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('description', {
            initialValue: item.description,
            rules: [
              {
                required: false,
                message: '角色描述未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label="状态" hasFeedback {...formItemLayout} >
            {getFieldDecorator('status', {
              initialValue: item.status,
              rules: [
                {
                  required: true,
                  message: '状态未填写'
                }
              ]
            })(<Select placeholder="false">
              <Select.Option value="false">false</Select.Option>
              <Select.Option value="true">true</Select.Option>
            </Select>)}
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
