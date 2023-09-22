<template>
  <teleport to="body">
    <div class="ds-notification__container">
      <div
        :class="{ 'ds-notification--hidden': hidden }"
        class="ds-notification"
        data-test="notification"
      >
        <span class="ds-notification__label">
          {{ label }}
        </span>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})

const VISIBLE_DURATION_IN_MILISECONDS = 2500

const hidden = ref(false)

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, VISIBLE_DURATION_IN_MILISECONDS))

  hidden.value = true
})
</script>

<style lang="scss" scoped>
@keyframes slide-in {
  from {
    bottom: -40px;
  }
  to {
    bottom: 20px;
  }
}

.ds-notification {
  align-items: center;
  background-color: var(--blue-120);
  border-radius: 4px;
  box-shadow: var(--shadow-2);
  display: grid;
  height: 40px;
  opacity: 1;
  padding: 0 16px;
  transition: opacity 0.5s ease-in-out;

  &--hidden {
    opacity: 0;
  }

  &__container {
    animation: slide-in 0.5s ease-in-out;
    bottom: 20px;
    display: grid;
    justify-content: center;
    position: fixed;
    width: 100%;
  }

  &__label {
    color: var(--neutral-60);
    font: var(--font-caption);
  }
}
</style>
