// 引入 请求组件
import request from '../utils/request'

// 引入 配置文件
import {api_host, page_size} from '../utils/config'

// 增加
export function create(values) {
  return request(`${api_host}goods`, {
    method: 'POST',
    body: JSON.stringify(values)
  })
}

// 删除
export function remove(id) {
  return request(`${api_host}goods/${id}`, {method: 'DELETE'})
}

// 修改
export function patch(id, values) {
  return request(`${api_host}goods/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}

// w查询
export function fetch({
  page = 1
}) {
  // const hhh = request(`${api_host}goods?page=${page}&per-page=${page_size}`)
  // console.log(hhh)
  // return hhh
  return request(`${api_host}goods?page=${page}&per-page=${page_size}`)

}
