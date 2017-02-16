import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './role.css';

function role() {
  return (
    <Layouts>role
    </Layouts>
  );
}

role.propTypes = {
};

export default connect()(role);
