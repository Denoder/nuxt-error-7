<template>
  <div>
    <div
      v-for="item in list.data"
      :key='item.id'
    >
     {{ item.item }} [ok]
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { useListStore } from '~/store/list.store'

definePageMeta({
  title: 'Home page'
})

const listStore = useListStore()

const $i18n = useTranslator()

const list = computed<IList>(() => {
  return {
    data: listStore.getListByType('test')
  }
})

const update = (): Promise<void> => {
  listStore.updateList({
    element: 'test'
  })
}

onMounted (async () => {
  await listStore.initiateList({
    element: 'test',
  })

  update()
})
</script>

<style>
</style>
