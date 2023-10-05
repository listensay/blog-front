import { defineStore } from "pinia";
import { useArticleAPI } from "~/service/module/article";
const articleAPI = useArticleAPI()

const useArticleStore = defineStore('useArticleStore', {
  state: () => ({
    articleContent: ''
  }),
  actions: {
    async fetchGetArticleDetal(id: number) {
      const { data } =<any> await articleAPI.getArticleDetal(id)
      this.articleContent = data.list[0]
    }
  }
})

export default useArticleStore