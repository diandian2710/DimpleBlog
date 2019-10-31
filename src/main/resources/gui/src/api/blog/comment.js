import request from '@/utils/request'

// 查询评论列表
export function listComment(query) {
  return request({
    url: '/blog/comment/list',
    method: 'get',
    params: query
  })
}

// 查询评论详细
export function getComment(id) {
  return request({
    url: '/blog/comment/' + id,
    method: 'get'
  })
}

// 修改评论配置
export function updateComment(data) {
  return request({
    url: '/blog/comment',
    method: 'put',
    data: data
  })
}

// 删除评论配置
export function delComment(id) {
  return request({
    url: '/blog/comment/' + id,
    method: 'delete'
  })
}
