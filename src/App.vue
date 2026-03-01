<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayouts.vue'
import { health } from '@/api/mainController.ts'
import { useLoginUserStore } from './stores/useLoginUserStore'

health().then((res) => {
  console.log(res)
})
const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()
{
  {
    JSON.stringify(loginUserStore.loginUser)
  }
}
</script>
<style></style>
