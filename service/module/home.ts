import { get } from '../request'

export const useHomeAPI = () => {
  return {
    getArticleList: () => {
      return get('/index/article')
    },
    getUserInfor: () => {
      return get('/index/userinfo')
    },
    getUserProfiles: () => {
      return get('/index/userProfile')
    },
  }
}
