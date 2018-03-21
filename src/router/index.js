import Vue from 'vue'
import Router from 'vue-router'

import StuTable from '@/components/StuTable'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Error from '@/components/Error'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/Overview',
      name: 'Overview',
      components:{
      default: Overview,
      Header: Header,
      Menu: Menu,
     }
    },
    {
      path: '/StuTable',
      name: 'StuTable',
      // component: StuTable
      components:{
      default: StuTable,
      Header: Header,
      Menu: Menu,
     }
    },
    {
      path: '/',
      name: 'Login',
      //component: Login
      components:{
      default: Login,
      Header: Header,
     }
   },
   {
      path: "*",
      name: 'Error',
      component: Error
    }
  ]
})
