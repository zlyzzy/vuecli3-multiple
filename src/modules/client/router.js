import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: r => { require(['./page/login/login'], r) }, meta: { title: 'client 登录' }}
]

export default new VueRouter({
    routes: routes
})