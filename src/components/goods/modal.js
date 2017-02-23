import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,Select } from 'antd'
const FormItem = Form.Item

import styles from './goods.less';

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
    title: `${type === 'create' ? '新建用户' : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='商品名称' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '商品名称未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='商品单位' hasFeedback {...formItemLayout}>
          {getFieldDecorator('nickName', {
            initialValue: item.nickName,
            rules: [
              {
                required: true,
                message: '商品单位未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='所属商品' hasFeedback {...formItemLayout}>
          <Select style={{ width: 130 }} placeholder="烽火源">
              <Option value="china">牛匹选</Option>
              <Option value="use">烽火源</Option>
            </Select>

            <Select style={{ width: 130,marginLeft:22 }} placeholder="烽火源">
                <Option value="china">牛匹选</Option>
                <Option value="use">烽火源</Option>
              </Select>
        </FormItem>

        <FormItem label='商品分类' hasFeedback {...formItemLayout}>
          <Select style={{ width: 88 }} placeholder="请选择父级分类">
              <Option value="china">股票</Option>
              <Option value="use">食物</Option>
            </Select>

            <Select style={{ width: 88,marginLeft:10 }} placeholder="请选择分类">
                <Option value="china">股票</Option>
                <Option value="use">食物</Option>
              </Select>

              <Select style={{ width: 88,marginLeft:10 }} placeholder="请选择规格">
                  <Option value="china">股票</Option>
                  <Option value="use">食物</Option>
                </Select>
        </FormItem>

        <FormItem label='退货规则' hasFeedback {...formItemLayout}>
          <Select placeholder="允许退货">
              <Option value="china">允许退货</Option>
              <Option value="use">不允许退货</Option>
            </Select>
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
