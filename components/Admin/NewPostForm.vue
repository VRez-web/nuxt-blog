<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <app-input v-model="post.title">Title:</app-input>
        <app-input v-model="post.descr">Descr:</app-input>
        <app-input v-model="post.img">Img link:</app-input>
        <app-text-area v-model="post.content">Content:</app-text-area>

        <div class="controls">
          <app-button @click="onSubmit">Save</app-button>
          <app-button class="btnDanger" @click="cancel">Cancel</app-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
    },
  },
  data() {
    return {
      post: this.postEdit
        ? {
            ...this.postEdit,
          }
        : {
            title: "",
            descr: "",
            img: "",
            content: "",
          },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
    cancel() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin-top: 20px;
}
</style>