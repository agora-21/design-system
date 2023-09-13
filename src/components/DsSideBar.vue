<template>
  <nav class="side-bar">
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
  background-image: linear-gradient(190deg, var(--neutral-130) 0%, var(--neutral-140) 100%);
  border-right: 1px solid var(--neutral-130);
  box-shadow: var(--shadow-2);
  color: var(--neutral-30);
  height: 100%;
  padding: var(--padding-2-horizontal);

  &__section {
    align-items: start;
    align-content: start;
    display: grid;
    gap: 6px;
    justify-items: start;
  }

  &__section-caption {
    color: var(--neutral-50);
    font: var(--font-caption);
  }
}
</style>
