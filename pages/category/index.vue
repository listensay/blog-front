<script setup>
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/store/category'
const categoryStore = useCategoryStore()
const { categorys } = storeToRefs(categoryStore)
await categoryStore.fetchGetCategory()
</script>

<template>
  <div class="category">
    <div class="p-8">
      <ul class="list">
        <li v-for="category in categorys" :key="category.category_id" class="item">
          <ArticleBoxImg :cover="category.category_img" :description="category.category_desc" :title="category.category_name"></ArticleBoxImg>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
