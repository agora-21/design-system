import DocumentationMain from '@/views/DocumentationMain.vue'
import documentationRoutes from './documentation'

export default [{
  path: '/',
  name: 'Documentation',
  component: DocumentationMain,
  children: documentationRoutes
}]
