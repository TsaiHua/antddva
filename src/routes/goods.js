import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './goods.css';

function goods() {
  return (
    <Layouts>goods
    </Layouts>
  );
}

goods.propTypes = {
};

export default connect()(goods);
