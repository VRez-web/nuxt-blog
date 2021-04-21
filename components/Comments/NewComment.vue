<template>
  <section class="new-comment">
    <div class="container">
      <Message v-if="messageTxt" :message="messageTxt" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <app-input v-model="comment.name">Name:</app-input>
        <app-text-area v-model="comment.text">Message: </app-text-area>
        <div class="controls">
          <app-button>Submit</app-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      messageTxt: null,
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addComment", {
          postId: this.postId,
          publish: false,
          ...this.comment,
        })
        .then(() => {
          this.messageTxt = "Submited";

          this.comment.name = "";
          this.comment.text = "";
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .controls {
    margin: 30px 0;
  }

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
}
</style>