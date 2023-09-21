<template>
  <div class="ds-radio__container">
    <input
      :value="value"
      :id="id"
      class="ds-radio"
      data-test="radio"
      type="radio"
      :checked="checked"
      @input="$emit('update:modelValue', value)"
    >

    <label
      :for="id"
      class="ds-radio__label"
      data-test="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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

  value: {
    type: [String, Number],
    required: true
  }
})

defineEmits(['update:modelValue'])

const checked = computed(() => props.modelValue === props.value)
</script>

<style lang="scss" scoped>
// Custom radio styling credited to Stephanie Eckles
// https://moderncss.dev/pure-css-custom-styled-radio-buttons/

.ds-radio {
  --border-color: var(--neutral-60);

  -webkit-appearance: none;
  appearance: none;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: grid;
  height: 1.2rem;
  margin: 0;
  place-content: center;
  width: 1.2rem;

  &::before {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--border-color);
  }

  &:checked::before {
    transform: scale(1);
  }

  &:checked {
    --border-color: var(--plum-100);
  }

  &:focus {
    border: 2px solid var(--border-color);
  }

  &__container {
    align-items: center;
    display: grid;
    gap: 8px;
    grid-template-columns: auto 1fr;
  }

  &__label {
    color: var(--neutral-60);
    font: var(--font-body);
  }
}
</style>
