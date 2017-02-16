import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './auth.css';

function auth() {
  return (
    <Layouts>
      auth
    </Layouts>
  );
}

auth.propTypes = {
};

export default connect()(auth);
