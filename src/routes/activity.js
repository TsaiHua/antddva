import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './activity.css';

function activity() {
  return (
    <layout>activity
    </layout>
  );
}

activity.propTypes = {
};

export default connect()(activity);
