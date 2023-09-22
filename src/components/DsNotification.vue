<template>
  <teleport to="body">
    <div class="ds-notification__container">
      <div class="ds-notification">
        <span class="ds-notification__label">
          {{ label }}
        </span>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
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

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.ds-notification {
  align-items: center;
  background-color: var(--blue-120);
  border-radius: 4px;
  box-shadow: var(--shadow-2);
  display: grid;
  height: 40px;
  padding: 0 16px;

  &__container {
    animation:
      slide-in 0.5s ease-in-out,
      fade-out 0.5s ease-in-out 3.5s;
    bottom: 20px;
    display: grid;
    justify-content: center;
    position: absolute;
    width: 100%;
  }

  &__label {
    color: var(--neutral-60);
    font: var(--font-caption);
  }
}
</style>
