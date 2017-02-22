import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select } from 'antd'
const FormItem = Form.Item

import styles from './finance.less';

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
    title: `${type === 'create' ? '新增活动' : '修改活动'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='活动名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '活动名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='活动图片：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name1', {
            initialValue: item.name1,
            rules: [
              {
                required: true,
                message: '图片未上传'
              }
            ]
          })(<Upload name="logo" action="/upload.do" listType="picture" >
            <Button>
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>)}
        </FormItem>

        <FormItem label='活动简介：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name2', {
            initialValue: item.name2,
            rules: [
              {
                required: true,
                message: '活动简介未填写'
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

        <FormItem label='活动时间：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name4', {
            initialValue: item.name4,
            rules: [
              {
                required: true,
                message: '活动时间未填写'
              }
            ]
          })(<Input />)}
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
