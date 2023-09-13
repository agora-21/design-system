<template>
  <article class="documentation-colors">
    <section
      v-for="color in COLORS"
      :key="color"
      class="documentation-colors__color"
    >
      <div class="documentation-colors__color-frame">
        <div
          v-for="variation in VARIATIONS"
          :key="variation"
          :class="`${color}--${variation}`"
          class="documentation-colors__color-variation"
        >
          <p class="documentation-colors__color-name">
            {{ `plum-${variation}` }}
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
const COLORS = [
  'plum',
  'indigo',
  'blue',
  'chocolate',
  'green',
  'neutral'
]

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
.documentation-colors {
  display: grid;
  grid-template-columns: repeat(6, 100%);
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100%;

  &__color {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: var(--padding-2-horizontal);
    scroll-snap-align: center;
  }

  &__color-frame {
    border-radius: var(--border-radius-3);
    box-shadow: var(--shadow-6);
    display: grid;
    grid-template-rows: repeat(13, 1fr);
    min-height: 600px;
    min-width: 600px;
    overflow: hidden;
  }

  &__color-variation {
    padding: var(--padding-1-horizontal);
  }
}

@each $color in "plum", "indigo", "blue", "chocolate", "green", "neutral" {
  @for $i from 30 through 150 {
    .#{$color}--#{$i} {
      background-color: var(--#{$color}-#{$i});
    }
  }
}
</style>
