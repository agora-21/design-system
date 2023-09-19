import { createRouter, createWebHistory } from 'vue-router'

import DocumentationMain from '@/views/DocumentationMain.vue'

import DocumentationButtons from '@/views/Documentation/DocumentationButtons.vue'
import DocumentationColors from '@/views/Documentation/DocumentationColors.vue'
import DocumentationFlags from '@/views/Documentation/DocumentationFlags.vue'
import DocumentationScrollbars from '@/views/Documentation/DocumentationScrollbars.vue'
import DocumentationTags from '@/views/Documentation/DocumentationTags.vue'
import DocumentationTypography from '@/views/Documentation/DocumentationTypography.vue'

const routes = [{
  path: '/',
  name: 'Documentation',
  component: DocumentationMain,
  children: [{
    path: 'colors',
    name: 'DocumentationColors',
    component: DocumentationColors
  }, {
    path: 'buttons',
    name: 'DocumentationButtons',
    component: DocumentationButtons
  }, {
    path: 'flags',
    name: 'DocumentationFlags',
    component: DocumentationFlags
  }, {
    path: 'scroll-bars',
    name: 'DocumentationScrollbars',
    component: DocumentationScrollbars
  }, {
    path: 'tags',
    name: 'DocumentationTags',
    component: DocumentationTags
  }, {
    path: 'typography',
    name: 'DocumentationTypography',
    component: DocumentationTypography
  }]
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
