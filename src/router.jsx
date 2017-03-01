import React from 'react'
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router'
// 公用部分
import App from './routes/app'
import Home from './routes/home'
import Error from './routes/error'
// 组件部分
import Role from './routes/role'
import Auth from './routes/auth'
import Users from './routes/users'
import Orders from './routes/orders'
import System from './routes/system'
import Adsense from './routes/adsense'
import Types from './routes/types'
import Brands from './routes/brands'
import Activity from './routes/activity'
import Goods from './routes/goods'
import Finance from './routes/finance'
import Statistics from './routes/statistics'
// 方法
const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="role" component={Role}/>
      <Route path="auth" component={Auth}/>
      <Route path="users" component={Users}/>
      <Route path="orders" component={Orders}/>
      <Route path="system" component={System}/>
      <Route path="adsense" component={Adsense}/>
      <Route path="types" component={Types}/>
      <Route path="brands" component={Brands}/>
      <Route path="activity" component={Activity}/>
      <Route path="goods" component={Goods}/>
      <Route path="finance" component={Finance}/>
      <Route path="statistics" component={Statistics}/>
    </Route>
    <Route path="*" component={Error}/>
  </Router>
)
// 暴露方法
export default Root
