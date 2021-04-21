<template>
  <new-post-form @submit="onSubmit" :postEdit="post" />
</template>

<script>
import axios from "axios";
import newPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: {
    newPostForm,
  },
  layout: "admin",
  asyncData(context) {
    return axios
      .get(
        `https://blog-nuxt-b0cda-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`
      )
      .then((res) => {
        return {
          post: { ...res.data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },
  data() {
    return {};
  },
  methods: {
    onSubmit(post) {
      this.$store
        .dispatch("editPost", post)
        .then(() => this.$router.push("/admin"));
    },
  },
};
</script>

<style>
</style>