<template>
  <svg
    v-bind="$attrs"
    v-html="iconHtml"
    :height="24"
    :width="24"
    xmlns="http://www.w3.org/2000/svg"
    view-box="0 0 24 24"
    fill="currentColor"
  >
  </svg>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import iconNames from '@/constants/icons'

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (name) => iconNames.includes(name)
  }
})

const iconImports = import.meta.glob('@/assets/icons/*.svg', { as: 'raw' })
const iconHtml = ref('')

onMounted(async () => {
  iconHtml.value = await iconImports[`/src/assets/icons/${props.name}.svg`]()
})
</script>
