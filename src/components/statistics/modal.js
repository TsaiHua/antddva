import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select } from 'antd'
const FormItem = Form.Item

import styles from './statistics.less';

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
    title: `${type === 'create' ? '新增分类' : '修改分类'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='分类名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '分类名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label="分类级别" hasFeedback {...formItemLayout} >
            {getFieldDecorator('name1', {
              initialValue: item.name1,
              rules: [
                {
                  required: true,
                  message: '分类级别未填写'
                }
              ]
            })(<Select>
              <Select.Option value="one">一级分类</Select.Option>
            </Select>)}
        </FormItem>

        <FormItem label='分类描述：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name2', {
            initialValue: item.name2,
            rules: [
              {
                required: true,
                message: '分类描述未填写'
              }
            ]
          })(<Input type="textarea"/>)}
        </FormItem>

        <FormItem label="状态" hasFeedback {...formItemLayout} >
            {getFieldDecorator('name3', {
              initialValue: item.name3,
              rules: [
                {
                  required: true,
                  message: '状态未填写'
                }
              ]
            })(<Select>
              <Select.Option value="one">one</Select.Option>
              <Select.Option value="two">two</Select.Option>
              <Select.Option value="three">three</Select.Option>
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
