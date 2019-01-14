// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from "axios" //
import qs from "qs"

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://cbb.naiba168.com/';
//Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; //作者认真
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
	
	console.log(config)
	if(config.method == "post"){
		config.data = qs.stringify(config.data)
	}
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

Vue.config.productionTip = false
import { 
	Button,
	Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Dialog
} from 'element-ui';
Vue.use(Button)
Vue.use(Breadcrumb) //面包屑导航
Vue.use(BreadcrumbItem)
Vue.use(Pagination)  //分页
Vue.use(Dialog)  //对话框
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
