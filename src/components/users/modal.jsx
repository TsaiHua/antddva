// 引入 React，组件
import React, {PropTypes} from 'react'

// 引入阿里的antd视觉组件
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  Select
} from 'antd'

// 引入布局样式
import styles from './users.less'

//定义FormItem标签
const FormItem = Form.Item

//定义FormItem标签的布局样式
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
      : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='名称：' hasFeedback {...formItemLayout}>
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

        <FormItem label='手机号码：' hasFeedback {...formItemLayout}>
        {getFieldDecorator('mobile', {
          initialValue: item.mobile,
          rules: [
            {
              required: true,
              type:'number',
              message: '请填写手机号码'
            }
          ]
        })(<Input />)}
        </FormItem>

        <FormItem label='昵称：' hasFeedback {...formItemLayout}>
        {getFieldDecorator('weixin_nickname', {
          initialValue: item.weixin_nickname,
          rules: [
            {
              required: true,
              message: '昵称未填写'
            }
          ]
        })(<Input />)}
        </FormItem>

        <FormItem label='最后登录ip地址：' hasFeedback {...formItemLayout}>
        {getFieldDecorator('login_ip', {
          initialValue: item.login_ip,
          rules: [
            {
              message: '最后登录ip地址未填写'
            }
          ]
        })(<Input />)}
        </FormItem>

        <FormItem label='最后登录时间：' hasFeedback {...formItemLayout}>
        {getFieldDecorator('login_time', {
          initialValue: item.login_time,
          rules: [
            {
              message: '最后登录时间未填写'
            }
          ]
        })(<Input />)}
        </FormItem>

        <FormItem label='密码：' hasFeedback {...formItemLayout}>
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

        <FormItem label="状态" hasFeedback {...formItemLayout} >
            {getFieldDecorator('status', {
              initialValue: 'false',
              rules: [
                {
                  message: '状态未填写'
                }
              ]
            })(<Select placeholder="false">
              <Select.Option value="false">false</Select.Option>
              <Select.Option value="true">true</Select.Option>
            </Select>)}
        </FormItem>

        <FormItem label='角色：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('role', {
            initialValue: item.role,
            rules: [
              {
                message: '角色未填写'
              }
            ]
          })(<Input/>)}
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
