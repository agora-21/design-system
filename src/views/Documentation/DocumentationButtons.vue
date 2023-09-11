<template>
  <article class="documentation-buttons">
    <h1 class="documentation-buttons__title">
      Buttons
    </h1>

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
  </article>
</template>

<script setup>
import DsButton from '@/components/DsButton.vue'
</script>

<style lang="scss" scoped>
.documentation-buttons {
  justify-content: start;
  padding: var(--padding-3-square);

  &__title {
    color: var(--neutral-30);
    font: var(--font-title-1);
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
