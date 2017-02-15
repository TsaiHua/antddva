import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import layout from '../components/Layouts';
import styles from './users.css';

function users() {
  return (
    <layout>
      usersss
    </layout>
  );
}

users.propTypes = {
};

export default users;
