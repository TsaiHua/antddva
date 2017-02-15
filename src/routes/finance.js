import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './finance.css';

function finance() {
  return (
    <layout>finance
    </layout>
  );
}

finance.propTypes = {
};

export default connect()(finance);
