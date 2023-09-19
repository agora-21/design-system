<template>
  <nav class="side-bar">
    <slot />
  </nav>
</template>

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
