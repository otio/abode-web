export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'abode-web',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: `w-screen overflow-x-hidden`,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // PULLS in 'A c m e - G o t h i c' font style
      { rel: 'stylesheet', href: 'https://use.typekit.net/qne6cbm.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // `~/assets/main.css`,
    // `~/assets/main.scss`
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/global',
      '~/components/hero',
      '~/components/home',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // '@nuxtjs/tailwindcss',
    'nuxt-windicss',
    // '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_SPACE_TOKEN,
        cacheProvider: 'memory',
      },
    ],
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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
