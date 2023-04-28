import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '',
          name: 'landing',
          component: () => import(/* webpackChunkName: "about" */ '../views/LandingView.vue')
        },
        {
          path: '/comprador',
          name: 'comprador',
          component: () => import(/* webpackChunkName: "about" */ '../components/Comprador.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "about" */ '../components/Register.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
        },
        {
          path: '/Pasarela-Pago',
          name: 'Pasarela-Pago',
          component: () => import(/* webpackChunkName: "about" */ '../components/PasarelaPago.vue')
        }
      ]
    },
    {
      path: '/Application',
      name: 'Application',
      component: () => import(/* webpackChunkName: "about" */ '../views/CompradorView.vue'),
      children:[
        {
          path: '',
          name: 'InicioComprador',
          component: () => import(/* webpackChunkName: "about" */ '../components/ServiciosComprador.vue')
        },
        {
          path: '/MiServicios',
          name: 'MiServicios',
          component: () => import(/* webpackChunkName: "about" */ '../components/InicioCompradorV2.vue')
        },
        {
          path: '/RegistrarServicios',
          name: 'RegistrarServicios',
          component: () => import(/* webpackChunkName: "about" */ '../components/InicioCompradorV2.vue')
        },
      ]
    },
  ]
})

export default router
