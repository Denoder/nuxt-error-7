<template>
  <div>
    <NuxtLoadingIndicator
      :color="'blue'"
      :duration="2000"
      :throttle="200"
    />
    <NuxtLayout>
      <NuxtErrorBoundary @error="errorLogger">
        <template #error="{ error }">
          <button @click="error = null">
            Clear
          </button>
        </template>
      </NuxtErrorBoundary>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  function errorLogger(error) {
    console.log('Error log in app.vue')
  }
</script>