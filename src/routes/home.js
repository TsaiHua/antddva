import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './home.css';
function home() {
  return (
    <Layouts>
      kkk
    </Layouts>
  );
}

home.propTypes = {

};

export default connect()(home);
