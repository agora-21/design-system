<template>
  <div class="documentation-main">
    <navigation-sidebar />

    <main class="documentation-main__content">
      <router-view v-slot="{ Component }">
        <transition appear mode="out-in" name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import NavigationSidebar from './DocumentationMain/NavigationSidebar.vue'
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
