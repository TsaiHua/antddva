//import { create, remove, update, query } from '../services/users'
import {parse} from 'qs'

export default {
  //命名空间
  namespace : 'auth',
  //状态
  state : {
    list: [],
    loading: false,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null
    }
  },
  //数据订阅
  subscriptions : {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/auth') {
          dispatch({type: 'query', payload: location.query})
        }
      })
    }
  },

  //异步处理
  effects : {
    *query({
      payload
    }, {call, put}) {
      yield put({type: 'showLoading'})
      const data = yield call(query, parse(payload))
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: data.page
          }
        })
      }
    },

    //删除
    * 'delete' ({
      payload
    }, {call, put}) {
      yield put({type: 'showLoading'})
      const data = yield call(remove, {id: payload})
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
            }
          }
        })
      }
    },

    //创建
    *create({
      payload
    }, {call, put}) {
      yield put({type: 'hideModal'})
      yield put({type: 'showLoading'})
      const data = yield call(create, payload)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
            }
          }
        })
      }
    },

    //更新
    *update({
      payload
    }, {select, call, put}) {
      yield put({type: 'hideModal'})
      yield put({type: 'showLoading'})
      const id = yield select(({users}) => users.currentItem.id)
      const newUser = {
        ...payload,
        id
      }
      const data = yield call(update, newUser)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
            }
          }
        })
      }
    }
  },
  //同步处理
  reducers : {
    showLoading(state) {
      return {
        ...state,
        loading: true
      }
    },
    querySuccess(state, action) {
      const {list, pagination} = action.payload
      return {
        ...state,
        list,
        loading: false,
        pagination: {
          ...state.pagination,
          ...pagination
        }
      }
    },
    showModal(state, action) {
      return {
        ...state,
        ...action.payload,
        modalVisible: true
      }
    },
    hideModal(state) {
      return {
        ...state,
        modalVisible: false
      }
    }
  }
}
