import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './system.css';

function system() {
  return (
    <layout>system
    </layout>
  );
}

system.propTypes = {
};

export default connect()(system);
