<template>
  <article class="documentation-loaders">
    <h2 class="documentation-loaders__title">
      Loaders
    </h2>

    <p class="documentation-loaders__description">
      An awesome loader for an awesome content.
    </p>

    <section>
      <h3 class="documentation-loaders__subject">
        On a plum/indigo background
      </h3>

      <div class="documentation-loaders__loader-container documentation-loaders__loader-container--plum-indigo">
        <ds-loader />
      </div>
    </section>

    <section>
      <h3 class="documentation-loaders__subject">
        On a blue/green background
      </h3>

      <div class="documentation-loaders__loader-container documentation-loaders__loader-container--blue-green">
        <ds-loader />
      </div>
    </section>

    <section>
      <h3 class="documentation-loaders__subject">
        On a chocolate/indigo background
      </h3>

      <div class="documentation-loaders__loader-container documentation-loaders__loader-container--chocolate-plum">
        <ds-loader />
      </div>
    </section>

    <section>
      <h3 class="documentation-loaders__subject">
        On a neutral background
      </h3>

      <div class="documentation-loaders__loader-container">
        <ds-loader />
      </div>
    </section>
  </article>
</template>

<script setup>
import DsLoader from '@/components/DsLoader.vue'
</script>

<style lang="scss" scoped>
.documentation-loaders {
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

  &__loader-container {
    align-items: center;
    background-color: var(--neutral-150);
    border-radius: var(--border-radius-4);
    box-shadow: var(--shadow-6);
    display: flex;
    justify-content: center;
    margin-top: 18px;
    min-height: 400px;
    max-width: 600px;

    &--plum-indigo {
      background: linear-gradient(50deg, var(--plum-160) 0%, var(--indigo-160) 100%);
    }

    &--blue-green {
      background: linear-gradient(50deg, var(--blue-160) 0%, var(--green-160) 100%);
    }

    &--chocolate-plum {
      background: linear-gradient(50deg, var(--chocolate-160) 0%, var(--plum-160) 100%);
    }
  }
}
</style>
