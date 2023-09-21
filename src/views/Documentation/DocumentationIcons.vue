<template>
  <article class="documentation-icons">
    <h2 class="documentation-icons__title">
      Icons
    </h2>

    <p class="documentation-icons__description">
      Vue Unicons by <a href="https://iconscout.com/">IconScout</a>
    </p>

    <section>
      <h3 class="documentation-icons__subject">
        When to use
      </h3>

      <p class="documentation-icons__description">
        A icon helps communicate intent, usually going along with a descriptive text.
      </p>
    </section>

    <section>
      <h3 class="documentation-icons__subject">
        When not to use
      </h3>

      <p class="documentation-icons__description">
        We should avoid using icons without accompanying text or more than one icon in the same context.
      </p>
    </section>

    <section class="documentation-icons__icons-section">
      <header>
        <h3 class="documentation-icons__subject">
          All icons
        </h3>

        <div class="documentation-icons__search">
          <ds-input
            v-model="search"
            id="search-icon"
            label="Search"
            placeholder="Search for an icon here"
          />
        </div>
      </header>

      <div class="documentation-icons__icons">
        <div
          v-for="name in searchedIconNames"
          :key="name"
          :title="name"
          class="documentation-icons__icon"
        >
          <ds-icon :name="name" />

          <p class="documentation-icons__icon-name">
            {{ name }}
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'

import iconNames from '@/constants/icons'

import DsIcon from '@/components/DsIcon.vue'
import DsInput from '@/components/DsInput.vue'

const search = ref('')

const searchedIconNames = computed(
  () => iconNames.filter(
    (name) => name.includes(search.value)
  )
)
</script>

<style lang="scss" scoped>
.documentation-icons {
  justify-content: start;
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-60);
    font: var(--font-title-1);
  }

  &__subject {
    color: var(--neutral-60);
    font: var(--font-caption);
    margin-top: 20px;
  }

  &__description {
    color: var(--neutral-60);
    font: var(--font-body);
    margin-top: 12px;
  }

  &__icons-section {
    margin-top: 40px;
  }

  &__search {
    display: grid;
    grid-template-columns: minmax(auto, 400px);
    margin-top: 16px;
  }

  &__icons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 32px;
  }

  &__icon {
    align-items: center;
    border-radius: 8px;
    color: var(--neutral-60);
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    padding: 12px;

    &:hover {
      background: linear-gradient(50deg, var(--plum-140) 0%, var(--indigo-140) 100%);
      box-shadow: var(--shadow-2);
    }
  }

  &__icon-name {
    color: var(--neutral-80);
    font: var(--font-caption);
  }
}
</style>
