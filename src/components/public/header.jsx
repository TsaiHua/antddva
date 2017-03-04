// 引入 React
import React from 'react';
// 引入 阿里的antd视觉组件
import {Menu, Icon, Popover} from 'antd'
// 引入 布局样式
import styles from '../layouts.less';

// 方法
const Header = (props) => {
  return (
    <div className={styles.header}>
      <Menu className='header-menu' mode='horizontal'>
        {/* <SubMenu style={{
          float: 'right'
        }} title={< span > <Icon type='user'/>
          {user.name} < /span>}>
          <Menu.Item key='logout'>
            <a>注销</a>
          </Menu.Item>
        </SubMenu> */}
      </Menu>
    </div>
  )
}

// 参数验证
Header.propTypes = {}

// 暴露方法
export default Header
