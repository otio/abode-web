import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
// export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  publicRuntimeConfig: {},
  sanity: {
    projectId: process.env.SANITY_PUBLIC_PROJECT_ID,
    dataset: process.env.SANITY_PUBLIC_DATASET,
    apiVersion: '2021-10-21',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'abode-web',
    htmlAttrs: {
      lang: 'en',
      class: `overflow-x-hidden`,
    },
    bodyAttrs: {
      class: `overflow-x-hidden`,
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1 minimum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // PULLS in 'A c m e - G o t h i c' font style
      { rel: 'stylesheet', href: 'https://use.typekit.net/qne6cbm.css' },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/ahoy.js@0.3.4/dist/ahoy.min.js',
        async: true,
        defer: true,
        // body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'virtual:windi-base.css',
    `~/assets/main.css`,
    // `~/assets/main.scss`
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/global', '~/components/home'],
  },
  generate: {
    fallback: true,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // '@nuxtjs/tailwindcss',
    'nuxt-windicss',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/sanity',
    '@braid/vue-formulate/nuxt',
    // '@nuxtjs/sanity/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
    // '@nuxtjs/cloudinary',
  ],
  // googleFonts: {
  //   // preload: true,
  //   // useStylesheet: false,
  //   download: true,
  //   inject: true,
  //   overwriting: false,
  //   // outputDir: this.options.dir.assets,
  //   fontsPath: '~assets/fonts',
  //   families: {
  //     Roboto: true,
  //   },
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    secure: true,
    useComponent: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  // content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
})