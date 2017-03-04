// 引入 React，组件
import React, {PropTypes} from 'react'

// 引入 视觉组件
import {Form, Button, Row, Col} from 'antd'

// 引入 样式
import styles from './orders.less'

// 引入 搜索框
import SearchGroup from '../../ui/search'

// 方法
const search = ({
  field,
  keyword,
  onSearch,
  onAdd,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  const searchGroupProps = {
    field,
    keyword,
    size: 'large',
    select: true,
    selectOptions: [
      {
        value: 'Ordernumber',
        name: '订单编号'
      }, {
        value: 'Consignee',
        name: '收货人'
      }, {
        value: 'Undersingle',
        name: '下单人'
      }, {
        value: 'Contactnumber',
        name: '联系电话'
      }
    ],
    selectProps: {
      defaultValue: field || 'Ordernumber'
    },
    onSearch: (value) => {
      onSearch(value)
    }
  }

  return (
    <Row gutter={24}>
      <Col lg={8} md={12} sm={16} xs={24} style={{
        marginBottom: 16
      }}>
        <SearchGroup {...searchGroupProps}/>
      </Col>
      <Col lg={{
        offset: 8,
        span: 8
      }} md={12} sm={8} xs={24} style={{
        marginBottom: 16,
        textAlign: 'right'
      }}></Col>
    </Row>
  )
}

search.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
  field: PropTypes.string,
  keyword: PropTypes.string
}

export default Form.create()(search)
