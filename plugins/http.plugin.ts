/**
 * @file
 */

import { defineNuxtPlugin, navigateTo } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  var requests = 0

  const start = (config) => {
    requests++
    setTimeout(() => nuxtApp.callHook('page:start'), 500)

    return config
  }

  const finish = (response) => {
    requests--

    if (requests === 0) {
      setTimeout(() => nuxtApp.callHook('page:finish') , 0)
    }
  
    return response
  }

  const error = (error) => {
    requests--

    if (requests === 0) {
      setTimeout(() => nuxtApp.callHook('page:finish'), 0)
    }
  
    return error
  }

  nuxtApp.$http.onRequest(start)
  nuxtApp.$http.onResponse(finish)
  nuxtApp.$http.onRequestError(error)
  nuxtApp.$http.onResponseError(error)
  nuxtApp.$http.onRequest((config) => {
    // if (nuxtApp.$i18n.locale) {
    //   config.headers['Accept-Language'] = nuxtApp.$i18n.locale
    // }

    return config
  })
  nuxtApp.$http.onResponseError(async (error) => {
    // console.log('on_error', 'error', error)

    if (error.response && error.response.status === 401) {
      if (nuxtApp.$auth.loggedIn) {
        return await nuxtApp.$auth.logout()
          .then(() => {
            return navigateTo({ path: nuxtApp.$auth.options.redirect.login })
          })
          .catch((err: any) => {
            // console.log('logout', 'error', err)
          })
      }
    }

    return Promise.reject(error)
  })
}) 
