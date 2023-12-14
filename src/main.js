import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Steps from 'primevue/steps';
import App from './App.vue'

// Styles
import 'primevue/resources/themes/soho-light/theme.css'
import "primevue/resources/primevue.min.css";
import './style.css'

import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: "/", name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import('./views/About.vue')  },
  { path: '/step1', name: 'step1', component: () => import('./views/Step1.vue') },
  { path: '/step2', name: 'step2', component: () => import('./views/Step2.vue') },
  { path: '/step3', name: 'step3', component: () => import('./views/Step3.vue') },
  { path: '/finalStep', name: 'finalstep1', component: () => import('./views/FinalStep.vue') },
  { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' })  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const pinia = createPinia()
const app = createApp(App)
app.use(router);
app.use(PrimeVue);
app.component('Steps',Steps)
app.use(pinia);
app.mount('#app')
