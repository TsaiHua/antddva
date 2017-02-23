import React,{ PropTypes } from 'react';
import { Form, Button, Row, Col } from 'antd'

import styles from './types.less';

// 方法
const Search = ({
  field,
  keyword,
  //onSearch,
  onAdd,
  // form: {
  //   getFieldDecorator,
  //   validateFields,
  //   getFieldsValue
  // }
}) => {

  // const searchGroupProps = {
  //   field,
  //   keyword,
  //   size: 'large',
  //   select: true,
  //   selectOptions: [{ value: 'name', name: '姓名' }, { value: 'address', name: '地址' }],
  //   selectProps: {
  //     defaultValue: field || 'name'
  //   },
  //   onSearch: (value) => {
  //     onSearch(value)
  //   }
  // }

  return (
    <Row gutter={24}>
     <Col lg={8} md={12} sm={16} xs={24} style={{marginBottom: 16}}>
       {/* <SearchGroup {...searchGroupProps} /> */}
     </Col>
     <Col lg={{offset: 8, span: 8}} md={12} sm={8} xs={24} style={{marginBottom: 16, textAlign: 'right'}}>
       <Button size='large' type='ghost' onClick={onAdd}>新增分类</Button>
     </Col>
   </Row>
  );
};

// 参数验证
Search.propTypes = {
    form: PropTypes.object.isRequired,
    onSearch: PropTypes.func,
    onAdd: PropTypes.func,
    field: PropTypes.string,
    keyword: PropTypes.string
};

// 暴露方法
export default Search;
