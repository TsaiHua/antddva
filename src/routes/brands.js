import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './brands.css';

function brands() {
  return (
    <Layouts>brands
    </Layouts>
  );
}

brands.propTypes = {
};

export default connect()(brands);
