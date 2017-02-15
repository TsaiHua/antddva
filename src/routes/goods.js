import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './goods.css';

function goods() {
  return (
    <layout>goods
    </layout>
  );
}

goods.propTypes = {
};

export default connect()(goods);
