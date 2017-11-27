import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Phone from '@/components/Phone'
import Gateway from '@/components/Gateway'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
