<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <router-link :to="{ name: 'index' }" class="logo">blog</router-link>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.name">
              <nuxt-link :to="{ name: link.name }" class="navbar-link">{{
                link.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "index",
          title: "Home",
        },
        {
          name: "about",
          title: "About",
        },
           {
          name: "blog",
          title: "Blog",
        },
        {
          name:'admin',
          title:'Admin'

        }
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar-link {
  &.nuxt-link-exact-active {
    color:rgb(64, 79, 212);
  }
}
</style>