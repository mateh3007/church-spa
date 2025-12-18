import Login from './Login.vue'
import type { RouteRecordRaw } from 'vue-router'

export const authRoutes = [
  { path: '/entrar', component: Login },
] as RouteRecordRaw[]