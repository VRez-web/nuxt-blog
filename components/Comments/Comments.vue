<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.comments {
  .title {
    text-align: center;
  }
}
.comment {
  padding: 20px;
  background-color: #fff;
  text-align: center;
  width: 600px;
  margin: 0 auto 20px auto;
}
.name {
  font-size: 24px;
  color: rgb(84, 72, 241);
}
</style>