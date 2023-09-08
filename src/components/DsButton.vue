<template>
  <button
    class="ds-button"
    :class="`ds-button--${color}`"
    data-test="button"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true,
    validator: (color) =>
      ['plum', 'indigo', 'blue', 'chocolate', 'green', 'neutral'].includes(color)
  },
  size: {
    type: String,
    default: 'medium'
  }
})
</script>

<style lang="scss" scoped>
.ds-button {
  border: none;
  border-radius: var(--border-radius-3);
  box-shadow: var(--shadow-3);
  text-transform: uppercase;
  padding: var(--padding-3);

  &--plum {
    background-color: var(--plum-100);
    color: var(--neutral-30);
  }

  &--indigo {
    background-color: var(--indigo-100);
    color: var(--neutral-30);
  }

  &--blue {
    background-color: var(--blue-100);
    color: var(--neutral-30);
  }

  &--chocolate {
    background-color: var(--chocolate-100);
    color: var(--neutral-30);
  }

  &--green {
    background-color: var(--green-100);
  }

  &--neutral {
    background-color: var(--neutral-100);
    color: var(--neutral-30);
  }
}
</style>
