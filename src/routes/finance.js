import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './finance.css';

function finance() {
  return (
    <Layouts>finance
    </Layouts>
  );
}

finance.propTypes = {
};

export default connect()(finance);
