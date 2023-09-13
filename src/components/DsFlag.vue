<template>
  <div
    class="ds-flag"
    :class="`ds-flag--${variant}`"
  >
    <span
      class="ds-flag__title"
      data-test="title"
    >
      {{ title }}
    </span>

    <span
      class="ds-flag__description"
      data-test="description"
    >
      {{ description }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true,
    validator: (variant) => ['info', 'warning', 'error', 'success'].includes(variant)
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.ds-flag {
  background: repeating-linear-gradient(
    45deg,
    var(--light-color),
    var(--light-color) 20px,
    var(--dark-color) 20px,
    var(--dark-color) 40px
  );
  border: 1px solid var(--neutral-100);
  border-radius: var(--border-radius-2);
  color: var(--neutral-30);
  display: grid;
  padding: var(--padding-2-horizontal);

  &--info {
    --light-color: var(--neutral-130);
    --dark-color: var(--neutral-120);
  }

  &--warning {
    --light-color: var(--chocolate-130);
    --dark-color: var(--chocolate-120);
  }

  &--error {
    --light-color: var(--plum-130);
    --dark-color: var(--plum-120);
  }

  &--success {
    --light-color: var(--green-130);
    --dark-color: var(--green-120);
  }
}
</style>
