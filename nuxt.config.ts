// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
    "nuxt-swiper",
    "nuxt-primevue",
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
  swiper:{
    
  },
  ssr: true,
  nitro: {
    prerender:{
      routes: [
        "/",
        "/sobre",
        "/contato",
        "/produtos",
        "/elekro-landing-page"
      ],
      ignore:[
        "/produtos/:id"
      ]
    }
  },
  css:[
    "animate.css/animate.min.css"
  ],
  colorMode:{
    preference: "light",
    classSuffix: ''
  }
})