<template>
  <router-link
    class="ds-sidebar-link"
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
.ds-sidebar-link {
  color: var(--neutral-60);
  background-color: transparent;
  border-radius: var(--border-radius-2);
  font: var(--font-body);
  padding: 10px 16px;
  text-decoration: none;
  transition: background-color 50ms ease-in-out;
  width: 100%;

  &:hover {
    background-color: var(--neutral-140);
  }

  &:active {
    background-color: var(--neutral-130);
  }
}
</style>
