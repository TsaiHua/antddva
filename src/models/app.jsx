import {login, userInfo, logout} from '../services/app'
import {parse} from 'qs'
export default {
  //命名空间
  namespace : 'app',
  //状态
  state : {
    login: false,
    loading: false,
    user: {
      name: '吴彦祖'
    },
    loginButtonLoading: false,
    menuPopoverVisible: false,
    siderFold: localStorage.getItem('antdAdminSiderFold') === 'true',
    darkTheme: localStorage.getItem('antdAdminDarkTheme') !== 'false',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem('navOpenKeys') || '[]') //侧边栏菜单打开的keys
  },

  //订阅
  subscriptions : {
    setup({dispatch}) {
      dispatch({type: 'queryUser'})
      window.onresize = function() {
        dispatch({type: 'changeNavbar'})
      }
    }
  },

  //异步处理
  effects : {
    //登录
    *login({
      payload
    }, {call, put}) {
      yield put({type: 'showLoginButtonLoading'})
      const data = yield call(login, parse(payload))
      if (data.success) {
        yield put({
          type: 'loginSuccess',
          payload: {
            user: {
              name: payload.username
            }
          }
        })
      } else {
        yield put({type: 'loginFail'})
      }
    },

    //同步处理
    *queryUser({
      payload
    }, {call, put}) {
      yield put({type: 'showLoading'})
      const data = yield call(userInfo, parse(payload))
      if (data.success) {
        yield put({
          type: 'loginSuccess',
          payload: {
            user: {
              name: data.username
            }
          }
        })
      }

      yield put({type: 'hideLoading'})
    },
    //退出
    *logout({
      payload
    }, {call, put}) {
      const data = yield call(logout, parse(payload))
      if (data.success) {
        yield put({type: 'logoutSuccess'})
      }
    },

    *switchSider({
      payload
    }, {put}) {
      yield put({type: 'handleSwitchSider'})
    },

    *changeTheme({
      payload
    }, {put}) {
      yield put({type: 'handleChangeTheme'})
    },

    *changeNavbar({
      payload
    }, {put}) {
      if (document.body.clientWidth < 769) {
        yield put({type: 'showNavbar'})
      } else {
        yield put({type: 'hideNavbar'})
      }
    },

    *switchMenuPopver({
      payload
    }, {put}) {
      yield put({type: 'handleSwitchMenuPopver'})
    }
  },

  //同步处理
  reducers : {
    loginSuccess(state, action) { //登录成功
      return {
        ...state,
        ...action.payload,
        login: true,
        loginButtonLoading: false
      }
    },
    logoutSuccess(state) { //退出成功
      return {
        ...state,
        login: false
      }
    },
    loginFail(state) { //退出失败
      return {
        ...state,
        login: false,
        loginButtonLoading: false
      }
    },
    showLoginButtonLoading(state) { //显示登录按钮载入状态
      return {
        ...state,
        loginButtonLoading: true
      }
    },
    showLoading(state) { //显示载入效果
      return {
        ...state,
        loading: true
      }
    },
    hideLoading(state) { //隐藏载入效果
      return {
        ...state,
        loading: false
      }
    },
    handleSwitchSider(state) { //选择侧边栏
      localStorage.setItem('antdAdminSiderFold', !state.siderFold)
      return {
        ...state,
        siderFold: !state.siderFold
      }
    },
    handleChangeTheme(state) { //更换主题
      localStorage.setItem('antdAdminDarkTheme', !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    },
    showNavbar(state) { //显示导航
      return {
        ...state,
        isNavbar: true
      }
    },
    hideNavbar(state) { //隐藏导航
      return {
        ...state,
        isNavbar: false
      }
    },
    handleSwitchMenuPopver(state) { //选择菜单属性
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible
      }
    },
    handleNavOpenKeys(state, action) { //已打开菜单Key
      return {
        ...state,
        ...action.payload
      }
    }
  }
}
