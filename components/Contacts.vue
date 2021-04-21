<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <Message v-if="messageTxt" :message="messageTxt"/>
      <form @submit.prevent="onSubmit" class="contact-form">
        <app-input v-model="user.name">Name:</app-input>
        <app-input v-model="user.email" type="email">Email:</app-input>
        <app-text-area v-model="user.text"> Message:</app-text-area>
        <div class="controls">
          <app-button class="btnWhite"> Submit</app-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      messageTxt: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.messageTxt = 'Submited'

      this.user.name= ''
      this.user.email = ''
      this.user.text = ''
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: rgb(80, 95, 226);
  color: #fff;
  .title {
    color: #fff;
  }
  .controls {
    margin: 30px 0;
  }

  &-form {
    max-width: 600px;
    margin: 30px auto;
  }
}
</style>