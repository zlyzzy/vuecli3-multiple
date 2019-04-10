import Vue from 'vue'
import Console from './Client.vue'
import router from './router'
import store from './store';

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    store,
    render: h => h(Console)
}).$mount('#client')