// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import infiniteScroll from 'vue-infinite-scroll';
import App from './App';
import router from './router';
import './assets/font/font.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css' 
import moment from 'moment'
import Vant from 'vant';
import 'vant/lib/index.css';

moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(infiniteScroll);
Vue.use(Vant);
Vue.use(iView);
Vue.prototype.$echarts = echarts
Vue.filter('dateFormat', function (daraStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(daraStr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
