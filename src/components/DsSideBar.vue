<template>
  <nav class="side-bar">
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
  </nav>
</template>

<script setup>
import DsSideBarLink from './DsSideBarLink.vue'

// TODO: use slots to render links
</script>

<style lang="scss" scoped>
.side-bar {
  background-color: var(--neutral-150);
  border-right: 1px solid var(--neutral-140);
  box-shadow: var(--shadow-2);
  color: var(--neutral-60);
  height: 100%;
  padding: var(--padding-2-horizontal);

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
