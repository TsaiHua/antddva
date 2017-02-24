//import { create, remove, update, query } from '../services/activity'
import { parse } from 'qs'

export default {

  namespace: 'activity',

  state: {
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

  subscriptions: {
    setup ({ dispatch, history }) {
          history.listen(location => {
            if (location.pathname === '/activity') {
              dispatch({
                type: 'query',
                payload: location.query
              })
            }
          })
        }
  },

  effects: {
    *query ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
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
    *'delete' ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(remove, { id: payload })
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
    *create ({ payload }, { call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
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
    *update ({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
      const id = yield select(({ activity }) => activity.currentItem.id)
      const newUser = { ...payload, id }
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

  reducers: {
    showLoading (state) {
       return { ...state, loading: true }
     },
     querySuccess (state, action) {
       const {list, pagination} = action.payload
       return { ...state,
         list,
         loading: false,
         pagination: {
           ...state.pagination,
           ...pagination
         }}
     },
     showModal (state, action) {
       return { ...state, ...action.payload, modalVisible: true }
     },
     hideModal (state) {
       return { ...state, modalVisible: false }
     }
   }
  }
