import Vue from 'vue'
import Router from 'vue-router'
import * as Components from '@/components'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Components.Home
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Components.Phone
    },
    {
      path: '/gateway',
      name: 'SMS Gateway',
      component: Components.Gateway
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Components.Logs
    },
    {
      path: '/gpio',
      name: 'Gpio',
      component: Components.Gpio
    }
  ]
})
