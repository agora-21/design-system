<template>
  <div class="ds-input__container">
    <label
      :for="id"
      class="ds-input__label"
      data-test="label"
    >
      {{ label }}
    </label>

    <input
      :value="modelValue"
      :disabled="disabled"
      :id="id"
      :placeholder="placeholder"
      :readonly="readOnly"
      :class="{
        'ds-input--disabled': disabled,
        'ds-input--read-only': readOnly,
        'ds-input--error': error.length
      }"
      class="ds-input"
      data-test="input"
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
    >

    <p
      v-if="error.length"
      class="ds-input__error"
      data-test="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },

  id: {
    type: String,
    required: true
  },

  label: {
    type: String,
    required: true
  },

  placeholder: {
    type: String,
    required: true
  },

  disabled: {
    type: Boolean,
    default: false
  },

  readOnly: {
    type: Boolean,
    default: false
  },

  error: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.ds-input {
  --border-color: var(--neutral-80);

  background-color: var(--neutral-150);
  border-radius: 4px;
  border: 1px solid var(--border-color);
  color: var(--neutral-60);
  font: var(--font-body);
  margin-top: 6px;
  padding: 8px 12px;

  &:focus {
    --border-color: var(--plum-100);

    outline: none;
  }

  &::placeholder {
    color: var(--neutral-100);
  }

  &--disabled {
    background-color: var(--neutral-140);
    cursor: not-allowed;
  }

  &--read-only {
    border: none;
    border-bottom: 1px solid var(--border-color);
    border-radius: 0;
    cursor: not-allowed;
  }

  &--error {
    --border-color: var(--error-red-100);

    &:focus {
      --border-color: var(--error-red-100);
    }
  }

  &__container {
    display: grid;
  }

  &__label {
    color: var(--neutral-60);
    font: var(--font-caption);
  }

  &__error {
    color: var(--error-red-100);
    font: var(--font-caption);
    margin-top: 4px;
  }
}
</style>
