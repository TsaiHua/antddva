import React from 'react';
import {Menu, Breadcrumb, Icon } from 'antd';
const menus = (props) => {
  return (
    <div>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="heart-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="team" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
      </Menu>
    </div>
  );
};

menus.propTypes = {
};

export default menus;
