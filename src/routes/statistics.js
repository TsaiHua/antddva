import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './statistics.css';

function statistics() {
  return (
    <layout>statistics
    </layout>
  );
}

statistics.propTypes = {
};

export default connect()(statistics);
