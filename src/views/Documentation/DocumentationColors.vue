<template>
  <article class="documentation-colors">
    <h1 class="documentation-colors__title">
      Colors
    </h1>

    <p class="documentation-colors__description">
      This is a general collection of the colors included in the Design System.
    </p>

    <section>
      <h2 class="documentation-colors__subject">
        Keep in mind
      </h2>

      <p class="documentation-colors__description">
        The background color determines which text color must be used on top based on the contrast ratio.
      </p>
    </section>

    <div class="documentation-colors__colors">
      <section class="documentation-colors__colors-group">
        <h2 class="documentation-colors__subject">
          Primary colors
        </h2>

        <color-row
          v-for="color in PRIMARY_COLORS"
          :key="color"
          :color="color"
        />
      </section>

      <section class="documentation-colors__colors-group">
        <h2 class="documentation-colors__subject">
          Secondary colors
        </h2>

        <color-row
          v-for="color in SECONDARY_COLORS"
          :key="color"
          :color="color"
        />
      </section>

      <section class="documentation-colors__colors-group">
        <h2 class="documentation-colors__subject">
          Neutral colors
        </h2>

        <color-row
          v-for="color in NEUTRAL_COLORS"
          :key="color"
          :color="color"
        />
      </section>
    </div>
  </article>
</template>

<script setup>
import ColorRow from './DocumentationColors/ColorRow.vue'

const PRIMARY_COLORS = ['plum', 'blue']
const SECONDARY_COLORS = ['indigo', 'chocolate', 'green']
const NEUTRAL_COLORS = ['neutral']
</script>

<style lang="scss" scoped>
.documentation-colors {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-40);
    font: var(--font-title-1);
  }

  &__subject {
    color: var(--neutral-40);
    font: var(--font-caption);
  }

  &__description {
    color: var(--neutral-40);
    font: var(--font-body);
    margin-top: 12px;
  }

  &__colors {
    margin-top: 42px;
  }

  &__colors-group {
    &:not(:first-child) {
      margin-top: 32px;
    }
  }
}
</style>
