<template>
  <div class="semantic-colors">
    <div
      v-for="color in SEMANTIC_COLORS"
      :key="color"
      class="semantic-colors__item"
      :class="`semantic-colors__item--${color}`"
    >
      <span class="semantic-colors__label">
        {{ `${color}` }}
      </span>
    </div>
  </div>
</template>

<script setup>
const SEMANTIC_COLORS = ['success-green-100', 'warning-yellow-100', 'error-red-100']
</script>

<style lang="scss" scoped>
.semantic-colors {
  border-radius: var(--border-radius-3);
  box-shadow: var(--shadow-3);
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  &__item {
    align-items: center;
    display: flex;
    font: var(--font-caption);
    padding: var(--padding-1-square);
    min-height: 80px;
    min-width: 80px;

    &--success-green-100 {
      background-color: var(--success-green-100);
      color: var(--neutral-160);
    }

    &--warning-yellow-100 {
      background-color: var(--warning-yellow-100);
      color: var(--neutral-160);
    }

    &--error-red-100 {
      background-color: var(--error-red-100);
      color: var(--neutral-60);
    }
  }
}
</style>
