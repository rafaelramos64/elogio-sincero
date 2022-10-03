import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Mambee',
    title: 'Elogio Sincero',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    // Icon Font Stylesheet
    link: [{ href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css', rel: 'stylesheet' }],
    link: [{ href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css', rel: 'stylesheet' }],

      // Libraries Stylesheet
    link: [{ href: 'assets/lib/animate/animate.min.css', rel: 'stylesheet' }],
    link: [{ href: 'assets/lib/owlcarousel/assets/owl.carousel.min.css', rel: 'stylesheet' }],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo-mambee.png' }],
    
    // Google Web Fonts
    link: [{ rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [{ href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap', rel: 'stylesheet' }],

    
    // JavaScript Libraries    
    script: [{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', body: true }],
    script: [{ src: 'https://code.jquery.com/jquery-3.4.1.min.js', body: true }],
    script: [{ src: 'assets/lib/wow/wow.min.js', body: true }],
    script: [{ src: 'assets/lib/waypoints/waypoints.min.js', body: true }],
    script: [{ src: 'assets/lib/parallax/parallax.min.js', body: true }],
    script: [{ src: 'assets/lib/owlcarousel/owl.carousel.min.js', body: true }],
    script: [{ src: 'assets/lib/easing/easing.min.js', body: true }],

    // Template Javascript
    script: [{ src: 'assets/js/main.js', body: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/app'
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/sass/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
