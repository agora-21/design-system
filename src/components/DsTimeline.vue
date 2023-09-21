<template>
  <div class="ds-timeline">
    <template
      v-for="item in items"
      :key="item.name"
    >
      <div class="ds-timeline__title-container">
        <p class="ds-timeline__title">
          {{ item.name }}
        </p>
      </div>

      <div class="ds-timeline__marker" />

      <div class="ds-timeline__content-container">
        <slot
          :name="item.name"
          :content="item.content"
        />
      </div>

      <div class="ds-timeline__connector" />
    </template>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.ds-timeline {
  display: grid;
  grid-auto-rows: auto minmax(auto, 60px) minmax(auto, 60px);
  grid-template-columns: auto auto 1fr;

  &__title-container {
    padding: 0.3rem 16px;
    grid-row: span 3;
  }

  &__content-container {
    color: var(--neutral-60);
    padding: 0.3rem 16px;
    grid-row: span 3;
  }

  &__title {
    color: var(--neutral-60);
    text-align: end;
  }

  &__marker {
    --marker-color: var(--plum-100);

    background-color: transparent;
    border: 2px solid var(--marker-color);
    border-radius: 50%;
    display: grid;
    height: 2rem;
    place-content: center;
    width: 2rem;

    &:nth-child(8n + 6) {
      --marker-color: var(--indigo-100);
    }

    &:before {
      background-color: var(--marker-color);
      border-radius: 50%;
      content: "";
      height: 1rem;
      width: 1rem;
    }
  }

  &__connector {
    width: 2px;

    grid-row: span 2;
    justify-self: center;

    &:nth-child(8n + 4) {
      background: linear-gradient(180deg, var(--plum-100) 0%, var(--indigo-100) 100%);
    }

    &:nth-child(8n) {
      background: linear-gradient(180deg, var(--indigo-100) 0%, var(--plum-100) 100%);
    }

    &:last-of-type {
      display: none;
    }
  }
}
</style>
