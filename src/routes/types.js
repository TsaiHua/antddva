import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './types.css';

function types() {
  return (
    <Layouts>types
    </Layouts>
  );
}

types.propTypes = {
};

export default connect()(types);
