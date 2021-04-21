<template>
  <comment-table :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td>
          <span>{{ comment.name }}</span>
        </td>
        <td>
          <span>{{ comment.text }}</span>
        </td>
        <td>
          <span v-if="comment.publish" class="status true">Publish</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td>
          <span @click="changeComment(comment)" class="link"
            >Change status</span
          >
        </td>
        <td>
          <span @click="deleteComment(comment.id)" class="link">Delete</span>
        </td>
      </tr>
    </tbody>
  </comment-table>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable.vue";
import axios from "axios";
export default {
  components: {
    commentTable,
  },
  layout: "admin",
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    loadComments() {
      axios
        .get(
          `https://blog-nuxt-b0cda-default-rtdb.europe-west1.firebasedatabase.app/comments.json`
        )
        .then((res) => {
          let commentsArray = [];
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });
          this.comments = commentsArray;
        });
    },
    changeComment(comment) {
      comment.publish = !comment.publish;
      axios.put(
        `https://blog-nuxt-b0cda-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment(id) {
      axios.delete(
        `https://blog-nuxt-b0cda-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`
      )
      .then((res)=>this.loadComments())
    },
  },
  mounted() {
    this.loadComments();
  },
};
</script>

<style>
</style>