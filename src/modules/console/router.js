import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: r => { require(['./page/login/login'], r) }, meta: { title: 'console 登录' }},
    { path: '/index', name: 'index', component: r => { require(['./page/index/index'], r) }, meta: { title: 'console 首页' }}
]

export default new VueRouter({
    routes: routes
})