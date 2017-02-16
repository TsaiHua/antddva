import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './system.css';

function system() {
  return (
    <Layouts>system
    </Layouts>
  );
}

system.propTypes = {
};

export default connect()(system);
