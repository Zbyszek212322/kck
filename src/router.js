import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Layout from './components/Layout.vue'


Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home1',
      name: 'Home1',
      component: () => import('./components/Home.vue'),
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: () => import('./components/Home1'),
    }   
  ]
})
