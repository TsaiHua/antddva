import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './home.css';

function home() {
  return (
    <layout>
      kkk
    </layout>
  );
}

home.propTypes = {

};

export default connect()(home);
