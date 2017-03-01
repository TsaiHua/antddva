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
        <FormItem label='用户名：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '用户名未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>
        <FormItem label='密码：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name1', {
            initialValue: item.name1,
            rules: [
              {
                required: true,
                message: '密码未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='手机号：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name2', {
            initialValue: item.name2,
            rules: [
              {
                required: true,
                message: '手机号未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='邮箱：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name3', {
            initialValue: item.name3,
            rules: [
              {
                required: true,
                message: '邮箱未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='昵称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name4', {
            initialValue: item.name4,
            rules: [
              {
                required: true,
                message: '昵称未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='角色' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name6', {
            initialValue: item.name6,
            rules: [
              {
                required: true,
                type: 'boolean',
                message: '请选择角色'
              }
            ]
          })(
            <Radio.Group>
              <Radio value>管理员</Radio>
              <Radio value={false}>用户</Radio>
            </Radio.Group>
          )}
        </FormItem>

        <FormItem label="状态" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name7', {
            initialValue: item.name7,
            rules: [
              {
                required: true,
                message: '状态未填写'
              }
            ]
          })(
            <Select>
              <Select.Option value="one">one</Select.Option>
              <Select.Option value="two">two</Select.Option>
              <Select.Option value="three">three</Select.Option>
            </Select>
          )}
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
