<template>
  <article class="documentation-scrollbar">
    <h2 class="documentation-scrollbar__title">
      Scroll Bars
    </h2>

    <p class="documentation-scrollbar__description">
      This scrollbar can be used in any page, mobile or desktop.
    </p>

    <div class="documentation-scrollbar__example-container">
      <img
        src="/images/documentation/scroll_website_example.png"
        alt="An example website image"
        class="documentation-scrollbar__example"
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
.documentation-scrollbar {
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
    display: flex;
    margin-top: 56px;
    max-height: 600px;
    max-width: 500px;
    overflow-y: auto;
  }

  &__example {
    height: fit-content;
    object-fit: cover;
    width: 100%;
  }
}
</style>
