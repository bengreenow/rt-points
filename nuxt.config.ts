// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "radix-vue/nuxt", "@nuxt/icon"],
  runtimeConfig: {
    pgUrl: "<set in secrets>",
  },
  ssr: false,
  nitro: {
    experimental: {
      websocket: true,
    },
  },
});
