<template>
  <article class="documentation-buttons">
    <h1 class="documentation-buttons__title">
      Buttons
    </h1>

    <section>
      <h2 class="documentation-buttons__subject">
        When to use
      </h2>

      <p class="documentation-buttons__description">
        A button communicates actions users can take to interact with the page.
      </p>
    </section>

    <section>
      <h2 class="documentation-buttons__subject">
        When not to use
      </h2>

      <p class="documentation-buttons__description">
        A button should never be used as a navigational element to change URLs.
      </p>
    </section>

    <section class="documentation-buttons__buttons-section">
      <div class="documentation-buttons__group">
        <ds-button color="plum" variant="filled">
          Click here
        </ds-button>
        <ds-button color="plum" variant="outline">
          Click here
        </ds-button>
      </div>

      <div class="documentation-buttons__group">
        <ds-button color="indigo" variant="filled">
          Click here
        </ds-button>
        <ds-button color="indigo" variant="outline">
          Click here
        </ds-button>
      </div>

      <div class="documentation-buttons__group">
        <ds-button color="blue" variant="filled">
          Click here
        </ds-button>
        <ds-button color="blue" variant="outline">
          Click here
        </ds-button>
      </div>

      <div class="documentation-buttons__group">
        <ds-button color="chocolate" variant="filled">
          Click here
        </ds-button>
        <ds-button color="chocolate" variant="outline">
          Click here
        </ds-button>
      </div>

      <div class="documentation-buttons__group">
        <ds-button color="green" variant="filled">
          Click here
        </ds-button>
        <ds-button color="green" variant="outline">
          Click here
        </ds-button>
      </div>

      <div class="documentation-buttons__group">
        <ds-button color="neutral" variant="filled">
          Click here
        </ds-button>
        <ds-button color="neutral" variant="outline">
          Click here
        </ds-button>
      </div>
    </section>
  </article>
</template>

<script setup>
import DsButton from '@/components/DsButton.vue'
</script>

<style lang="scss" scoped>
.documentation-buttons {
  justify-content: start;
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-30);
    font: var(--font-title-1);
  }

  &__subject {
    color: var(--neutral-40);
    font: var(--font-caption);
    margin-top: 20px;
  }

  &__description {
    color: var(--neutral-30);
    font: var(--font-body);
  }

  &__buttons-section {
    margin-top: 40px;
  }

  &__group {
    display: flex;
    gap: 32px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
