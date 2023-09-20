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
@keyframes barberpole {
  100% {
    background-position: 100% 100%;
  }
}

@mixin background-stripe {
  animation: barberpole 12s linear infinite;
  background: repeating-linear-gradient(
    45deg,
    var(--light-color),
    var(--light-color) 20px,
    var(--dark-color) 20px,
    var(--dark-color) 40px
  );
  background-size: 200% 200%;
}

.ds-flag {
  border-radius: var(--border-radius-2);
  box-shadow: var(--shadow-1);
  display: grid;
  padding: 16px 20px;

  &__title {
    font: var(--font-title-4);
  }

  &__description {
    font: var(--font-body);
  }

  &--info {
    background-color: var(--neutral-120);
    border: 1px solid var(--neutral-90);
    color: var(--neutral-60);
  }

  &--warning {
    @include background-stripe;

    --light-color: var(--warning-yellow-100);
    --dark-color: var(--warning-yellow-105);

    color: var(--neutral-160);
  }

  &--error {
    @include background-stripe;

    --light-color: var(--error-red-100);
    --dark-color: var(--error-red-105);

    color: var(--neutral-60);
  }

  &--success {
    @include background-stripe;

    --light-color: var(--success-green-100);
    --dark-color: var(--success-green-105);

    color: var(--neutral-160);
  }
}
</style>
