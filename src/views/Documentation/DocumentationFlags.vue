<template>
  <article class="documentation-flags">
    <h1 class="documentation-flags__title">
      Flags
    </h1>

    <section>
      <h2 class="documentation-flags__subject">
        When to use
      </h2>

      <p class="documentation-flags__description">
        A flag communicates an important message to the user that is emphasized in relation to the rest of the page.
        It can be used as a popup to indicate an event that has just happened.
      </p>
    </section>

    <p class="documentation-flags__description">
      All flags require a title and a description.
    </p>

    <section class="documentation-flags__flags-section">
      <div class="documentation-flags__flag">
        <ds-flag
          title="Class schedule changed"
          description="Tomorrow's lecture will be given two days from today."
          variant="info"
        />
      </div>

      <div class="documentation-flags__flag">
        <ds-flag
          title="Your data has not been saved"
          description="Make sure your internet connection is up and running."
          variant="warning"
        />
      </div>

      <div class="documentation-flags__flag">
        <ds-flag
          title="Credit card declined"
          description="Make sure your credit card accepts online purchases and try a different payment method if necessary"
          variant="error"
        />
      </div>

      <div class="documentation-flags__flag">
        <ds-flag
          title="Payment received"
          description="You will receive an email confirming your purchase. Thank you!"
          variant="success"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import DsFlag from '@/components/DsFlag.vue'
</script>

<style lang="scss" scoped>
.documentation-flags {
  justify-content: start;
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-40);
    font: var(--font-title-1);
  }

  &__subject {
    color: var(--neutral-40);
    font: var(--font-caption);
    margin-top: 20px;
  }

  &__description {
    color: var(--neutral-40);
    font: var(--font-body);
    margin-top: 12px;
  }

  &__flags-section {
    margin-top: 40px;
  }

  &__flag {
    margin-top: 24px;
  }
}
</style>
