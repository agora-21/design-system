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

    <section>
      <h3 class="documentation-icons__subject">
        All icons
      </h3>

      <div class="documentation-icons__all-icons--simplified">
        <div
          v-for="name in iconNames"
          :key="name"
          :title="name"
          class="documentation-icons__icon"
        >
          <ds-icon :name="name" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import DsIcon from '@/components/DsIcon.vue'
import iconNames from '@/constants/icons'
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

  &__all-icons {
    &--simplified {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    }
  }

  &__icon {
    color: var(--neutral-60);
    padding: 12px;
  }
}
</style>
