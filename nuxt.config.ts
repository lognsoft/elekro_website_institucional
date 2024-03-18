// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
    "nuxt-aos",
    'nuxt-swiper'
  ],
  swiper:{
    modules: [
      'navigation',
      'pagination',
      'autoplay',
      'effect-creative'
    ],
  },
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
      
    }
  },
  css:[
    "animate.css/animate.min.css",
  ],
  colorMode:{
    preference: "light",
    classSuffix: ''
  }
})
