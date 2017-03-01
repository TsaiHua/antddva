import React, {PropTypes} from 'react'
import {
  Upload,
  message,
  Button,
  Icon,
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  Select
} from 'antd'
const FormItem = Form.Item
import styles from './adsense.less';

const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

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
      ? '新增广告'
      : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='广告标题：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('title', {
            initialValue: item.title,
            rules: [
              {
                required: true,
                message: '广告标题未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='广告位置：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('position', {
            initialValue: item.position,
            rules: [
              {
                required: true,
                message: '广告位置未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>

        <FormItem label='广告图片：' hasFeedback {...formItemLayout}>
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

        <FormItem label='链接：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('nickName', {
            initialValue: item.nickName,
            rules: [
              {
                required: true,
                message: '链接未填写'
              }
            ]
          })(<Input/>)}
        </FormItem>


        <FormItem label="状态" hasFeedback {...formItemLayout} >
            {getFieldDecorator('status', {
              initialValue: item.status,
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
