<template>
  <article class="documentation-inputs">
    <h2 class="documentation-inputs__title">
      Inputs
    </h2>

    <p class="documentation-inputs__description">
      An awesome input for an awesome form.
    </p>

    <section>
      <h3 class="documentation-inputs__case">
        Regular
      </h3>

      <div class="documentation-inputs__input-container">
        <ds-input
          v-model="regularText"
          id="regular"
          label="Text field"
          placeholder="Type something here..."
        />
      </div>
    </section>

    <section>
      <h3 class="documentation-inputs__case">
        Disabled
      </h3>

      <div class="documentation-inputs__input-container">
        <ds-input
          disabled
          id="disabled"
          label="Text field"
          placeholder="Try to type something here..."
        />
      </div>
    </section>

    <section>
      <h3 class="documentation-inputs__case">
        Read only
      </h3>

      <div class="documentation-inputs__input-container">
        <ds-input
          model-value="Read only text"
          read-only
          id="read-only"
          label="Text field"
          placeholder="Try to type something here..."
        />
      </div>
    </section>

    <section>
      <h3 class="documentation-inputs__case">
        With error
      </h3>

      <div class="documentation-inputs__input-container">
        <ds-input
          model-value="Invalid input"
          id="with-error"
          label="Text field"
          placeholder="Try to type something here..."
          error="Text must contain the expression One Piece"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'

import DsInput from '@/components/DsInput.vue'

const regularText = ref('')
</script>

<style lang="scss" scoped>
.documentation-inputs {
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-60);
    font: var(--font-title-1);
  }

  &__description {
    color: var(--neutral-60);
    font: var(--font-body);
    margin-top: 12px;
  }

  &__case {
    color: var(--neutral-60);
    font: var(--font-title-4);
    margin-top: 56px;
  }

  &__input-container {
    display: grid;
    margin-top: 16px;
    grid-template-columns: 400px;
  }
}
</style>
