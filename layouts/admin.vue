<template>
  <no-ssr>
    <div class="wrapper">
      <app-header />
      <div class="wrapper-content">
        <Intro title="Admin page">
          <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite"
            >new-post</nuxt-link
          >
          <nuxt-link to="/admin/comments" class="link linkWhite"
            >comments</nuxt-link
          >
          <span class="link linkWhite" @click="logoutUser">Logout</span>
        </Intro>
        <Nuxt />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import appHeader from "@/components/App/AppHeader.vue";
export default {
  components: { appHeader },
  middleware: ["auth"],

  methods: {
    logoutUser() {
      this.$store
        .dispatch("logoutUser")
        .then(() => this.$router.push("/admin/auth"));
    },
  },
};
</script>
<style>
</style>
