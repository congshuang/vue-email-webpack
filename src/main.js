import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import store from './store/index.js'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import filters from './filters'
import Loading from './components/loading'
import Jquery from './assets/js/jquery-1.7.2.js'
import 'kissy/build/editor/theme/cool/editor-min.css'
import './assets/css/kissy_base.css'


//Vue.filter(名字,函数)
//循环遍历所有过滤器
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

Vue.use(VueRouter);
Vue.use(Loading);
Vue.use(Jquery);
Vue.use(ElementUi);

//关于axios配置
axios.interceptors.request.use(function(config) { //发送请求
    store.dispatch('showLoading')
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //请求回来
    store.dispatch('hideLoading')
    return response;
}, function(error) {
    return Promise.reject(error);
});
//axios.defaults.baseURL='http://localhost:8082/'; //配置请求根路径
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios; //把axios对象挂到Vue原型上

//路由的设置
const router = new VueRouter({
    mode: 'history',//实现头部搜索时不出现#
    scrollBehavior: () => ({
        y: 0//这是页面置顶的设置
    }),
    routes
});

require('./assets/css/base.css'); //全局引入
new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
