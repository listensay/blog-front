import { servers } from '../request'

export const useArticleAPI = () => {
   return {
    getArticleDetal: (id: number) => {
      return servers({ url: '/index/article', method: 'get', query: { post_id :id } })
    }
   }
}
