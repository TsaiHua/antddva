// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react'

// 引入 阿里的antd视觉组件
import {Layout, Table, Breadcrumb, Icon} from 'antd'

// 调出 视觉组件布局模块
const {Header, Footer, Sider, Content} = Layout

// 引入 自定义模块
import Headers from './public/header'
import Bread from './public/bread'
import Footers from './public/footer'
import Siders from './public/sider'

// 引入 布局样式
import styles from './layouts.less'

// 方法
class Layouts extends React.Component {

  //组件状态
  state = {
    collapsed: false
  };

  //头部属性
  // const headerProps = {
  //   user:this.state.user,
  //   siderFold:this.state.siderFold,
  //   location,
  //   isNavbar:this.state.isNavbar,
  //   //menuPopoverVisible,
  //   navOpenKeys:this.state.navOpenKeys,
  //
  //   switchMenuPopover() {
  //     dispatch({type: 'app/switchMenuPopver'})
  //   },
  //   logout() {
  //     dispatch({type: 'app/logout'})
  //   },
  //   switchSider() {
  //     dispatch({type: 'app/switchSider'})
  //   },
  //
  //   changeOpenKeys(openKeys) {
  //     localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
  //     dispatch({
  //       type: 'app/handleNavOpenKeys',
  //       payload: {
  //         navOpenKeys: openKeys
  //       }
  //     })
  //   }
  //
  // }

  //边栏属性
  // const siderProps = {
  //   siderFold,
  //   darkTheme,
  //   location,
  //   navOpenKeys,
  //   changeTheme() {
  //     dispatch({type: 'app/changeTheme'})
  //   },
  //   changeOpenKeys(openKeys) {
  //     localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
  //     dispatch({
  //       type: 'app/handleNavOpenKeys',
  //       payload: {
  //         navOpenKeys: openKeys
  //       }
  //     })
  //   }
  // }

  //切换侧边栏方法
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Siders/>
        </Sider>
        <Layout>
          <Header style={{
            background: '#fff',padding: 0
          }}>
            <Icon className={styles.trigger} type={this.state.collapsed
              ? 'menu-unfold'
              : 'menu-fold'} onClick={this.toggle}/>
            <Headers/>
          </Header>
          <Bread location={location} />
          <Content style={{
            margin: '24px',
            background: '#fff'
          }}>

            <div style={{
              padding: 24,
              background: '#fff',
              minHeight: 560
            }}>
              {this.props.children}
            </div>
          </Content>

            <Footers/>

        </Layout>
      </Layout>
    );
  };
};

// 参数验证
Layouts.propTypes = {};

// 暴露方法
export default Layouts;
