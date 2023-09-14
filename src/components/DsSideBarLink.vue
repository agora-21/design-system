<template>
  <router-link
    class="ds-side-bar-link"
    data-test="link"
    :to="route"
  >
    <slot />
  </router-link>
</template>

<script setup>
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.ds-side-bar-link {
  color: var(--neutral-40);
  background-color: transparent;
  border-radius: var(--border-radius-2);
  font: var(--font-body);
  padding: var(--padding-1-horizontal);
  text-decoration: none;
  transition: background-color 50ms ease-in-out;
  width: 100%;

  &:hover {
    background-color: var(--neutral-120);
  }

  &:active {
    background-color: var(--neutral-100);
  }
}
</style>
