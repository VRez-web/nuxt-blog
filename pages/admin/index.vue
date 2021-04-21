<template>
  <Posts-list :posts="postsLoaded" :admin="true" />
</template>

<script>
export default {
  layout: "admin",
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostLoaded;
    },
  },
};
</script>
<style>
</style>