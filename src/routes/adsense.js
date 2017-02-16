import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Layouts from '../components/layouts';
import styles from './adsense.css';

function adsense() {
  return (
    <Layouts>
    </Layouts>
  );
}

adsense.propTypes = {

};

export default adsense;
//export default connect()(adsense);
