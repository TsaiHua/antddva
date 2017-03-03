import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,Select } from 'antd'
const FormItem = Form.Item

import styles from './system.less';

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

// 方法
const Forms = ({
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  return (
      <Form inline>
        <p>计费规则：</p>
        <FormItem style={{width:'80px' ,marginRight:'1%'}}>
          {getFieldDecorator('day', {
            initialValue:5,
            rules: [
              {
                required: true,
                type:'number',
                message: '数字'
              }
            ]
          })(<InputNumber min={1}/>)}
        </FormItem>
        <FormItem style={{width:'40px',marginRight:'1.5%'}}>
          {getFieldDecorator('dayclass', {
            initialValue:'day'
          })(<Select >
            <Select.Option value="day">天</Select.Option>
            <Select.Option value="week">周</Select.Option>
            <Select.Option value="month">月</Select.Option>
            <Select.Option value="year">年</Select.Option>
          </Select>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('money', {
            initialValue:6,
            rules: [
              {
                required: true,
                type:'number',
                message: '数字'
              }
            ]
          })(<InputNumber min={1}/>)}
          <span>元钱</span>
        </FormItem>
      </Form>
  );
};

// 参数验证
Forms.propTypes = {
};

// 暴露方法
export default Form.create()(Forms);
