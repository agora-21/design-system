<template>
  <div class="documentation-main">
    <side-bar />

    <main class="documentation-main__content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SideBar from './DocumentationMain/SideBar.vue'
</script>

<style lang="scss" scoped>
.documentation-main {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100%;
  height: 100%;
  width: 100%;

  &__content {
    display: grid;
    overflow-y: auto;
  }
}
</style>
