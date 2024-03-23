import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import { LoginPage } from '../pages'
const routes = [
    { path: '/',  name: "LoginPage",  component: LoginPage, },
    { path: '/home',  name: "HomePage",  component: MainLayout}, 
    { path: '/about',  name: "AboutPage",  component: MainLayout}, 
    // { path: '*', name: "PageNotFound", redirect: '/404', component: PageNotFoundPage }
    // { path: '*', redirect: '/404', hidden: true }
  ]
  
const router = createRouter({
  history : createWebHistory(), 
  scrollBehavior: () => ({ y: 0 }),
  routes, 
})
export default router