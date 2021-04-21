export default {
  target: "static",

  head: {
    title: "blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat",
        rel: "stylesheet"
      }
    ]
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },

  css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],

  plugins: ["~plugins/app-components.js"],

  components: true,

  buildModules: [],

  modules: [],

  build: {
    vendor: ["vue", "axios"]
  }
};
