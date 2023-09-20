<template>
  <article class="documentation-card-layouts">
    <h2 class="documentation-card-layouts__title">
      Card Layouts
    </h2>

    <p class="documentation-card-layouts__description">
      Extensive examples of card layouts.
    </p>

    <section>
      <h3 class="documentation-card-layouts__subject">
        When to use
      </h3>

      <p class="documentation-card-layouts__description">
        To communicate an isolated block of information. Can be used individually or grouped with others in a grid layout.
      </p>
    </section>

    <section>
      <h3 class="documentation-card-layouts__subject">
        When not to use
      </h3>

      <p class="documentation-card-layouts__description">
        When the information contained in the card is be large enough to be its own article or makes the card feel overwhelmed.
      </p>
    </section>

    <section>
      <h3 class="documentation-card-layouts__subtitle">
        Examples
      </h3>

      <div>
        <h4 class="documentation-card-layouts__subject">
          With a very light plum/indigo background
        </h4>

        <div class="card card--plum-indigo">
          <h5 class="card__title">
            Javascript
          </h5>

          <section>
            <h6 class="card__subject">
              What's so awesome about it?
            </h6>

            <ul>
              <li class="card__description">
                Can be run outside of web browsers with Node.js, etc.
              </li>

              <li class="card__description">
                Has popular frameworks like React and Vue.js
              </li>

              <li class="card__description">
                Used in both front-end and back-end
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div>
        <h4 class="documentation-card-layouts__subject">
          With a very light blue/green background
        </h4>

        <div class="card card--blue-green">
          <ds-tag
            color="green"
            variant="filled"
          >
            Innovation
          </ds-tag>

          <h5 class="card__title">
            What's cool in 2023 tech?
          </h5>

          <p class="card__description">
            2023 has been the best year for Vite so far. Its easy to find it in the foundations of our most important day-to-day libraries and frameworks.
          </p>
        </div>
      </div>

      <div>
        <h4 class="documentation-card-layouts__subject">
          With a very light chocolate/indigo background
        </h4>

        <div class="card card--chocolate-plum">
          <ds-tag
            color="chocolate"
            variant="filled"
          >
            Innovation
          </ds-tag>

          <h5 class="card__title">
            What's cool in 2023 tech?
          </h5>

          <p class="card__description">
            2023 has been the best year for Vite so far. Its easy to find it in the foundations of our most important day-to-day libraries and frameworks.
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import DsTag from '@/components/DsTag.vue'
</script>

<style lang="scss" scoped>
.documentation-card-layouts {
  padding: var(--padding-3-vertical);

  &__title {
    color: var(--neutral-60);
    font: var(--font-title-1);
  }

  &__subtitle {
    color: var(--neutral-60);
    font: var(--font-title-3);
    margin-top: 42px;
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
}

@property --background-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 50deg;
}

.card {
  align-items: flex-start;
  border-radius: var(--border-radius-4);
  box-shadow: var(--shadow-6);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 18px;
  padding: 24px 32px;
  min-height: 300px;
  max-width: 400px;

  &__title {
    color: var(--neutral-60);
    font: var(--font-title-2);

    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &__subject {
    color: var(--neutral-60);
    font: var(--font-caption);
    margin-top: 18px;
  }

  &__description {
    color: var(--neutral-60);
    font: var(--font-body);
    margin-top: 12px;
  }

  &--plum-indigo {
    --background-angle: 50deg;

    background: linear-gradient(var(--background-angle), var(--plum-130) 0%, var(--indigo-130) 100%);
    transition:--background-angle 0.3s;

    &:hover {
      --background-angle: 230deg;
    }
  }

  &--blue-green {
    background: linear-gradient(50deg, var(--blue-130) 0%, var(--green-130) 100%);
  }

  &--chocolate-plum {
    background: linear-gradient(50deg, var(--chocolate-130) 0%, var(--plum-130) 100%);
  }
}
</style>
