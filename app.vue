<script setup>
import useHomeStore from '@/store/home'
const homeStore = useHomeStore()
homeStore.fetchArticle()
homeStore.fetchGetUserInfo()
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
