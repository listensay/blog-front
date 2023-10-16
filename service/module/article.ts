import { get } from '../request'

export const useArticleAPI = () => {
   return {
    getArticleDetal: (id: number) => {
      return get('/index/article', { post_id :id })
    }
   }
}
