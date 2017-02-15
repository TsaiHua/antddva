import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './role.css';

function role() {
  return (
    <layout>role
    </layout>
  );
}

role.propTypes = {
};

export default connect()(role);
