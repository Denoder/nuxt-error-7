/**
 * @file
 */

import { useNuxtApp } from '#app'

export const useHttpClient = () => {
  return useNuxtApp().$http
}
