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
const SEMANTIC_COLORS = ['success-green', 'warning-yellow', 'error-red']
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

    &--success-green {
      background-color: var(--success-green);
      color: var(--neutral-160);
    }

    &--warning-yellow {
      background-color: var(--warning-yellow);
      color: var(--neutral-160);
    }

    &--error-red {
      background-color: var(--error-red);
      color: var(--neutral-60);
    }
  }
}
</style>
