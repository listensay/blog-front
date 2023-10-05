<script setup>
import { storeToRefs } from 'pinia';
import useArticleStore from '~/store/article';

const route = useRoute()
const { id } = route.params
const articleStore = useArticleStore()
articleStore.fetchGetArticleDetal(id)

const { articleContent } = storeToRefs(articleStore)
</script>

<template>
  <div class="article-detal">
    <Article :article="{ ...articleContent }"></Article>
  </div>
</template>

<style lang="less" scoped>

</style>
