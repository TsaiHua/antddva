// 引入 类型接口
import * as typesService from '../services/types'

// 暴露方法
export default {

  //命名空间
  namespace : 'types',

  //状态
  state : {
    list: [], //数据列表
    total: 0, //总条数
    page: 0, //总页数
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
        if (pathname === '/types') {
          dispatch({type: 'fetch', payload: query});
        }
      })
    }
  },

  //同步操作
  reducers : {
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
      };
    }
  },

  //异步处理
  effects : {

    *fetch({
      payload: {
        page = 1
      }
    }, {call, put}) {
      const {data} = yield call(typesService.fetch, {page})
      yield put({
        type: 'save',
        payload: {
          list: data['data'],
          total: data['_meta'].totalCount,
          page: data['_meta'].currentPage,
          //total: parseInt(headers['x-total-count'], 10),
          //page: parseInt(page, 10)
        }
      });
    },

    *remove({
      payload: id
    }, {call, put, select}) {
      yield call(typesService.remove, id);
      const page = yield select(state => state.types.page);
      yield put({type: 'fetch', payload: {
          page
        }});
    },

    *patch({
      payload: {
        id,
        values
      }
    }, {call, put, select}) {
      yield call(typesService.patch, id, values);
      const page = yield select(state => state.types.page);
      yield put({type: 'fetch', payload: {
          page
        }});
    },

    *create({
      payload: values
    }, {call, put}) {
      yield call(typesService.create, values);
      yield put({type: 'reload'});
    },

    *reload(action, {put, select}) {
      const page = yield select(state => state.types.page);
      yield put({type: 'fetch', payload: {
          page
        }});
    }
  }
}
