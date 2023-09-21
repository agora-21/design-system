<template>
  <ds-sidebar>
    <h1 class="navigation-sidebar__title">
      Design System
    </h1>

    <section class="navigation-sidebar__section">
      <h2 class="navigation-sidebar__section-caption">
        Guidelines
      </h2>

      <ds-sidebar-link
        data-test="card-layouts-link"
        :route="{ name: 'DocumentationCardLayouts' }"
      >
        Card Layouts
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="colors-link"
        :route="{ name: 'DocumentationColors' }"
      >
        Colors
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="typography-link"
        :route="{ name: 'DocumentationTypography' }"
      >
        Typography
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="navigation-sidebars-link"
        :route="{ name: 'DocumentationSidebars' }"
      >
        Sidebars
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="scrollbars-link"
        :route="{ name: 'DocumentationScrollbars' }"
      >
        Scrollbars
      </ds-sidebar-link>
    </section>

    <section class="navigation-sidebar__section">
      <h2 class="navigation-sidebar__section-caption">
        Components
      </h2>

      <ds-sidebar-link
        data-test="buttons-link"
        :route="{ name: 'DocumentationButtons' }"
      >
        Buttons
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="flags-link"
        :route="{ name: 'DocumentationFlags' }"
      >
        Flags
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="icons-link"
        :route="{ name: 'DocumentationIcons' }"
      >
        Icons
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="inputs-link"
        :route="{ name: 'DocumentationInputs' }"
      >
        Inputs
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="loaders-link"
        :route="{ name: 'DocumentationLoaders' }"
      >
        Loaders
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="radios-link"
        :route="{ name: 'DocumentationRadios' }"
      >
        Radios
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="tags-link"
        :route="{ name: 'DocumentationTags' }"
      >
        Tags
      </ds-sidebar-link>

      <ds-sidebar-link
        data-test="timelines-link"
        :route="{ name: 'DocumentationTimelines' }"
      >
        Timelines
      </ds-sidebar-link>
    </section>
  </ds-sidebar>
</template>

<script setup>
import DsSidebar from '@/components/DsSidebar.vue'
import DsSidebarLink from '@/components/DsSidebarLink.vue'
</script>

<style lang="scss" scoped>
.navigation-sidebar {
  &__title {
    font: var(--font-title-2);
  }

  &__section {
    align-items: start;
    align-content: start;
    display: grid;
    gap: 6px;
    justify-items: start;
    margin-top: 12px;

    &:first-of-type {
      margin-top: 32px;
    }
  }

  &__section-caption {
    font: var(--font-caption);
  }
}
</style>
