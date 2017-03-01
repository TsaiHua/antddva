// 引入 React，组件
import React, { PropTypes } from 'react'

// 引入阿里的antd视觉组件
import { Form, Button, Row, Col } from 'antd'
// 引入布局样式
import styles from './adsense.less';
// 引入搜索框
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
    selectOptions: [{ value: 'Advertisingtitle', name: '广告标题' },],
    selectProps: {
      defaultValue: field || 'Advertisingtitle'
    },
    onSearch: (value) => {
      onSearch(value)
    }
  }

  return (
    <Row gutter={24}>
      <Col lg={8} md={12} sm={16} xs={24} style={{marginBottom: 16}}>
        <SearchGroup {...searchGroupProps} />
      </Col>
      <Col lg={{offset: 8, span: 8}} md={12} sm={8} xs={24} style={{marginBottom: 16, textAlign: 'right'}}>
        <Button size='large' className={styles.cols} type='ghost' onClick={onAdd}>新增广告</Button>
      </Col>
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
