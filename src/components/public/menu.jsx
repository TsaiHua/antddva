// 引入 React
import React from 'react'

// 引入 链接组件
import {Link} from 'dva/router'

// 引入 菜单配置文件
import {MenuNav} from '../../utils/menu'

// 引入 视觉组件
import {Menu, Icon} from 'antd'

// 引入 样式
import styles from '../layouts.less'

// 遍历 获取菜单配置列表
const topMenus = MenuNav.map(item => item.key);

// 处理 遍历后的菜单列表
const getMenus = function(menuArray, siderFold, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    if (item.child) {
      return (
        <Menu.SubMenu key={item.key} title={< span > {
          item.icon
            ? <Icon type={item.icon}/>
            : ''
        }
        {
          siderFold && topMenus.indexOf(item.key) >= 0
            ? ''
            : item.name
        } < /span>}>
          {getMenus(item.child, siderFold, parentPath + item.key + '/')}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon
              ? <Icon type={item.icon}/>
              : ''}
            {siderFold && topMenus.indexOf(item.key) >= 0
              ? ''
              : item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
};

// 方法
function Menus({
  siderFold,
  darkTheme,
  location,
  isNavbar,
  handleClickNavMenu,
  navOpenKeys,
  changeOpenKeys
}) {
  const menuItems = getMenus(MenuNav, siderFold)

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1))
    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys)
  }

  const getAncestorKeys = (key) => {
    const map = {
      navigation2: ['navigation']
    }
    return map[key] || []
  }

  // 菜单栏收起时，不能操作openKeys
  let menuProps = !siderFold
    ? {
      onOpenChange,
      openKeys: navOpenKeys
    }
    : {}

  return (
    <Menu {...menuProps} mode={siderFold
      ? 'vertical'
      : 'inline'} theme={darkTheme
      ? 'dark'
      : 'light'} onClick={handleClickNavMenu} defaultSelectedKeys={[location.pathname.split('/')[location.pathname.split('/').length - 1] || 'dashboard']}>
      {menuItems}
    </Menu>
  );
};

// 暴露方法
export default Menus;
