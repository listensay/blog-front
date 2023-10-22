<script setup>
defineProps({
  title: { type: String, default: '标题' },
  description: { type:String, default: '描述' },
  cover: { type: String, required: true }
})

const baseUrl = useRuntimeConfig().public.baseUrl
</script>

<template>
  <div class="article-basic">
    <div class="article-basic my-4 flex items-center rounded-sm border-[1px] border-gray-light-50">
      <div class="cover mr-4">
        <img class="rounded-l-sm " :src="baseUrl + cover" :alt="title" width="100">
      </div>
      <div class="detal">
        <div class="title mb-1 text-gray-dark">{{ title }}</div>
        <div class="desc text-gray text-sm">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
