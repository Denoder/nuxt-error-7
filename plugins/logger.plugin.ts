/**
 * @file
 */

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.log('[log error]', error, instance, info)
  }

  // Only work during development, is ignored in production mode.
  nuxtApp.vueApp.config.warnHandler = (msg, instance, trace) => {
    console.log('[log warn]', msg, instance, trace)
  }
}) 
