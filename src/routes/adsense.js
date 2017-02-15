import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './adsense.css';

function adsense() {
  return (
    <layout>
    </layout>
  );
}

adsense.propTypes = {

};

export default adsense;
//export default connect()(adsense);
