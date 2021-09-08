import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Login from '../views/clients/Login.vue'
import HomeDashboard from '../views/clients/HomeDashboard.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'HomeDashboard',
        component: HomeDashboard
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
