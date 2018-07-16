import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import fans from '@/components/pages/fans'
import order from '@/components/pages/order'
import data from '@/components/pages/data'
import job from '@/components/pages/job'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/pages/home',
        name: 'home',
        component: home
    }, {
        path: '/pages/fans',
        name: 'fans',
        component: fans
    }, {
        path: '/pages/order',
        name: 'order',
        component: order
    }, {
        path: '/pages/data',
        name: 'data',
        component: data
    }, {
        path: '/pages/job',
        name: 'job',
        component: job
    }]
})

export default router;