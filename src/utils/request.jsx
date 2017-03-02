// 导入方法
import fetch from 'dva/fetch'

// 数据转换
function parseJSON(response) {
  return response.json()
}

// 检查状态
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// 暴露方法
export default async function request(url, options) {
  const response = await fetch(url, options)

  checkStatus(response)

  const data = await response.json()

  const ret = {
    data,
    headers: {}
  };

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }

  return ret;
}
