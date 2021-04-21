<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Page not found</p>
        <nuxt-link :to="{ name: 'index' }">Back to main page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.not-found {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70vh;
  }
}
</style>