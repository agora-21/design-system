<template>
  <nav class="sidebar">
    <slot />
  </nav>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--neutral-150);
  border-right: 1px solid var(--neutral-140);
  color: var(--neutral-60);
  height: 100%;
  padding: var(--padding-2-horizontal);
}
</style>
