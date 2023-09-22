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
          @click="onClickIcon(name)"
        >
          <ds-icon :name="name" />

          <h4 class="documentation-icons__icon-name">
            {{ name }}
          </h4>
        </div>
      </div>
    </section>

    <ds-notification
      v-if="showCopiedToClipboardNotification"
      label="Icon copied to clipboard."
    />
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'

import iconNames from '@/constants/icons'

import DsIcon from '@/components/DsIcon.vue'
import DsInput from '@/components/DsInput.vue'
import DsNotification from '@/components/DsNotification.vue'

const NOTIFICATION_TIME_IN_MILISECONDS = 4000

const search = ref('')
const showCopiedToClipboardNotification = ref(false)

const searchedIconNames = computed(
  () => iconNames.filter(
    (name) => name.includes(search.value)
  )
)

const onClickIcon = async (icon) => {
  showCopiedToClipboardNotification.value = true

  navigator.clipboard.writeText(icon)
  await new Promise((resolve) => setTimeout(resolve, NOTIFICATION_TIME_IN_MILISECONDS))

  showCopiedToClipboardNotification.value = false
}
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
    cursor: pointer;
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

    &:active {
      background: linear-gradient(50deg, var(--plum-120) 0%, var(--indigo-120) 100%);
    }
  }

  &__icon-name {
    color: var(--neutral-80);
    font: var(--font-caption);
  }
}
</style>
