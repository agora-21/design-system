import { createRouter, createWebHistory } from 'vue-router'

import DocumentationMain from '@/views/DocumentationMain.vue'
import DocumentationDocumentationColors from '../views/Documentation/DocumentationColors.vue'
import DocumentationButtons from '@/views/Documentation/DocumentationButtons.vue'

const routes = [{
  path: '/',
  name: 'Documentation',
  component: DocumentationMain,
  children: [{
    path: 'colors',
    name: 'DocumentationColors',
    component: DocumentationDocumentationColors
  }, {
    path: 'buttons',
    name: 'DocumentationButtons',
    component: DocumentationButtons
  }]
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
