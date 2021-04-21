<template>
  <div class="wrapper-content">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          illo veniam quaerat repellat inventore accusantium dolorum? Dolor,
          dignissimos soluta. Repudiandae quae animi amet dicta tempora
          accusamus consectetur illum et magni.
        </p>
        <Intro title="Lorem" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          illo veniam quaerat repellat inventore accusantium dolorum? Dolor,
          dignissimos soluta. Repudiandae quae animi amet dicta tempora
          accusamus consectetur illum et magni.
        </p>
        <img src="@/assets/img/about.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          illo veniam quaerat repellat inventore accusantium dolorum? Dolor,
          dignissimos soluta. Repudiandae quae animi amet dicta tempora
          accusamus consectetur illum et magni.
        </p>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "About my blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About my SSR blog, with NUXT.js",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "About my SSR blog, with NUXT.js",
        },
        {
          hid: "og:About my blog",
          name: "description",
          content: "About my blog",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "site",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about {
  text-align: center;

  p {
    margin-bottom: 10px;
  }
}
</style>