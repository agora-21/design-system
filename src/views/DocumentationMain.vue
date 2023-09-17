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
  grid-template-rows: 100%;
  height: 100%;
  width: 100%;

  &__content {
    display: grid;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: linear-gradient(0deg, var(--blue-100) 0%, var(--chocolate-100) 50%, var(--green-100) 100%);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--neutral-110);
      border-radius: 2px;
    }
  }
}
</style>
