import React, {PropTypes} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import app from './routes/app'
import home from './routes/home'
import error from './routes/error'
import users from './routes/users'
import orders from './routes/orders'
import system from './routes/system'
import adsense from './routes/adsense'
import types from './routes/types'
import brands from './routes/brands'
import activity from './routes/activity'
import goods from './routes/goods'
import finance from './routes/finance'
import statistics from './routes/statistics'
import role from './routes/role'
import auth from './routes/auth'

const Root = ({history}) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={app}>
         <Route path="auth" component={auth}/>
         <Route path="users" component={users}/>
      </Route>
      {/* <Route path="users" component={users}/>
      <Route path="orders" component={orders}/>
      <Route path="system" component={system}/>
      <Route path="adsense" component={adsense}/>
      <Route path="types" component={types}/>
      <Route path="brands" component={brands}/>
      <Route path="activity" component={activity}/>
      <Route path="goods" component={goods}/>
      <Route path="finance" component={finance}/>
      <Route path="statistics" component={statistics}/>
      <Route path="role" component={role}/> */}

    </Router>
  )
}

export default Root
