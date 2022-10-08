/**
 * @file
 */

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'example-nuxt',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  auth: {
    cookie: {
      options: {
        expires: 5
      }
    },
    // enableMiddleware: false,
    localStorage: false,
    // plugins: [
    //   '~/plugins/http.plugin.mjs',
    // ],
    strategies: {
      local: {
        // autoLogout: false,
        endpoints: {
          login: {
            method: 'post',
            url: '/api/auth/login'
          },
          logout: {
            method: 'get',
            url: '/api/auth/logout'
          },
          refresh: {
            url: '/api/auth/refresh',
            method: 'post'
          },
          user: {
            method: 'get',
            url: '/api/auth/me'
          }
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        token: {
          global: true,
          maxAge: 1800,
          property: 'token',
          required: true
        },
        scheme: 'refresh',
        // scheme: 'local',
        user: {
          property: false
        }
      }
    },
    redirect: {
      callback: '/login',
      home: '/',
      login: '/login',
      logout: '/logout'
    },
  },

  // Auto import components
  components: {
    global: true,
    dirs: ['~/components']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  http: {
    // clientTimeout: 5000,
    // credentials: true,
    debug: false, // process.env.NODE_ENV !== 'production',
    // proxy: true
    // retry: false,
    // serverTimeout: 2000,
    // useConflict: true
  },

  // Disable auto import: https://github.com/nuxt/framework/discussions/2271
  // hooks: {
  //   'autoImports:sources': (sources) => sources.splice(0, sources.length),
  //   'autoImports:dirs': (dirs) => dirs.splice(0, dirs.length),
  //   'components:dirs': (dirs) => dirs.splice(0, dirs.length)
  // },

  // i18n: {
  //   defaultLocale: 'en',
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected'
  //     // onlyOnRoot: true
  //   },
  //   langDir: 'locales',
  //   // lazy: true,
  //   locales: [
  //     {
  //       code: 'en',
  //       file: 'en.json',
  //       iso: 'en-US',
  //       name: 'English'
  //     },
  //     {
  //       code: 'ro',
  //       file: 'ro.json',
  //       iso: 'ro-Ro',
  //       name: 'Română'
  //     }
  //   ],
  //   noPrefixDefaultLocale: false,
  //   parsePages: false,
  //   // pages: {
  //   //   about: {
  //   //     en: '/about-us',
  //   //     ro: '/despre-noi'
  //   //   }
  //   // },
  //   seo: false,
  //   strategy: 'prefix',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     // silentFallbackWarn: true
  //   },
  //   vueI18nLoader: true
  // },

  modules: [
    // 'nuxt-full-static',
    // "@nuxtjs/i18n",
    '@nuxtjs-alt/auth',
    '@nuxtjs-alt/http',
    '@nuxt/image-edge',
    '@pinia/nuxt'
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  render: {
    // Adds an async attribute to <script> tags for Nuxt bundles, enabling
    // them to be fetched in parallel to parsing: 
    // https://nuxtjs.org/docs/configuration-glossary/configuration-render/#asyncscripts
    // asyncScripts: true,
    // Render pure HTML without JS: https://nuxtjs.org/docs/configuration-glossary/configuration-render/#injectscripts
    // injectScripts: false,
    csp: true
  },

  router: {
    trailingSlash: false
  },

  runtimeConfig: {
    apiSecret: 'secret_test'
  },

  ssr: true,

  target: 'static',

  telemetry: false
})
