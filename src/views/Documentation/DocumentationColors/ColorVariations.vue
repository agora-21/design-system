<template>
  <div class="color-variations">
    <div
      v-for="variation in VARIATIONS"
      :key="variation"
      class="color-variations__item"
      :class="`color-variations__item--${color}-${variation}`"
    >
      <span class="color-variations__label">
        {{ `${color}-${variation}` }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true,
    validator: (color) => ['plum', 'indigo', 'blue', 'chocolate', 'green', 'neutral'].includes(color)
  }
})

const VARIATIONS = [
  '60',
  '70',
  '80',
  '90',
  '100',
  '110',
  '120',
  '130',
  '140',
  '150',
  '160'
]
</script>

<style lang="scss" scoped>
.color-variations {
  border-radius: var(--border-radius-3);
  box-shadow: var(--shadow-3);
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  overflow: hidden;

  &__item {
    align-items: center;
    display: flex;
    font: var(--font-caption);
    padding: var(--padding-1-square);
    min-height: 80px;
    min-width: 80px;

    &--neutral-60 {
      background-color: var(--neutral-60);
      color: var(--neutral-160);
    }

    &--neutral-70 {
      background-color: var(--neutral-70);
      color: var(--neutral-160);
    }

    &--neutral-80 {
      background-color: var(--neutral-80);
      color: var(--neutral-160);
    }

    &--neutral-90 {
      background-color: var(--neutral-90);
      color: var(--neutral-160);
    }

    &--neutral-100 {
      background-color: var(--neutral-100);
      color: var(--neutral-160);
    }

    &--neutral-110 {
      background-color: var(--neutral-110);
      color: var(--neutral-60);
    }

    &--neutral-120 {
      background-color: var(--neutral-120);
      color: var(--neutral-60);
    }

    &--neutral-130 {
      background-color: var(--neutral-130);
      color: var(--neutral-60);
    }

    &--neutral-140 {
      background-color: var(--neutral-140);
      color: var(--neutral-60);
    }

    &--neutral-150 {
      background-color: var(--neutral-150);
      color: var(--neutral-60);
    }

    &--neutral-160 {
      background-color: var(--neutral-160);
      color: var(--neutral-60);
    }

    &--plum-60 {
      background-color: var(--plum-60);
      color: var(--neutral-160);
    }

    &--plum-70 {
      background-color: var(--plum-70);
      color: var(--neutral-160);
    }

    &--plum-80 {
      background-color: var(--plum-80);
      color: var(--neutral-160);
    }

    &--plum-90 {
      background-color: var(--plum-90);
      color: var(--neutral-140);
    }

    &--plum-100 {
      background-color: var(--plum-100);
      color: var(--neutral-140);
    }

    &--plum-110 {
      background-color: var(--plum-110);
      color: var(--neutral-60);
    }

    &--plum-120 {
      background-color: var(--plum-120);
      color: var(--neutral-60);
    }

    &--plum-130 {
      background-color: var(--plum-130);
      color: var(--neutral-60);
    }

    &--plum-140 {
      background-color: var(--plum-140);
      color: var(--neutral-60);
    }

    &--plum-150 {
      background-color: var(--plum-150);
      color: var(--neutral-60);
    }

    &--plum-160 {
      background-color: var(--plum-160);
      color: var(--neutral-60);
    }

    &--indigo-60 {
      background-color: var(--indigo-60);
      color: var(--neutral-160);
    }

    &--indigo-70 {
      background-color: var(--indigo-70);
      color: var(--neutral-160);
    }

    &--indigo-80 {
      background-color: var(--indigo-80);
      color: var(--neutral-160);
    }

    &--indigo-90 {
      background-color: var(--indigo-90);
      color: var(--neutral-60);
    }

    &--indigo-100 {
      background-color: var(--indigo-100);
      color: var(--neutral-60);
    }

    &--indigo-110 {
      background-color: var(--indigo-110);
      color: var(--neutral-60);
    }

    &--indigo-120 {
      background-color: var(--indigo-120);
      color: var(--neutral-60);
    }

    &--indigo-130 {
      background-color: var(--indigo-130);
      color: var(--neutral-60);
    }

    &--indigo-140 {
      background-color: var(--indigo-140);
      color: var(--neutral-60);
    }

    &--indigo-150 {
      background-color: var(--indigo-150);
      color: var(--neutral-60);
    }

    &--indigo-160 {
      background-color: var(--indigo-160);
      color: var(--neutral-60);
    }

    &--blue-60 {
      background-color: var(--blue-60);
      color: var(--neutral-160);
    }

    &--blue-70 {
      background-color: var(--blue-70);
      color: var(--neutral-160);
    }

    &--blue-80 {
      background-color: var(--blue-80);
      color: var(--neutral-160);
    }

    &--blue-90 {
      background-color: var(--blue-90);
      color: var(--neutral-160);
    }

    &--blue-100 {
      background-color: var(--blue-100);
      color: var(--neutral-160);
    }

    &--blue-110 {
      background-color: var(--blue-110);
      color: var(--neutral-160);
    }

    &--blue-120 {
      background-color: var(--blue-120);
      color: var(--neutral-60);
    }

    &--blue-130 {
      background-color: var(--blue-130);
      color: var(--neutral-60);
    }

    &--blue-140 {
      background-color: var(--blue-140);
      color: var(--neutral-60);
    }

    &--blue-150 {
      background-color: var(--blue-150);
      color: var(--neutral-60);
    }

    &--blue-160 {
      background-color: var(--blue-160);
      color: var(--neutral-60);
    }

    &--chocolate-60 {
      background-color: var(--chocolate-60);
      color: var(--neutral-160);
    }

    &--chocolate-70 {
      background-color: var(--chocolate-70);
      color: var(--neutral-160);
    }

    &--chocolate-80 {
      background-color: var(--chocolate-80);
      color: var(--neutral-160);
    }

    &--chocolate-90 {
      background-color: var(--chocolate-90);
      color: var(--neutral-160);
    }

    &--chocolate-100 {
      background-color: var(--chocolate-100);
      color: var(--neutral-160);
    }

    &--chocolate-110 {
      background-color: var(--chocolate-110);
      color: var(--neutral-160);
    }

    &--chocolate-120 {
      background-color: var(--chocolate-120);
      color: var(--neutral-160);
    }

    &--chocolate-130 {
      background-color: var(--chocolate-130);
      color: var(--neutral-60);
    }

    &--chocolate-140 {
      background-color: var(--chocolate-140);
      color: var(--neutral-60);
    }

    &--chocolate-150 {
      background-color: var(--chocolate-150);
      color: var(--neutral-60);
    }

    &--chocolate-160 {
      background-color: var(--chocolate-160);
      color: var(--neutral-60);
    }

    &--green-60 {
      background-color: var(--green-60);
      color: var(--neutral-160);
    }

    &--green-70 {
      background-color: var(--green-70);
      color: var(--neutral-160);
    }

    &--green-80 {
      background-color: var(--green-80);
      color: var(--neutral-160);
    }

    &--green-90 {
      background-color: var(--green-90);
      color: var(--neutral-160);
    }

    &--green-100 {
      background-color: var(--green-100);
      color: var(--neutral-160);
    }

    &--green-110 {
      background-color: var(--green-110);
      color: var(--neutral-160);
    }

    &--green-120 {
      background-color: var(--green-120);
      color: var(--neutral-160);
    }

    &--green-130 {
      background-color: var(--green-130);
      color: var(--neutral-160);
    }

    &--green-140 {
      background-color: var(--green-140);
      color: var(--neutral-60);
    }

    &--green-150 {
      background-color: var(--green-150);
      color: var(--neutral-60);
    }

    &--green-160 {
      background-color: var(--green-160);
      color: var(--neutral-60);
    }
  }
}
</style>
