import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Project from '../views/Project.vue'
import Skill from '../views/Skill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
    name: 'Project',
    component: Project
  },
  {
    path: '/',
    name: 'Skill',
    component: Skill
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
