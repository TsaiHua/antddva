import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './types.css';

function types() {
  return (
    <layout>types
    </layout>
  );
}

types.propTypes = {
};

export default connect()(types);
