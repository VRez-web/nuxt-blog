<template>
  <div class="wrapper-content">
    <promo />
    <Intro title="My last posts:" />
    <Posts-list :posts="postsLoaded" />
    <contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo.vue";
import contacts from "@/components/Contacts.vue";
export default {
  components: {
    promo,
    contacts,
  },
  head() {
    return {
      title: "My SSR blog! With nuxt js",
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
          hid: "og:My SSR blog! With nuxt js",
          name: "description",
          content: "My SSR blog! With nuxt js",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: 'site',
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
