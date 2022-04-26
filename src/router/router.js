import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props : true,
    children : [
      {
        path: "/about/:teamName",
        name:"AboutTeam",
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        props : true,
        beforeEnter (to, from, next){
          if(to && !Number(to.params.teamName)){
            next();
          }
        }
      },
      {
        path: "/about/:id",
        name:"AboutTeam",
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        props : true,
        beforeEnter (to, from, next){
          if(to && !Number(to.params.teamName)){
            next();
          }
        }
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
