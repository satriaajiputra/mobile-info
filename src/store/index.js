import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex)
Vue.use(VueResource)

import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})