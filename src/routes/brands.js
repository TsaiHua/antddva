import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './brands.css';

function brands() {
  return (
    <layout>brands
    </layout>
  );
}

brands.propTypes = {
};

export default connect()(brands);
