import Login from './Login.vue'
import type { RouteRecordRaw } from 'vue-router'

export const authRoutes = [
  { path: '/login', component: Login },
] as RouteRecordRaw[]