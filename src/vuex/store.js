import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        activeNum: 0,
        menuBol: true,
    },
    mutations: {
        menuActive(state, payload) {
            console.log(payload);
            state.activeNum = payload.index;
            state.menuBol = payload.bol;
        },
    }
})
export default store;