export default {
  head: {
    title: 'Tonality',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/styles/main.scss'
  ],

  plugins: [
    {
      src: '@/plugins/modal.client.js', 
      mode: 'client'
    }
  ],

  server: {
    port: 3001
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],

  axios: {
    debug: true,
    // baseUrl: "http://localhost:8080"
  },

  proxy: {
    '/api': {
      target: 'http://localhost:8080/',
      pathRewrite: {
        '^/api' : '/'
        }
      }
  },

  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },

  auth: {
    strategies: {
      cookie: {
        token: {
          property: "token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: {
            url: "api/login",
            method: "post",
          },
          logout: false,
          user: false,
        },
      },
    }
  },

  router: {
    middleware: ['auth']
  },

  build: {
  }
}
