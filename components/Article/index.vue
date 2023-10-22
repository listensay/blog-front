<script setup>
const props = defineProps({
  article: { type: Object, default: () => ({}) }
})

const { article } = toRefs(props)

const dateFormat = (date) => {
  return useDayjs(date).format('MM月DD日')
}

const baseUrl = useRuntimeConfig().public.baseUrl
</script>

<template>
  <div class="p-8">
    <article class="article">
      <div class="article-head">
        <div class="article-author flex items-center justify-between">
          <div class="left flex items-center">
            <div class="article-author-avatar justify-evenly mr-4">
              <img class="rounded-md" :src="baseUrl + article?.category_img" alt="avatar">
            </div>
            <div class="article-author-profile">
              <div class="name text-gray-dark">{{ article?.nickname }}</div>
              <div class="desc text-sm text-gray">{{ article?.title }}</div>
            </div>
          </div>
          <div class="right">
            <div class="time text-gray text-sm">
              {{ dateFormat(article.create_date) }}
            </div>
          </div>
        </div>
      </div>
      <template v-if="article.style === 1">
        <NuxtLink :to="'./article/' + article.post_id">
          <ArticleBoxImg :cover="article.cover" :title="article.title" :description="article.description" />
        </NuxtLink>
      </template>
      <template v-if="article.style === 2">
        <div v-dompurify-html="article.content" class="prose article-content my-4 text-sm text-gray-dark"></div>
      </template>
      <template v-if="article.style === 3">
        <NuxtLink :to="'./article/' + article.post_id">
          <div class="article-basic my-4 flex items-center rounded-sm border-[1px] border-gray-light-50">
            <div class="detal">
              <div class="title mb-1 text-gray-dark">{{ article.title }}</div>
              <div class="desc text-gray text-sm">{{ article.description }}</div>
            </div>
          </div>
        </NuxtLink>
      </template>
    </article>
  </div>
</template>

<style lang="less" scoped>
.article {
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
