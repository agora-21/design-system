<template>
  <div
    class="ds-tag"
    :class="`
      ds-tag--${color}
      ds-tag--${variant}
    `"
  >
    <span class="ds-tag__text">
      <slot />
    </span>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true,
    validator: (color) =>
      ['plum', 'indigo', 'blue', 'chocolate', 'green', 'neutral'].includes(color)
  },

  variant: {
    type: String,
    required: true,
    validator: (variant) => ['filled', 'outline'].includes(variant)
  }
})
</script>

<style lang="scss" scoped>
.ds-tag {
  border-radius: 50px;
  padding: 2px 12px;

  &__text {
    font: var(--font-caption);
  }

  &--plum {
    --color: var(--plum-90);
    --text-color: var(--neutral-40);
  }

  &--indigo {
    --color: var(--indigo-90);
    --text-color: var(--neutral-40);
  }

  &--blue {
    --color: var(--blue-90);
    --text-color: var(--neutral-40);
  }

  &--chocolate {
    --color: var(--chocolate-90);
    --text-color: var(--neutral-140);
  }

  &--green {
    --color: var(--green-90);
    --text-color: var(--neutral-140);
  }

  &--neutral {
    --color: var(--neutral-90);
    --text-color: var(--neutral-140);
  }

  &--filled {
    background-color: var(--color);
    border: none;
    color: var(--text-color);
  }

  &--outline {
    background-color: transparent;
    border: 1px solid var(--color);
    color: var(--neutral-40);
  }
}
</style>
