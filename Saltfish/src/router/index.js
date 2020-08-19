import Vue from 'vue'
import Router from 'vue-router'
import { commonRoutes } from './router';

Vue.use(Router)

const router = new Router({
  routes:commonRoutes,
  mode:'history'
})

export default router;