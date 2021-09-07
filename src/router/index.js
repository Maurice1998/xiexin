import Vue from 'vue'
import Router from 'vue-router'
import Cockpit from '@/components/Cockpit'
import Pro from '@/components/Pro'
import Store from '@/components/Store'
import Quality from '@/components/Quality'
import Energy from '@/components/Energy'
import Device from '@/components/Device'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cockpit',
      component: Cockpit
    },
    {
      path: '/Pro',
      name: 'Cockpit',
      component: Pro
    },
    {
      path: '/Device',
      name: 'Cockpit',
      component: Device
    },
    {
      path: '/Store',
      name: 'Cockpit',
      component: Store
    },
    {
      path: '/Energy',
      name: 'Cockpit',
      component: Energy
    },
     {
      path: '/Quality',
      name: 'Cockpit',
      component: Quality
    }
  ]
})
