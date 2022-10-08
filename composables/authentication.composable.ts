/**
 * @file
 */

import { useNuxtApp } from '#app'

export const useAuthentication = () => {
  return useNuxtApp().$auth
}
