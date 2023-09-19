<template>
  <ds-side-bar>
    <h1 class="side-bar__title">
      Design System
    </h1>

    <section class="side-bar__section">
      <h2 class="side-bar__section-caption">
        Guidelines
      </h2>

      <ds-side-bar-link
        data-test="colors-link"
        :route="{ name: 'DocumentationColors' }"
      >
        Colors
      </ds-side-bar-link>

      <ds-side-bar-link
        data-test="typography-link"
        :route="{ name: 'DocumentationTypography' }"
      >
        Typography
      </ds-side-bar-link>

      <ds-side-bar-link
        data-test="side-bars-link"
        :route="{ name: 'DocumentationSideBars' }"
      >
        Side Bars
      </ds-side-bar-link>

      <ds-side-bar-link
        data-test="scrollbars-link"
        :route="{ name: 'DocumentationScrollbars' }"
      >
        Scrollbars
      </ds-side-bar-link>
    </section>

    <section class="side-bar__section">
      <h2 class="side-bar__section-caption">
        Components
      </h2>

      <ds-side-bar-link
        data-test="buttons-link"
        :route="{ name: 'DocumentationButtons' }"
      >
        Buttons
      </ds-side-bar-link>

      <ds-side-bar-link
        data-test="flags-link"
        :route="{ name: 'DocumentationFlags' }"
      >
        Flags
      </ds-side-bar-link>

      <ds-side-bar-link
        data-test="tags-link"
        :route="{ name: 'DocumentationTags' }"
      >
        Tags
      </ds-side-bar-link>
    </section>
  </ds-side-bar>
</template>

<script setup>
import DsSideBar from '@/components/DsSideBar.vue'
import DsSideBarLink from '@/components/DsSideBarLink.vue'
</script>

<style lang="scss" scoped>
.side-bar {
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
