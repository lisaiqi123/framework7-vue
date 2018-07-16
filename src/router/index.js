import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/pages/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})

export default router;