import React,{propTypes} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import menus from './public/menus';

const layouts = (props) => {
  return (
    <Layout>
         <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
             <menus/>
         </Sider>
         <Layout>
             <Header>Header1</Header>
             <Content>Content2</Content>
             <Footer>Footer3</Footer>
         </Layout>
    </Layout>
  );
};

layouts.propTypes = {
};

export default layouts;
