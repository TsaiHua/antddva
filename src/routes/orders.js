import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './orders.css';

function orders() {
  return (
    <layout>orders
    </layout>
  );
}

orders.propTypes = {
};

export default connect()(orders);
