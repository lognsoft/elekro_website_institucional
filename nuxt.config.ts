// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
    "nuxt-aos",
    'vue3-carousel-nuxt',
  ],
  plugins:[
    "~/plugins/axios",
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
        "/elekro-landing-page",
        "/elekro-one-plus"
      ]
    }
  },
  css:[
    "animate.css/animate.min.css",
    "public/font.css"
  ],
  colorMode:{
    preference: "light",
    classSuffix: ''
  }
})
