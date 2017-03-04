// 引入 React，组件
import React, { PropTypes } from 'react'

// 引入 视觉组件
import { Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select,Switch } from 'antd'

// 引入 样式
import styles from './activity.less'

// 定义 FormItem标签
const FormItem = Form.Item

// 定义 FormItem标签的布局样式
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
  visible, // 是否可见
  type, // 窗口类型
  item = {},
  onOk, // 确定方法
  onCancel, // 关闭方法
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
        <FormItem label='活动名称：' {...formItemLayout}>
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

        <FormItem label='活动图片：' {...formItemLayout}>
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

        <FormItem label='活动简介：' {...formItemLayout}>
          {getFieldDecorator('name2', {
            initialValue: item.name2,
            rules: [
              {
                message: '活动简介未填写'
              }
            ]
          })(<Input type="textarea"/>)}
        </FormItem>

        <FormItem {...formItemLayout} label="状态">
          {getFieldDecorator('status', { valuePropName: 'checked' })(
            <Switch />
          )}
        </FormItem>

        <FormItem label='活动时间：' {...formItemLayout}>
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
  )
}

// 参数验证
Modals.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

// 暴露方法
export default Form.create()(Modals)
