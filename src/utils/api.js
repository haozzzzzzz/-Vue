import serve from './request'

export const headUrl = 'www.baidu.com'

export function dataList(obj) {
  return serve({
    url: headUrl + 'api/v1/info',
    method: 'get',
    data: obj
  })
}

export function dataInfoDetail(obj) {
  return serve({
    url: headUrl + 'api/v1/detail',
    method: 'post',
    postType: 'json',
    data: obj,
  })
}

export function dataListId(_id) {
  return serve({
    url: headUrl + 'api/v1/detail/' + _id,
    method: 'post',
    postType: 'json',
  })
}

// 方式 1.直接在main.js中引入api 挂载原型上 即可调用
// this.$api= api this.$api.dataListId(_id).then(res=>{console.log(res)})

// 方式 2.在store中引入api文件
// 把api中的请求方法导入store中
// 可以直接使用this.$store.dispatch('函数名','参数').then(res=>{console.log(res)})调用
