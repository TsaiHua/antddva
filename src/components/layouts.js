// 引入 React，组件，参数
import React, {Component, PropTypes} from 'react';
// 引入 dva版路由
import {routerRedux} from 'dva/router'
// 引入dva
import {connect} from 'dva'
// 引入阿里的antd视觉组件
import {Layout, Table, Breadcrumb, Icon} from 'antd';
// 通过视觉组件调出布局模块
const {Header, Footer, Sider, Content} = Layout;
// 引入自定义模块
import Headers from './public/header';
import Footers from './public/footer';
import Siders from './public/sider';
// 引入布局样式
import styles from './layouts.less';

// 方法
class Layouts extends React.Component {
  //组件状态
  state = {
    collapsed: false
  };
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
            background: '#fff',
            padding: 0
          }}>
            <Icon className={styles.trigger} type={this.state.collapsed
              ? 'menu-unfold'
              : 'menu-fold'} onClick={this.toggle}/>
            <Headers/>
          </Header>
          <Content style={{
            margin: '0 16px'
          }}>
            <Breadcrumb style={{
              margin: '12px 0'
            }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{
              padding: 24,
              background: '#fff',
              minHeight: 560
            }}>
              {this.props.children}
            </div>
          </Content>
          <Footer>
            <Footers/>
          </Footer>
        </Layout>
      </Layout>
    );
  };
};

// 参数验证
Layouts.propTypes = {};

// 暴露方法
export default Layouts;
