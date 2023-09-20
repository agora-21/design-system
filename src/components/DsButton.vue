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
  border: none;
  border-radius: var(--border-radius-3);
  cursor: pointer;
  font: var(--font-body);
  padding: 14px 30px;
  transition: all 150ms ease-in-out;

  // Colors
  &--plum {
    &.ds-button--filled {
      background-color: var(--plum-100);
      color: var(--neutral-170);

      &:hover {
        background-color: var(--plum-80);
      }

      &:active {
        background-color: var(--plum-70);
      }
    }


    &.ds-button--outline {
      background-color: transparent;
      border: 2px solid var(--plum-100);
      color: var(--plum-100);

      &:hover {
        background-color: var(--plum-80);
        border-color: var(--plum-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--plum-70);
        border-color: var(--plum-70);
        color: var(--neutral-170);
      }
    }
  }

  &--indigo {
    &.ds-button--filled {
      background-color: var(--indigo-100);
      color: var(--neutral-60);

      &:hover {
        background-color: var(--indigo-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--indigo-70);
        color: var(--neutral-170);
      }
    }


    &.ds-button--outline {
      background-color: transparent;
      border: 2px solid var(--indigo-100);
      color: var(--indigo-100);

      &:hover {
        background-color: var(--indigo-80);
        border-color: var(--indigo-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--indigo-70);
        border-color: var(--indigo-70);
        color: var(--neutral-170);
      }
    }
  }

  &--blue {
    &.ds-button--filled {
      background-color: var(--blue-100);
      color: var(--neutral-170);

      &:hover {
        background-color: var(--blue-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--blue-70);
        color: var(--neutral-170);
      }
    }


    &.ds-button--outline {
      background-color: transparent;
      border: 2px solid var(--blue-100);
      color: var(--blue-100);

      &:hover {
        background-color: var(--blue-80);
        border-color: var(--blue-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--blue-70);
        border-color: var(--blue-70);
        color: var(--neutral-170);
      }
    }
  }

  &--chocolate {
    &.ds-button--filled {
      background-color: var(--chocolate-100);
      color: var(--neutral-170);

      &:hover {
        background-color: var(--chocolate-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--chocolate-70);
        color: var(--neutral-170);
      }
    }


    &.ds-button--outline {
      background-color: transparent;
      border: 2px solid var(--chocolate-100);
      color: var(--chocolate-100);

      &:hover {
        background-color: var(--chocolate-80);
        border-color: var(--chocolate-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--chocolate-70);
        border-color: var(--chocolate-70);
        color: var(--neutral-170);
      }
    }
  }

  &--green {
    &.ds-button--filled {
      background-color: var(--green-100);
      color: var(--neutral-170);

      &:hover {
        background-color: var(--green-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--green-70);
        color: var(--neutral-170);
      }
    }


    &.ds-button--outline {
      background-color: transparent;
      border: 2px solid var(--green-100);
      color: var(--green-100);

      &:hover {
        background-color: var(--green-80);
        border-color: var(--green-80);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--green-70);
        border-color: var(--green-70);
        color: var(--neutral-170);
      }
    }
  }

  &--neutral {
    &.ds-button--filled {
      background-color: var(--neutral-80);
      color: var(--neutral-170);

      &:hover {
        background-color: var(--neutral-70);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--neutral-60);
        color: var(--neutral-170);
      }
    }


    &.ds-button--outline {
      background-color: transparent;
      border: 2px solid var(--neutral-80);
      color: var(--neutral-80);

      &:hover {
        background-color: var(--neutral-70);
        border-color: var(--neutral-70);
        color: var(--neutral-170);
      }

      &:active {
        background-color: var(--neutral-60);
        border-color: var(--neutral-60);
        color: var(--neutral-170);
      }
    }
  }
}
</style>
