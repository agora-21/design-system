<template>
  <section class="available-colors">
    <div class="available-colors__current">
      <div
        v-for="variation in VARIATIONS"
        :key="variation"
        :class="`available-colors__current--variation-${variation}`"
      >
        <p class="available-colors__current-color">
          {{ `plum-${variation}` }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const VARIATIONS = [
  '30',
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
  '140',
  '150'
]
</script>

<style lang="scss" scoped>
.available-colors {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  padding: var(--padding-2);

  &__current {
    box-shadow: var(--shadow-6);
    display: grid;
    grid-template-rows: repeat(13, 1fr);
    min-height: 600px;
    min-width: 600px;

    @for $i from 30 through 150 {
      &--variation-#{$i} {
        background-color: var(--plum-#{$i});
        padding: var(--padding-1);
      }
    }
  }
}
</style>
