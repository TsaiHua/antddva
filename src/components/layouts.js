import React,{ Component, PropTypes } from 'react';
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Layout,Table,Breadcrumb,Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Headers from './public/header';
import Footers from './public/footer';
import Siders from './public/sider';
import styles from './layouts.less';


// 方法
class Layouts extends React.Component {

  state = {
      collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  };

render () {
    return (
      <Layout>
           <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
             <Siders />
           </Sider>
           <Layout>
               <Header style={{ background: '#fff', padding: 0 }}>
                   <Icon
                      className={styles.trigger}
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.toggle}
                    />
                   <Headers />
               </Header>
               <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>List</Breadcrumb.Item>
                      <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>
                      {this.props.children}
                    </div>
               </Content>
               <Footer>
                 <Footers />
               </Footer>
           </Layout>
      </Layout>
    );
  };
};

// 参数验证
Layouts.propTypes = {
};

// 暴露方法
export default Layouts;
