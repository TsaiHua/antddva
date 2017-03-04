// 引入 React，组件
import React, {PropTypes} from 'react'

// 引入 视觉组件
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  Upload,
  Icon,
  Button,
  Select
} from 'antd'

// 定义 FormItem标签
const FormItem = Form.Item

// 引入 样式
import styles from './goods.less';

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
      ? '新增商品'
      : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='用户id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('user_id', {
            initialValue: item.user_id,
            rules: [
              {
                required: true,
                message: 'id未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='商品名' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '商品名未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='市场价' hasFeedback {...formItemLayout}>
          {getFieldDecorator('market_price', {
            initialValue: item.market_price,
            rules: [
              {
                required: true,
                message: '市场价未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='销售价' hasFeedback {...formItemLayout}>
          {getFieldDecorator('shop_price', {
            initialValue: item.shop_price,
            rules: [
              {
                required: true,
                message: '销售价未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='城市id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('city_id', {
            initialValue: item.city_id,
            rules: [
              {
                required: false,
                message: '城市id未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='品牌id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('brand_id', {
            initialValue: item.brand_id,
            rules: [
              {
                required: false,
                message: '品牌id未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='应商id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('supplier_id', {
            initialValue: item.supplier_id,
            rules: [
              {
                required: false,
                message: '应商id未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='商品描述' hasFeedback {...formItemLayout}>
          {getFieldDecorator('good_desc', {
            initialValue: item.good_desc,
            rules: [
              {
                required: false,
                message: '商品描述未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='商品图片：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('img', {
            initialValue: item.img,
            rules: [
              {
                required: false,
                message: '图片未上传'
              }
            ]
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload"/>
                点击上传
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem label='状态' hasFeedback {...formItemLayout}>
          {getFieldDecorator('status', {
            initialValue: item.status,
            rules: [
              {
                message: '状态未填写'
              }
            ]
          })(
            <Select placeholder="true" style={{
              width: '50%'
            }}>
              <Select.Option value="false">true</Select.Option>
              <Select.Option value="true">false</Select.Option>
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
}

// 暴露方法
export default Form.create()(Modals)
