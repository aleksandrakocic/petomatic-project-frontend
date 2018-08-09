import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import navigation from '@/components/navigation'
import dashboard from '@/components/dashboard'

import login from '@/components/login'
import preventLogin from '@/components/preventLogin'

import visits from '@/components/visits'

import customers from '@/components/customers'
import createCustomer from '@/components/createCustomer'

import users from '@/components/users'
import createUser from '@/components/createUser'
// import createVisit from '@/components/createVisit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'preventLogin',
      component: preventLogin

    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/createUser',
      name: 'createUser',
      component: createUser
    },
    {
      path: '/customers',
      name: customers,
      component: customers
    },
    {
      path: '/createCustomer',
      name: 'createCustomer',
      component: createCustomer
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/visits',
      name: 'visits',
      component: visits
    }
    // {
    //   path: '/createVisit',
    //   name: 'createVisit',
    //   component: createVisit
    // }
  ]
})
