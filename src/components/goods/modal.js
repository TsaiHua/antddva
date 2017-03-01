import React, { PropTypes } from 'react'
import {Form, Input, InputNumber, Radio, Modal,Upload,Icon,Button,Select} from 'antd'
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
    title: `${type === 'create' ? '新增商品' : '修改用户'}`,
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
        })(<Input />)}
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
          })(<Input />)}
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
          })(<Input />)}
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
          })(<Input />)}
        </FormItem>

        <FormItem label='城市id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('city_id', {
            initialValue: item.city_id,
            rules: [
              {
                required: true,
                message: '城市id未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='品牌id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('brand_id', {
            initialValue: item.brand_id,
            rules: [
              {
                required: true,
                message: '品牌id未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='应商id' hasFeedback {...formItemLayout}>
          {getFieldDecorator('supplier_id', {
            initialValue: item.supplier_id,
            rules: [
              {
                required: true,
                message: '应商id未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='商品描述' hasFeedback {...formItemLayout}>
          {getFieldDecorator('good_desc', {
            initialValue: item.good_desc,
            rules: [
              {
                required: true,
                message: '商品描述未填写'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='商品图片：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('img', {
            initialValue: item.img,
            rules: [
              {
                required: true,
                message: '图片未上传'
              }
            ]
          })(<Upload name="logo" action="/upload.do" listType="picture" >
            <Button>
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>)}
        </FormItem>

      <FormItem label='状态' hasFeedback {...formItemLayout}>
        {getFieldDecorator('status', {
          initialValue: item.status,
          rules: [
            {
              message: '状态未填写'
            }
          ]
        })(<Select placeholder="true">
          <Select.Option value="false">true</Select.Option>
          <Select.Option value="true">false</Select.Option>
        </Select>)}
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

        <FormItem label="所属商品" hasFeedback {...formItemLayout} >
            {getFieldDecorator('status', {
              initialValue: item.status,
              rules: [
                {
                  message: '所属商品未填写'
                }
              ]
            })(<Select style={{ width: 130 }} placeholder="烽火源">
              <Select.Option value="false">牛匹选</Select.Option>
              <Select.Option value="true">烽火源</Select.Option>
            </Select>)}


            {getFieldDecorator('status', {
              initialValue: item.status,
              rules: [
                {
                  message: '所属商品未填写'
                }
              ]
            })(<Select style={{ width: 130,marginLeft:22 }} placeholder="烽火源">
              <Select.Option value="false">牛匹选</Select.Option>
              <Select.Option value="true">烽火源</Select.Option>
            </Select>)}
        </FormItem>

        <FormItem label='商品分类' hasFeedback {...formItemLayout}>

          {getFieldDecorator('status', {
            initialValue: item.status,
            rules: [
              {
                message: '所属商品未填写'
              }
            ]
          })(<Select style={{ width: 88 }} placeholder="请选择父级分类">
                <Option value="china">股票</Option>
                <Option value="use">食物</Option>
              </Select>)}

            {getFieldDecorator('status', {
              initialValue: item.status,
              rules: [
                {
                  message: '所属商品未填写'
                }
              ]
            })(<Select style={{ width: 88,marginLeft:10 }} placeholder="请选择分类">
              <Option value="china">股票</Option>
              <Option value="use">食物</Option>
            </Select>)}

            {getFieldDecorator('status', {
              initialValue: item.status,
              rules: [
                {
                  message: '所属商品未填写'
                }
              ]
            })(<Select style={{ width: 88,marginLeft:10 }} placeholder="请选择规格">
                <Option value="china">股票</Option>
                <Option value="use">食物</Option>
              </Select>)}
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
