<template>
  <div class="color-row">
    <div
      v-for="variation in VARIATIONS"
      :key="variation"
      class="color-row__item"
      :class="`color-row__item--${color}-${variation}`"
    >
      <span class="color-row__label">
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
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
  '110',
  '120',
  '130',
  '140'
]
</script>

<style lang="scss" scoped>
.color-row {
  border-radius: var(--border-radius-3);
  box-shadow: var(--shadow-3);
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &__item {
    align-items: center;
    display: flex;
    font: var(--font-caption);
    padding: var(--padding-1-square);
    min-height: 80px;
    min-width: 80px;

    &--neutral-40 {
      background-color: var(--neutral-40);
      color: var(--neutral-140);
    }

    &--neutral-40 {
      background-color: var(--neutral-40);
      color: var(--neutral-140);
    }

    &--neutral-50 {
      background-color: var(--neutral-50);
      color: var(--neutral-140);
    }

    &--neutral-60 {
      background-color: var(--neutral-60);
      color: var(--neutral-140);
    }

    &--neutral-70 {
      background-color: var(--neutral-70);
      color: var(--neutral-140);
    }

    &--neutral-80 {
      background-color: var(--neutral-80);
      color: var(--neutral-40);
    }

    &--neutral-90 {
      background-color: var(--neutral-90);
      color: var(--neutral-40);
    }

    &--neutral-100 {
      background-color: var(--neutral-100);
      color: var(--neutral-40);
    }

    &--neutral-110 {
      background-color: var(--neutral-110);
      color: var(--neutral-40);
    }

    &--neutral-120 {
      background-color: var(--neutral-120);
      color: var(--neutral-40);
    }

    &--neutral-130 {
      background-color: var(--neutral-130);
      color: var(--neutral-40);
    }

    &--neutral-140 {
      background-color: var(--neutral-140);
      color: var(--neutral-40);
    }

    &--neutral-140 {
      background-color: var(--neutral-140);
      color: var(--neutral-40);
    }

    &--plum-40 {
      background-color: var(--plum-40);
      color: var(--neutral-140);
    }

    &--plum-50 {
      background-color: var(--plum-50);
      color: var(--neutral-140);
    }

    &--plum-60 {
      background-color: var(--plum-60);
      color: var(--neutral-140);
    }

    &--plum-70 {
      background-color: var(--plum-70);
      color: var(--neutral-140);
    }

    &--plum-80 {
      background-color: var(--plum-80);
      color: var(--neutral-40);
    }

    &--plum-90 {
      background-color: var(--plum-90);
      color: var(--neutral-40);
    }

    &--plum-100 {
      background-color: var(--plum-100);
      color: var(--neutral-40);
    }

    &--plum-110 {
      background-color: var(--plum-110);
      color: var(--neutral-40);
    }

    &--plum-120 {
      background-color: var(--plum-120);
      color: var(--neutral-40);
    }

    &--plum-130 {
      background-color: var(--plum-130);
      color: var(--neutral-40);
    }

    &--plum-140 {
      background-color: var(--plum-140);
      color: var(--neutral-40);
    }

    &--indigo-40 {
      background-color: var(--indigo-40);
      color: var(--neutral-140);
    }

    &--indigo-50 {
      background-color: var(--indigo-50);
      color: var(--neutral-140);
    }

    &--indigo-60 {
      background-color: var(--indigo-60);
      color: var(--neutral-40);
    }

    &--indigo-70 {
      background-color: var(--indigo-70);
      color: var(--neutral-40);
    }

    &--indigo-80 {
      background-color: var(--indigo-80);
      color: var(--neutral-40);
    }

    &--indigo-90 {
      background-color: var(--indigo-90);
      color: var(--neutral-40);
    }

    &--indigo-100 {
      background-color: var(--indigo-100);
      color: var(--neutral-40);
    }

    &--indigo-110 {
      background-color: var(--indigo-110);
      color: var(--neutral-40);
    }

    &--indigo-120 {
      background-color: var(--indigo-120);
      color: var(--neutral-40);
    }

    &--indigo-130 {
      background-color: var(--indigo-130);
      color: var(--neutral-40);
    }

    &--indigo-140 {
      background-color: var(--indigo-140);
      color: var(--neutral-40);
    }

    &--blue-40 {
      background-color: var(--blue-40);
      color: var(--neutral-140);
    }

    &--blue-50 {
      background-color: var(--blue-50);
      color: var(--neutral-140);
    }

    &--blue-60 {
      background-color: var(--blue-60);
      color: var(--neutral-140);
    }

    &--blue-70 {
      background-color: var(--blue-70);
      color: var(--neutral-140);
    }

    &--blue-80 {
      background-color: var(--blue-80);
      color: var(--neutral-140);
    }

    &--blue-90 {
      background-color: var(--blue-90);
      color: var(--neutral-40);
    }

    &--blue-100 {
      background-color: var(--blue-100);
      color: var(--neutral-40);
    }

    &--blue-110 {
      background-color: var(--blue-110);
      color: var(--neutral-40);
    }

    &--blue-120 {
      background-color: var(--blue-120);
      color: var(--neutral-40);
    }

    &--blue-130 {
      background-color: var(--blue-130);
      color: var(--neutral-40);
    }

    &--blue-140 {
      background-color: var(--blue-140);
      color: var(--neutral-40);
    }

    &--chocolate-40 {
      background-color: var(--chocolate-40);
      color: var(--neutral-140);
    }

    &--chocolate-50 {
      background-color: var(--chocolate-50);
      color: var(--neutral-140);
    }

    &--chocolate-60 {
      background-color: var(--chocolate-60);
      color: var(--neutral-140);
    }

    &--chocolate-70 {
      background-color: var(--chocolate-70);
      color: var(--neutral-140);
    }

    &--chocolate-80 {
      background-color: var(--chocolate-80);
      color: var(--neutral-140);
    }

    &--chocolate-90 {
      background-color: var(--chocolate-90);
      color: var(--neutral-140);
    }

    &--chocolate-100 {
      background-color: var(--chocolate-100);
      color: var(--neutral-40);
    }

    &--chocolate-110 {
      background-color: var(--chocolate-110);
      color: var(--neutral-40);
    }

    &--chocolate-120 {
      background-color: var(--chocolate-120);
      color: var(--neutral-40);
    }

    &--chocolate-130 {
      background-color: var(--chocolate-130);
      color: var(--neutral-40);
    }

    &--chocolate-140 {
      background-color: var(--chocolate-140);
      color: var(--neutral-40);
    }

    &--green-40 {
      background-color: var(--green-40);
      color: var(--neutral-140);
    }

    &--green-50 {
      background-color: var(--green-50);
      color: var(--neutral-140);
    }

    &--green-60 {
      background-color: var(--green-60);
      color: var(--neutral-140);
    }

    &--green-70 {
      background-color: var(--green-70);
      color: var(--neutral-140);
    }

    &--green-80 {
      background-color: var(--green-80);
      color: var(--neutral-140);
    }

    &--green-90 {
      background-color: var(--green-90);
      color: var(--neutral-140);
    }

    &--green-100 {
      background-color: var(--green-100);
      color: var(--neutral-140);
    }

    &--green-110 {
      background-color: var(--green-110);
      color: var(--neutral-40);
    }

    &--green-120 {
      background-color: var(--green-120);
      color: var(--neutral-40);
    }

    &--green-130 {
      background-color: var(--green-130);
      color: var(--neutral-40);
    }

    &--green-140 {
      background-color: var(--green-140);
      color: var(--neutral-40);
    }
  }
}
</style>
