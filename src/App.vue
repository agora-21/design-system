<template>
  <div class="app">
    <nav class="sidebar">
      <side-bar />
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: minmax(auto, 250px) 1fr;
  height: 100%;
  width: 100%;
}
</style>
