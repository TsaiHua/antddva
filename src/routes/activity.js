import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './activity.css';

function activity() {
  return (
    <Layouts>activity
    </Layouts>
  );
}

activity.propTypes = {
};

export default connect()(activity);
