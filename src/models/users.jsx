// 引入 用户接口
import * as usersService from '../services/users'

// 暴露方法
export default {

  // 命名空间
  namespace : 'users',

  // 状态
  state : {
    list: [], // 数据列表
    total: 0, // 总条数
    page: 0, // 总页数
    currentItem: {},
    modalVisible: false, // 弹窗是否可见
    modalType: 'create', // 弹窗类型
    pagination: { // 分页配置
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null
    }
  },

  // 数据订阅
  subscriptions : {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/users') {
          dispatch({type: 'fetch', payload: query})
        }
      })
    }
  },

  // 同步操作
  reducers : {

    // 保存状态
    save(state, {
      payload: {
        list,
        total,
        page
      }
    }) {
      return {
        ...state,
        list,
        total,
        page
      }
    },

    // 显示弹窗
    showModal(state, action) {
      return {
        ...state,
        ...action.payload,
        modalVisible: true
      }
    },

    // 隐藏弹窗
    hideModal(state) {
      return {
        ...state,
        modalVisible: false
      }
    }
  },

  // 异步处理
  effects : {

    *fetch({
      payload: {
        page = 1
      }
    }, {call, put}) {
      const {data} = yield call(usersService.fetch, {page})
      yield put({
        type: 'save',
        payload: {
          list: data['data'],
          total: data['_meta'].totalCount,
          page: data['_meta'].currentPage
        }
      })
    },

    *remove({
      payload: id
    }, {call, put, select}) {
      yield call(usersService.remove, id);
      const page = yield select(state => state.users.page)
      yield put({type: 'fetch', payload: {
          page
        }})
    },

    *patch({
      payload: {
        id,
        values
      }
    }, {call, put, select}) {
      yield call(usersService.patch, id, values);
      const page = yield select(state => state.users.page)
      yield put({type: 'fetch', payload: {
          page
        }})
    },

    *create({
      payload: values
    }, {call, put}) {
      yield call(usersService.create, values)
      yield put({type: 'reload'})
    },

    *reload(action, {put, select}) {
      const page = yield select(state => state.users.page)
      yield put({type: 'fetch', payload: {
          page
        }})
    }
  }
}
