// 引入 React，组件
import React, { PropTypes } from 'react'

// 引入 视觉组件
import { Form, Input, InputNumber, Radio, Modal,Select } from 'antd'

// 定义 FormItem标签
const FormItem = Form.Item

// 引入 样式
import styles from './role.less';

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
            })(<Select placeholder="false" style={{
              width: '50%'
            }}>
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
