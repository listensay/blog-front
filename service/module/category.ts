import { get } from '../request'

export const useCategoryAPI = () => {
  return {
    category: () => {
      return get('/index/category')
    }
  }
}
