// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: ["~/components"],
  css: ['@/public//assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
