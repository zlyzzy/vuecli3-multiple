import Vue from 'vue'
import Console from './Console.vue'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import "babel-polyfill";

Vue.use(require('vue-wechat-title'))
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(Console)
}).$mount('#console')