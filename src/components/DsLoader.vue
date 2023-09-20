<template>
  <div class="ds-loader">
    <div class="ds-loader__bar ds-loader__bar--1" />
    <div class="ds-loader__bar ds-loader__bar--2" />
    <div class="ds-loader__bar ds-loader__bar--3" />
    <div class="ds-loader__bar ds-loader__bar--4" />
    <div class="ds-loader__bar ds-loader__bar--5" />
  </div>
</template>

<style lang="scss" scoped>
// Credit to John Heiner @ https://codepen.io/johnheiner
@keyframes wave {
  0%, 40%, 100% {
    transform: scaleY(0.03);
    -webkit-transform: scaleY(0.03);
  }

  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
.ds-loader {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  &__bar {
    animation: wave 0.8s infinite ease-in-out;
    height: 60px;
    width: 12px;

    &--1 {
      background-color: var(--plum-100);
    }

    &--2 {
      animation-delay: -0.7s;
      background-color: var(--blue-100);
    }

    &--3 {
      animation-delay: -0.6s;
      background-color: var(--green-100);
    }

    &--4 {
      animation-delay: -0.5s;
      background-color: var(--chocolate-100);
    }

    &--5 {
      animation-delay: -0.4s;
      background-color: var(--indigo-100);
    }
  }
}
</style>
