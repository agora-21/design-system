<template>
  <div class="documentation-main">
    <ds-side-bar />

    <main class="documentation-main__content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import DsSideBar from '@/components/DsSideBar.vue'
</script>

<style lang="scss" scoped>
.documentation-main {
  display: grid;
  grid-template-columns: 320px 1fr;
  height: 100%;
  width: 100%;

  &__content {
    display: grid;
  }
}
</style>
