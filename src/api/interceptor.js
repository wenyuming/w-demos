import axios from 'axios'
import store from '@/store'
import webconfig from '@/config'
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)
    return unescape(r[2]);
  return null;
}
let v = this
console.log(v, 'v')
axios.defaults.timeout = 5000
axios.interceptors.request.use(config => {
  // config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  // config.headers.common['Accept'] = 'application/json'
  config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
  // config.headers.common['Origin'] = v.config.baseserverURI
  // config.headers.token123 = '2222'
  // config.headers.token123 = '1234'
  // config.data = 'aaaaa'
 // sessionStorage.setItem("scid", "sc9526AF69EEC9FE3B")
  
  // localStorage.getItem("scid", "sc9526AF69EEC9FE3B")
  // localStorage.getItem("scid", "sc9526AF69EEC9FE3B")
  // if (localStorage.getItem("id") && localStorage.getItem("login_time") && localStorage.getItem("access_token"))
  // {
  //   config.headers.common['id'] = localStorage.getItem("id")
  //   config.headers.common['login_time'] = localStorage.getItem("login_time")
  //   config.headers.common['access_token'] = localStorage.getItem("access_token")
  // }
  // config.headers.common['scid'] = 'sc9526AF69EEC9FE3B'
  // if(!store.state.scid) {
    // store.state.scid = getQueryString('scid') || ''
    // config.headers.common['scid'] = getQueryString('scid')
    // sessionStorage.setItem("scid", getQueryString('scid'))
    // store.state.scid = getQueryString('scid')


    // if(getQueryString('scid') == 'gmaj'){
    //   document.title = '爱分享'
    //   store.state.slugid = 'ishare'
    // }
  // }else {
    // config.headers.common['scid'] = store.state.scid
    // sessionStorage.setItem("scid", getQueryString('scid'))
    // store.state.scid = getQueryString('scid')
    
    // if(!store.state.slugid && store.state.scid == 'gmaj'){
    //   store.state.slugid = 'gmaj'
    // }
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading

  console.info(res.data.code === 302);
  // console.info(res.data.datas.host);

  if (res.data.code === 302) {
    // let url = res.data.data.redirectUrl
    // window.location.href = url
    // let url = webconfig.baseURI + 'index.html#/login'
    let url = webconfig.baseURI + '/login'
    window.location.href = url
  } 
  else {
    localStorage.setItem("isLogin", true)
  }
  return res
}, error => {
  if (error.message === 'Network Error') {
    return Promise.reject(error)
  }
})

export default axios

