<template>
  <article class="documentation-radios">
    <h2 class="documentation-radios__title">
      Radios
    </h2>

    <p class="documentation-radios__description">
      Radios inputs can be used when there are more than one options for the user to choose between.
    </p>

    <section>
      <h3 class="documentation-radios__subject">
        Regular
      </h3>

      <div class="documentation-radios__container">
        <ds-radio
          v-model="regularSelected"
          id="regular-1"
          label="Regular 1"
          value="regular-1"
        />

        <ds-radio
          v-model="regularSelected"
          id="regular-2"
          label="Regular 2"
          value="regular-2"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import DsRadio from '@/components/DsRadio.vue'

const regularSelected = ref('regular-1')
</script>

<style lang="scss" scoped>
.documentation-radios {
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-60);
    font: var(--font-title-1);
  }

  &__subject {
    color: var(--neutral-60);
    font: var(--font-caption);
    margin-top: 42px;
  }

  &__description {
    color: var(--neutral-60);
    font: var(--font-body);
    margin-top: 12px;
  }

  &__container {
    display: grid;
    gap: 8px;
    margin-top: 18px;
  }
}
</style>
