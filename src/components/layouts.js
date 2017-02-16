import React from 'react';
import { Layout,Table } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Menus from './public/menus';
import Headers from './public/header';
import Footers from './public/footer';

const layouts = (props) => {
  return (
    <Layout>
         <Sider collapsible collapsed={false} onCollapse={true}>
           <Menus />
         </Sider>

         <Layout>
             <Header>
               <Headers />
             </Header>

             <Content>
                  {props.children}
             </Content>

             <Footer>
               <Footers />
             </Footer>
         </Layout>
    </Layout>
  );
};

layouts.propTypes = {
};

export default layouts;
