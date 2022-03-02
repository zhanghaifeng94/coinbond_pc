import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeIndex',
    component: () => import(/* webpackChunkName: "about" */ '../views/homeIndex.vue')
  },
  {
    path: '/coinbond_pc',
    name: 'debtCurrency',
    component: () => import(/* webpackChunkName: "about" */ '../views/debtCurrency/debtCurrency.vue')
  },{
    path: '/daoFi',
    name: 'daoFi',
    component: () => import(/* webpackChunkName: "about" */ '../views/DaoFi/DaoFi.vue')
  },{
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list/listIndex.vue')
  },{
    path: '/details/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/details/detailsIndex.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
