<template>
  <article class="documentation-buttons">
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
  display: grid;
  gap: 20px;
  padding: var(--padding-3);

  &__group {
    display: flex;
    gap: 32px;
  }
}
</style>
