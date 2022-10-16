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
  ],

  server: {
    port: 3001
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        solid: [
          'faPlay',
          'faBackwardStep',
          'faForwardStep',
          'faMusic',
          'faVolumeHigh',
          'faPause',
          'faVolumeLow',
          'faVolumeOff',
          'faVolumeXmark',
          'faMagnifyingGlass',
          'faHouse',
          'faGear',
          'faCalendar',
          'faUser',
          'faMessage',
          'faXmark',
          'faPaperPlane',
          'faStar',
          'faLocationPin',
          'faNewspaper'
        ],
      }
    }]
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],

  axios: {
    debug: true,
    credentials: true,
    baseUrl: "http://localhost:8080"
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
    apiSecret: 'hello'
  },

  auth: {
    strategies: {
      cookie: {
        token: {
          property: "token",
          required: true,
          global: true,
          type: "Bearer",
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: {
            url: "http://localhost:8080/login",
            method: "post",
          },
          logout: false,
          user: false,
        },
        options: {
          secure: true
        }
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  },

  router: {
    // middleware: ['auth']
  },

  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      },
      file: {esModule: false}
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
