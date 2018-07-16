// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from "./vuex/store.js"
import App from './App'
import router from './router'
import Framework7 from 'framework7'
import 'framework7/js/framework7.min.js'
import 'framework7/css/framework7.ios.min.css'
// import './assets/css/framework7.ios.min.css'
// import './assets/css/framework7.ios.colors.min.css'
import './assets/css/reset.css'
import './assets/css/flex.css'
import './assets/css/index.css'


Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})