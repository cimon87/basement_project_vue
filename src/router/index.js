import Vue from 'vue'
import Router from 'vue-router'
import * as Components from '@/components/all'

Vue.use(Router)

export default new Router({
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
      path: '/logs',
      name: 'Logs',
      component: Components.Gpio
    }
  ]
})
