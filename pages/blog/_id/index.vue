<template>
  <div class="wrapper-content">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment :postId="$route.params.id" />
  </div>
</template>

<script>
import post from "@/components/Blog/Post.vue";
import newComment from "@/components/Comments/NewComment.vue";
import comments from "@/components/Comments/Comments.vue";
import axios from "axios";
export default {
  components: {
    post,
    comments,
    newComment,
  },
  head() {
    let title = this.post.title,
      descr = this.post.descr,
      img = this.post.img,
      type = "article";
    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: title },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:title", name: "og:title", content: descr },
        { hid: "og:type", name: "og:type", content: type },
        { hid: "og:img", name: "og:img", content: img },
      ],
    };
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-b0cda-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`
      ),
      axios.get(
        `https://blog-nuxt-b0cda-default-rtdb.europe-west1.firebasedatabase.app/comments.json`
      ),
    ]);
    let commentsArrayRes = Object.values(comments.data).filter(
      (comment) => comment.postId === context.params.id && comment.publish
    );

    return {
      post: post.data,
      comments: commentsArrayRes,
    };
  },
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  &-header {
    margin-bottom: 30px;

    img {
      max-width: 400px;
      margin-bottom: 15px;
    }

    p {
      color: #999;
    }
  }

  &-body {
    text-align: left;
  }
}
</style>