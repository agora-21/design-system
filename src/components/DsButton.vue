<template>
  <button
    class="ds-button"
    :class="`
      ds-button--${color}
      ds-button--${variant}
      ds-button--${size}
    `"
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
    validator: (color) => ['plum', 'indigo', 'blue', 'chocolate', 'green', 'neutral'].includes(color)
  },

  size: {
    type: String,
    default: 'medium',
    validator: (size) => ['small', 'medium', 'large'].includes(size)
  },

  variant: {
    type: String,
    required: true,
    validator: (variant) => ['filled', 'outline'].includes(variant)
  }
})
</script>

<style lang="scss" scoped>
.ds-button {
  --light-text-color: var(--neutral-60);
  --dark-text-color: var(--neutral-170);

  border: none;
  border-radius: var(--border-radius-3);
  color: var(--text-color);
  cursor: pointer;
  text-transform: uppercase;
  padding: var(--padding-3-horizontal);

  // Colors
  &--plum {
    --background-color: var(--plum-100);
    --text-color: var(--dark-text-color);

    &:hover {
      --text-color: var(--dark-text-color);
    }

    &:active {
      --text-color: var(--dark-text-color);
    }
  }

  &--indigo {
    --background-color: var(--indigo-100);
    --text-color: var(--light-text-color);

    &:hover {
      --text-color: var(--light-text-color);
    }

    &:active {
      --text-color: var(--light-text-color);
    }
  }

  &--blue {
    --background-color: var(--blue-100);
    --text-color: var(--dark-text-color);

    &:hover {
      --text-color: var(--dark-text-color);
    }

    &:active {
      --text-color: var(--dark-text-color);
    }
  }

  &--chocolate {
    --background-color: var(--chocolate-100);
    --text-color: var(--dark-text-color);

    &:hover {
      --text-color: var(--dark-text-color);
    }

    &:active {
      --text-color: var(--dark-text-color);
    }
  }

  &--green {
    --background-color: var(--green-100);
    --text-color: var(--dark-text-color);

    &:hover {
      --text-color: var(--dark-text-color);
    }

    &:active {
      --text-color: var(--dark-text-color);
    }
  }

  &--neutral {
    --background-color: var(--neutral-100);
    --text-color: var(--dark-text-color);

    &:hover {
      --text-color: var(--dark-text-color);
    }

    &:active {
      --text-color: var(--dark-text-color);
    }
  }

  // Variants
  &--filled {
    background-color: transparent;
    box-shadow: 0 0 50px 50px var(--background-color) inset;
    transition: all 50ms ease-in-out;

    &:hover {
      box-shadow: 0 0 10px 0 var(--background-color) inset, 0 0 10px 4px var(--background-color);

      &:not(:active) {
        --text-color: var(--light-text-color);
      }
    }

    &:active {
      background-color: var(--background-color);
    }
  }

  &--outline {
    background-color: transparent;
    border: 2px solid var(--background-color);
    box-shadow: none;
    --text-color: var(--light-text-color);
    transition: all 100ms ease-in-out;

    &:hover {
      box-shadow: 0 0 50px 50px var(--background-color) inset;
    }
  }
}
</style>
