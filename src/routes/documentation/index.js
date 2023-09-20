export default [{
  path: 'buttons',
  name: 'DocumentationButtons',
  component: async () => import('@/views/Documentation/DocumentationButtons.vue')
}, {
  path: 'card-layouts',
  name: 'DocumentationCardLayouts',
  component: async () => import('@/views/Documentation/DocumentationCardLayouts.vue')
}, {
  path: 'colors',
  name: 'DocumentationColors',
  component: async () => import('@/views/Documentation/DocumentationColors.vue')
}, {
  path: 'flags',
  name: 'DocumentationFlags',
  component: async () => import('@/views/Documentation/DocumentationFlags.vue')
}, {
  path: 'loaders',
  name: 'DocumentationLoaders',
  component: async () => import('@/views/Documentation/DocumentationLoaders.vue')
}, {
  path: 'sidebars',
  name: 'DocumentationSidebars',
  component: async () => import('@/views/Documentation/DocumentationSidebars.vue')
}, {
  path: 'scrollbars',
  name: 'DocumentationScrollbars',
  component: async () => import('@/views/Documentation/DocumentationScrollbars.vue')
}, {
  path: 'tags',
  name: 'DocumentationTags',
  component: async () => import('@/views/Documentation/DocumentationTags.vue')
}, {
  path: 'typography',
  name: 'DocumentationTypography',
  component: async () => import('@/views/Documentation/DocumentationTypography.vue')
}]
