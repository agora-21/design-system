<template>
  <div class="documentation-main">
    <sidebar />

    <main class="documentation-main__content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './DocumentationMain/Sidebar.vue'
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
