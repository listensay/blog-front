import {servers} from '../request'

export const useHomeAPI = () => {
  return {
    getArticleList: () => {
      return servers({ url: '/index/article', method: 'get' })
    },
    getUserInfor: () => {
      return servers({ url: '/index/userinfo', method: 'get' })
    },
    getUserProfiles: () => {
      return servers({ url: '/index/userProfile', method: 'get' })
    },
  }
}
