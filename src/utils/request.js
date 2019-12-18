import axios from 'axios'
import qs from 'qs'
// 1.创建实例 [配置]
const serve = axios.create({
  baseURL: 'api的baseURL', // baseURL api的前面相同的值 例 'http://127.0.0.1:8080'
  timeout: 6500, // request timeout 请求超时
})

// 2.拦截器

//  2.1  拦截请求
serve.interceptors.request.use((config) => {
  // ...
  if (localStorage.getItem('token')) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = localStorage.getItem('token');
  }
  if (config.postType && config.postType === 'json') {
    config.headers = {
      'Content-Type': 'application/json'
    }
  } else {
    if (config.method === 'post' || config.method === 'put') {
      config.data = qs.stringify(JSON.flatten(config.data))
    }
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return config
}, (error) => {
  // ...
  return Promise.reject(error)
})

// 2.2 拦截响应
serve.interceptors.response.use((config) => {
  // ...
  return config
}, (error) => {
  // ...
  return Promise.reject(error)
})

export default serve
