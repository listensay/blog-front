<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/store/home'
const homeStore = useHomeStore()
const { articles } = storeToRefs(homeStore)
await homeStore.fetchUserProfile()
</script>

<template>
  <div class="home">
    <template
      v-for="article in articles"
      :key="article.post_id"
    >
      <Article :article="article"></Article>
    </template>

  </div>
</template>

<style lang="less" scoped>

</style>
