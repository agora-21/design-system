<template>
  <article class="documentation-timelines">
    <h2 class="documentation-timelines__title">
      Timelines
    </h2>

    <section>
      <h3 class="documentation-timelines__subject">
        When to use
      </h3>

      <p class="documentation-timelines__description">
        A timeline is useful when there is a sense of progression of timetable in wharever it is the user is reading about.
      </p>
    </section>

    <section class="documentation-timelines__example-section">
      <h3 class="documentation-timelines__subject">
        Example timeline
      </h3>

      <div class="documentation-timelines__example">
        <ds-timeline :items="ITEMS">
          <template #javascript="{ content }">
            {{ content }}
          </template>

          <template #ruby-on-rails="{ content }">
            {{ content }}
          </template>

          <template #github="{ content }">
            {{ content }}
          </template>
        </ds-timeline>
      </div>
    </section>
  </article>
</template>

<script setup>
import DsTimeline from '@/components/DsTimeline.vue'

const ITEMS = [{
  id: 'javascript',
  title: 'Javascript',
  content: 'Javascript is awesome!'
}, {
  id: 'ruby-on-rails',
  title: 'Ruby on Rails',
  content: 'Ruby on Rails is awesome!'
}, {
  id: 'github',
  title: 'Github',
  content: 'Github is awesome!'
}, {
  id: 'github',
  title: 'Github',
  content: 'Github is awesome!'
}, {
  id: 'github',
  title: 'Github',
  content: 'Github is awesome!'
}, {
  id: 'github',
  title: 'Github',
  content: 'Github is awesome!'
}]
</script>

<style lang="scss" scoped>
.documentation-timelines {
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

  &__example-section {
    margin-top: 56px;
  }

  &__example {
    margin-top: 32px;
  }
}
</style>
