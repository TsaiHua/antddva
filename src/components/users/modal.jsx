// 引入 React，组件
import React, {PropTypes} from 'react'

// 引入 视觉组件
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  Select
} from 'antd'

// 引入 样式
import styles from './users.less'

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
  visible, //是否可见
  type, //窗口类型
  item = {},
  onOk, //确定方法
  onCancel, //关闭方法
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {

  function handleOk() {
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
    title: `${type === 'create'
      ? '新增用户'
      : '编辑用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='名称：' {...formItemLayout}>
          {getFieldDecorator('real_name', {
            initialValue: item.real_name,
            rules: [
              {
                required: true,
                message: '名称未填写'
              }
            ]
          })(<Input placeholder='张三'/>)}
        </FormItem>

        <FormItem label='手机号码：' {...formItemLayout}>
          {getFieldDecorator('mobile', {
            initialValue: item.mobile,
            rules: [
              {
                required: true,
                type: 'number',
                message: '请填写手机号码'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='昵称：' {...formItemLayout}>
          {getFieldDecorator('weixin_nickname', {
            initialValue: item.weixin_nickname,
            rules: [
              {
                required: true,
                message: '昵称未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='密码：' {...formItemLayout}>
          {getFieldDecorator('password', {
            initialValue: item.password,
            rules: [
              {
                required: true,
                message: '密码未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label="状态" {...formItemLayout}>
          {getFieldDecorator('status', {
            initialValue: 'false',
            rules: [
              {
                message: '状态未填写'
              }
            ]
          })(
            <Select style={{
              width: '50%'
            }}>
              <Select.Option value="false">false</Select.Option>
              <Select.Option value="true">true</Select.Option>
            </Select>
          )}
        </FormItem>

        <FormItem label='角色：' {...formItemLayout}>
          {getFieldDecorator('role', {
            initialValue: item.role,
            rules: [
              {
                message: '角色未填写'
              }
            ]
          })(<Input style={{
            width: '50%'
          }}/>)}
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
