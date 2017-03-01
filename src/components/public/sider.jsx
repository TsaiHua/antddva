// 引入 React
import React from 'react';
// 引入 链接组件
import {Link} from 'react-router';
// 引入 阿里的antd视觉组件
import {Menu, Breadcrumb, Icon} from 'antd';
// 引入 布局样式
import styles from '../layouts.less';

// 方法
const Sider = (props) => {
  return (
    <div>
      <div className={styles.logo}/>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        >
        <Menu.Item key="1">
          <Link to="/users">
            <Icon type="user"/>
            <span className="nav-text">用户</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/auth">
            <Icon type="check-square"/>
            <span className="nav-text">权限</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/role">
            <Icon type="team"/>
            <span className="nav-text">角色</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/goods">
            <Icon type="bulb"/>
            <span className="nav-text">商品</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/orders">
            <Icon type="bars"/>
            <span className="nav-text">订单</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/adsense">
            <Icon type="notification"/>
            <span className="nav-text">广告</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/activity">
            <Icon type="frown"/>
            <span className="nav-text">活动</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/brands">
            <Icon type="rocket"/>
            <span className="nav-text">品牌</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/types">
            <Icon type="appstore"/>
            <span className="nav-text">分类</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="10">
          <Link to="/finance">
            <Icon type="pay-circle-o"/>
            <span className="nav-text">充值</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="11">
          <Link to="/finance">
            <Icon type="pay-circle"/>
            <span className="nav-text">提现</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="12">
          <Link to="/finance">
            <Icon type="swap"/>
            <span className="nav-text">退款</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="13">
          <Link to="/statistics">
            <Icon type="area-chart"/>
            <span className="nav-text">统计</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="14">
          <Link to="/system">
            <Icon type="setting"/>
            <span className="nav-text">设置</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

// 参数验证
Sider.propTypes = {};

// 暴露方法
export default Sider;
