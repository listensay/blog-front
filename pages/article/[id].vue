<script setup>
import { storeToRefs } from 'pinia';
import useArticleStore from '~/store/article';

const route = useRoute()
const { id } = route.params
const articleStore = useArticleStore()
await articleStore.fetchGetArticleDetal(id)
const { articleContent } = storeToRefs(articleStore)
</script>

<template>
  <div class="article-detal">
    <div class="text-center mt-8">
      <h1 class="text-2xl">{{ articleContent.title }}</h1>
    </div>
    <div v-dompurify-html="articleContent.content" class="prose article-content p-8 text-sm text-gray-dark"></div>
  </div>
</template>

<style lang="less" scoped>

</style>
