<script setup>
const props = defineProps({
  article: { type: Object, default: () => ({}) }
})

const { article } = toRefs(props)
const dateFormat = (date) => {
  return useDayjs(date).format('MM月DD日 HH:MM')
}

const baseUrl = useRuntimeConfig().public.baseUrl
</script>

<template>
  <div class="p-8">
    <article class="article">
      <div class="article-head">
        <div class="article-author flex justify-between">
          <div class="left flex">
            <div class="article-author-avatar mr-2">
              <img class="rounded-md" :src="baseUrl + article?.category_img" alt="avatar">
            </div>
            <div class="article-author-profile flex flex-col justify-between">
              <div class="name text-gray-dark">{{ article?.nickname }}</div>
              <div class="desc text-sm text-gray">{{ article?.title }}</div>
            </div>
          </div>
          <div class="right">
            <div class="time text-gray text-sm">{{ dateFormat(article.create_date) }}</div>
          </div>
        </div>
      </div>
      <div v-dompurify-html="article.content" class="prose article-content my-4 text-sm text-gray-dark"></div>
    </article>
  </div>
</template>

<style lang="less" scoped>
.article {
  border-bottom: 1px solid #eee;
  .article-head {
    padding-bottom: 10px;
    .article-author {
      .article-author-avatar {
        img {
          width: 50px;
        }
      }
    }
  }
  .article-content  {
    margin-bottom: 10px;
  }
}

</style>
