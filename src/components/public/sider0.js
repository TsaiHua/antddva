// 引入 React
import React from 'react';
// 引入 链接组件
import { Link } from 'dva/router'
// 引入 配置文件
import { config } from '../../utils/config'
// 引入 菜单模块
import Menus from './menu'
// 引入 阿里的antd视觉组件
import {Switch, Icon} from 'antd';
// 引入 布局样式
import styles from '../layouts.less';

// 方法
function Sider ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys }){

  const menusProps = {
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys
  }

  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        {siderFold ? '' : <span>{config.logoText}</span>}
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type='bulb' />切换主题</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren='黑' unCheckedChildren='白' />
      </div> : ''}
    </div>
  );
};

// 暴露方法
export default Sider;
