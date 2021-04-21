<template>
  <div class="wrapper-content">
    <Intro title="My posts:" />
    <Posts-list :posts="postsLoaded" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "My blog page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My SSR blog! With nuxt js",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "My SSR blog! With nuxt js",
        },
        {
          hid: "og:My blog page",
          name: "description",
          content: "My blog page",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "site",
        },
      ],
    };
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostLoaded;
    },
  },
};
</script>

<style>
</style>
