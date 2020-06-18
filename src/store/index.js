import Vue from 'vue'
import Vuex from 'vuex'

import dashboards from './dashboards'
import items from './items'

import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      dashboards,
      items
    },

    state,
    actions,
    mutations,

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
