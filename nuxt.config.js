import colors from 'vuetify/es5/util/colors';
import process from 'process';
import { createProxyMiddleware } from 'http-proxy-middleware';
const environment = process.env.NODE_ENV || 'development';
const config = require(`./config/${environment}.js`)

export default {
  head: {
    titleTemplate: 'Mati leads',
    title: 'Plataforma de pelis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/base.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  manifest: {
    theme_color: '#5335EC'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  env: {
    apiURL: config.apiURL,
    apiKey: config.apiKey,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  serverMiddleware: [
    // Proxy API requests
    {
      path: '/api',
      handler: createProxyMiddleware('/api', {
        target: 'https://coterranea.nocrm.io',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api/v2',
        },
        secure: false,
      }),
    },
  ],
  /*
  proxy: {
    '/api': {
      target: 'https://coterranea.nocrm.io', 
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: false,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Content-Type, Accept',
        'Access-Control-Allow-Credentials': 'true',
      },
    },
  },
  */
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.BASE_URL
  }, 
  /*
  ** vuetify module configuration
  */
  vuetify: {
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
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  target: 'static',
  build: {
    postcss: null,
    publicPath: '/dist/'
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    timing: false
  }
};
