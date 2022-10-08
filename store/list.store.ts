/**
 * @file
 */

import { navigateTo, useFetch } from '#app'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useHttpClient } from '~/composables/http-client.composable'


interface IStoreData {
  [key: string]: {
    items: Array<any>,
  }
}

export const useListStore = defineStore('list', () => {
  const $http = useHttpClient()

  let data = ref<IStoreData>({})

  const getListByType = computed(() => 
    (element: string) => data.value[element] ? data.value[element].items : []
  )

  const initiateList = (payload) => {
    data.value[payload.element] = {
      items: [],
    }
  }

  const updateList = (payload) => {
    const uri = data.value[payload.element].uri
    useAsyncData(payload.element, () => 
      $http.$get({
        url: `/api/list`
      })
    )
      .then((res: any) => {
        data.value[payload.element]['items'] = res.data.value.items
      })
      .catch((error: any) => {
        // console.log(error)
      })
  }

  return {
    data,
    getListByType,
    initiateList,
    updateList
  }
})
