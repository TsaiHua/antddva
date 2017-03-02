import * as usersService from '../services/users';

export default {

  //命名空间
  namespace : 'users',

  //状态
  state : {
    loading: true,
    list: [], //数据列表
    currentItem: {},
    modalVisible: false, //弹窗是否可见
    modalType: 'create', //弹窗类型
    //分页配置
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
      return history.listen(({pathname, query}) => {
        if (pathname === '/users') {
          dispatch({type: 'fetch', payload: query});
        }
      })
    }
  },

  //异步处理
  effects : {

    *fetch({
      payload: {
        page = 1
      }
    }, {call, put}) {
      const {data, headers} = yield call(usersService.fetch, {page});
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10)
        }
      });
    },

    *remove({
      payload: id
    }, {call, put}) {
      yield call(usersService.remove, id);
      yield put({type: 'reload'});
    },
    *patch({
      payload: {
        id,
        values
      }
    }, {call, put}) {
      yield call(usersService.patch, id, values);
      yield put({type: 'reload'});
    },
    *create({
      payload: values
    }, {call, put}) {
      yield call(usersService.create, values);
      yield put({type: 'reload'});
    },
    *reload(action, {put, select}) {
      const page = yield select(state => state.users.page);
      yield put({type: 'fetch', payload: {
          page
        }});
    }
  },

  reducers : {
    save(state, {
      payload: {
        data: list,
        total,
        page
      }
    }) {
      return {
        ...state,
        list,
        total,
        page
      };
    }
  }
}
