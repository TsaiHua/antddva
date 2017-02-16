import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './statistics.css';

function statistics() {
  return (
    <Layouts>statistics
    </Layouts>
  );
}

statistics.propTypes = {
};

export default connect()(statistics);
