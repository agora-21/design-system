import { createRouter, createWebHistory } from 'vue-router'
import DesignSystem from '../views/DesignSystem.vue'
import DesignSystemAvailableColors from '../views/DesignSystem/AvailableColors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'DesignSystem',
    component: DesignSystem,
    children: [{
      path: 'colors',
      name: 'Colors',
      component: DesignSystemAvailableColors
    }]
  }]
})

export default router
