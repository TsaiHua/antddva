import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './auth.css';

function auth() {
  return (
    <layout>
      auth
    </layout>
  );
}

auth.propTypes = {
};

export default connect()(auth);
