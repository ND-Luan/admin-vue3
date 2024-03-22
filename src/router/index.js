import { createRouter, createWebHistory, createRouterMatcher } from 'vue-router'
import { AboutPage, HomePage, LoginPage, PageNotFoundPage } from '../pages'
const routes = [
    {
      path: '/',  name: "LoginPage",  component: LoginPage,
      meta: { disallowAuthed: true }
    },
    { path: '/home',  name: "HomePage",  component: HomePage}, 
    { path: '/about',  name: "AboutPage",  component: AboutPage}, 
    // { path: '*', name: "PageNotFound", redirect: '/404', component: PageNotFoundPage }
  ]
  
const router = createRouter({
  history : createWebHistory(), 
  scrollBehavior: () => ({ y: 0 }),
  routes, 
})
export default router