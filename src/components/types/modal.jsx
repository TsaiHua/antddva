// 引入 React，组件
import React, { PropTypes } from 'react';
// 引入阿里的antd视觉组件
import { Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select,Switch } from 'antd';
// 引入布局样式
import styles from './types.less';
//定义FormItem标签
const FormItem = Form.Item;

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
        <FormItem label='名称：' {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='单位：' {...formItemLayout}>
          {getFieldDecorator('unit', {
            initialValue: item.unit,
            rules: [
              {
                required: true,
                message: '单位未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='父级id：' {...formItemLayout}>
          {getFieldDecorator('parent_id', {
            initialValue: item.parent_id,
            rules: [
              {
                message: '父级id未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="状态">
          {getFieldDecorator('status', { valuePropName: 'unchecked' })(
            <Switch />
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
