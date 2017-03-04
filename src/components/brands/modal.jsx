// 引入 React，组件
import React, { PropTypes } from 'react'

// 引入 视觉组件
import { Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select,Switch } from 'antd'

// 引入 样式
import styles from './brands.less'

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
    title: `${type === 'create' ? '新增品牌' : '修改品牌'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='品牌名：' {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '品牌名未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='网站'  {...formItemLayout}>
          {getFieldDecorator('site', {
            initialValue: item.site,
            rules: [
              {
                required: true,
                message: '网站未填写'
              }
            ]
          })(<Input placeholder='www.example.com'/>)}
        </FormItem>

        <FormItem label='logo' {...formItemLayout}>
          {getFieldDecorator('logo', {
            initialValue: item.logo
          })(<Input />)}
        </FormItem>

        <FormItem label='描述：' {...formItemLayout}>
          {getFieldDecorator('desc', {
            initialValue: item.desc
          })(<Input type="textarea"/>)}
        </FormItem>

        <FormItem label='排序' {...formItemLayout}>
          {getFieldDecorator('sort', {
            initialValue: item.sort
          })(<Input style={{ width: '60%'}} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="状态">
          {getFieldDecorator('status', { valuePropName: 'checked' })(
            <Switch />
          )}
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
