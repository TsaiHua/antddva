// 引入 React，组件
import React, { PropTypes } from 'react';
// 引入阿里的antd视觉组件
import { Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select } from 'antd';
// 引入布局样式
import styles from './brands.less';
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
    title: `${type === 'create' ? '新增品牌' : '修改品牌'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='品牌名：' hasFeedback {...formItemLayout}>
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

        <FormItem label='网站' hasFeedback {...formItemLayout}>
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

        <FormItem label='logo' hasFeedback {...formItemLayout}>
          {getFieldDecorator('logo', {
            initialValue: item.logo
          })(<Input />)}
        </FormItem>

        <FormItem label='描述：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('desc', {
            initialValue: item.desc
          })(<Input type="textarea"/>)}
        </FormItem>

        <FormItem label='排序' hasFeedback {...formItemLayout}>
          {getFieldDecorator('sort', {
            initialValue: item.sort
          })(<Input />)}
        </FormItem>

        <FormItem label="状态" hasFeedback {...formItemLayout} >
            {getFieldDecorator('status', {
              initialValue: 'false'
            })(<Select>
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
