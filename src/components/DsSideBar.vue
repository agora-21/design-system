<template>
  <nav class="side-bar">
    <ds-side-bar-link
      data-test="colors-link"
      :route="{ name: 'DocumentationColors' }"
    >
      Colors
    </ds-side-bar-link>

    <ds-side-bar-link
      data-test="buttons-link"
      :route="{ name: 'DocumentationButtons' }"
    >
      Buttons
    </ds-side-bar-link>
  </nav>
</template>

<script setup>
import DsSideBarLink from './DsSideBarLink.vue'
</script>

<style lang="scss" scoped>
.side-bar {
  align-items: start;
  align-content: start;
  background-image: linear-gradient(190deg, var(--neutral-130) 0%, var(--neutral-140) 100%);
  border-right: 1px solid var(--neutral-130);
  color: var(--neutral-30);
  display: grid;
  gap: 6px;
  height: 100%;
  justify-items: start;
  padding: var(--padding-2);
}
</style>
