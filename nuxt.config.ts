import { Head } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   typeCheck: true
  // },
  app:{
    head: {
      meta:[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link:[
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=AW-16634268572",
          async: true,
        },
        {
          type: "text/javascript",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16634268572');
          `
        },
        {
          type: "text/javascript",
          innerHTML: `
            gtag('event', 'conversion', {
              'send_to': 'AW-16634268572/ILXQCJez0N4ZEJyX6_s9',
              'value': 15.0,
              'currency': 'BRL',
              'transaction_id': ''
            });
          `
        }
        // {
        //   src: 'https://www.googletagmanager.com/gtag/js?id=G-0SE5FCCKT2',
        //   async: true
        // },
        // {
        //   type: 'text/javascript',
        //   innerHTML: `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'G-0SE5FCCKT2');
        //   `,
        // }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },

  devtools: { enabled: true },

  modules:[
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
    "nuxt-aos",
    'nuxt-swiper',
    "@nuxt/image",
    "nuxt-gtag",
  ],

  swiper:{
    modules: [
      'navigation',
      'pagination',
      'autoplay',
      'effect-creative',
      'parallax'
    ],
  },

  plugins:[
    "~/plugins/axios",
  ],

  srcDir: 'src',

  tailwindcss: {
    exposeConfig: true,
    viewer: false,
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
  },

  compatibilityDate: '2025-01-04',
})