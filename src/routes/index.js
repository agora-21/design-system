import documentationRoutes from './documentation'

export default [{
  path: '/',
  name: 'Documentation',
  component: async () => import('@/views/DocumentationMain.vue'),
  children: documentationRoutes
}]
