<template>
  <article class="documentation-tags">
    <h1 class="documentation-tags__title">
      Tags
    </h1>

    <div class="documentation-tags__group">
      <ds-tag color="plum" variant="filled">
        Something interesting
      </ds-tag>
      <ds-tag color="plum" variant="outline">
        Something interesting
      </ds-tag>
    </div>

    <div class="documentation-tags__group">
      <ds-tag color="indigo" variant="filled">
        Something interesting
      </ds-tag>
      <ds-tag color="indigo" variant="outline">
        Something interesting
      </ds-tag>
    </div>

    <div class="documentation-tags__group">
      <ds-tag color="blue" variant="filled">
        Something interesting
      </ds-tag>
      <ds-tag color="blue" variant="outline">
        Something interesting
      </ds-tag>
    </div>

    <div class="documentation-tags__group">
      <ds-tag color="chocolate" variant="filled">
        Something interesting
      </ds-tag>
      <ds-tag color="chocolate" variant="outline">
        Something interesting
      </ds-tag>
    </div>

    <div class="documentation-tags__group">
      <ds-tag color="green" variant="filled">
        Something interesting
      </ds-tag>
      <ds-tag color="green" variant="outline">
        Something interesting
      </ds-tag>
    </div>

    <div class="documentation-tags__group">
      <ds-tag color="neutral" variant="filled">
        Something interesting
      </ds-tag>
      <ds-tag color="neutral" variant="outline">
        Something interesting
      </ds-tag>
    </div>
  </article>
</template>

<script setup>
import DsTag from '@/components/DsTag.vue'
</script>

<style lang="scss" scoped>
.documentation-tags {
  justify-content: start;
  padding: var(--padding-3-square);

  &__title {
    color: var(--neutral-40);
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
