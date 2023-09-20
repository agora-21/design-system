import DocumentationButtons from '@/views/Documentation/DocumentationButtons.vue'
import DocumentationColors from '@/views/Documentation/DocumentationColors.vue'
import DocumentationFlags from '@/views/Documentation/DocumentationFlags.vue'
import DocumentationLoaders from '@/views/Documentation/DocumentationLoaders.vue'
import DocumentationSidebars from '@/views/Documentation/DocumentationSidebars.vue'
import DocumentationScrollbars from '@/views/Documentation/DocumentationScrollbars.vue'
import DocumentationTags from '@/views/Documentation/DocumentationTags.vue'
import DocumentationTypography from '@/views/Documentation/DocumentationTypography.vue'

export default [{
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
  path: 'loaders',
  name: 'DocumentationLoaders',
  component: DocumentationLoaders
}, {
  path: 'sidebars',
  name: 'DocumentationSidebars',
  component: DocumentationSidebars
}, {
  path: 'scrollbars',
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
