// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon"
  ],
  srcDir: 'src',
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  ssr: true,
  nitro: {
    prerender:{
      routes: [
        "/",
        "/sobre",
        "/contato",
        "/produtos"
      ],
      ignore:[
        "/produtos/:id"
      ]
    }
  }
})
