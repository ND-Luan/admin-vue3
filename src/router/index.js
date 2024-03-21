import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
const routes = [
    { path: '/',  name: "HomeView",  component: HomeView },
    { path: '/about',  name: "AboutView",  component:() => import('../views/AboutView.vue') }, 
    // { path: '*', name: "PageNotFound", redirect: '/404', component: PageNotFoundView }
  ]
  
const router = createRouter({
  history : createWebHashHistory(), 
  routes, 
})

export default router