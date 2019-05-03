import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'login'},
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.oauth.user.email) {
          next();
        }
        next('/');
      }
    }
  ]
})
