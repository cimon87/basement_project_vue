import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Phone from '@/components/Phone'
import Gateway from '@/components/Gateway'
import Logs from '@/components/Logs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/gateway',
      name: 'SMS Gateway',
      component: Gateway
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Gpio
    }
  ]
})
