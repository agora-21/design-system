<template>
  <article class="documentation-side-bar">
    <h2 class="documentation-side-bar__title">
      Scroll Bars
    </h2>

    <p class="documentation-side-bar__description">
      This scroll bar can be used in any desktop page.
    </p>

    <p class="documentation-side-bar__description">
      The scrollbar should be fixed, have a 320px width and fill the visible body from top to bottom.
    </p>

    <p class="documentation-side-bar__description">
      If there is a title, the bottom margin between it and the next content should be 32px.
    </p>

    <p class="documentation-side-bar__description">
      The gap between links should be 6px.
    </p>

    <div class="documentation-side-bar__example-container">
      <ds-side-bar>
        <h3 class="documentation-side-bar__example-title">
          Example Side Bar
        </h3>

        <section class="documentation-side-bar__example-section">
          <h4 class="documentation-side-bar__example-section-caption">
            Guidelines
          </h4>

          <ds-side-bar-link :route="{ name: 'DocumentationColors' }">
            Colors
          </ds-side-bar-link>
        </section>

        <section class="documentation-side-bar__example-section">
          <h4 class="documentation-side-bar__example-section-caption">
            Components
          </h4>

          <ds-side-bar-link :route="{ name: 'DocumentationButtons' }">
            Buttons
          </ds-side-bar-link>

          <ds-side-bar-link :route="{ name: 'DocumentationFlags' }">
            Flags
          </ds-side-bar-link>
        </section>
      </ds-side-bar>

      <div class="documentation-side-bar__example-content">
        <img
          src="/images/documentation/scroll_website_example.png"
          alt="An example website image"
          class="documentation-side-bar__example"
        >
      </div>
    </div>
  </article>
</template>

<script setup>
import DsSideBar from '@/components/DsSideBar.vue'
import DsSideBarLink from '@/components/DsSideBarLink.vue';
</script>

<style lang="scss" scoped>
.documentation-side-bar {
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-60);
    font: var(--font-title-1);
  }

  &__description {
    color: var(--neutral-60);
    font: var(--font-body);
    margin-top: 12px;
  }

  &__example-container {
    box-shadow: var(--shadow-6);
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: 100%;
    margin-top: 56px;
    max-height: 600px;
    max-width: 800px;
    overflow-y: auto;
  }

  &__example-content {
    display: grid;
    overflow-y: auto;
  }

  &__example {
    width: 100%;
  }

  &__example-title {
    font: var(--font-title-2);
  }

  &__example-section {
    align-items: start;
    align-content: start;
    display: grid;
    gap: 6px;
    justify-items: start;
    margin-top: 12px;

    &:first-of-type {
      margin-top: 32px;
    }
  }

  &__example-section-caption {
    font: var(--font-caption);
  }
}
</style>
