import { defineStore } from "pinia";
import { useCategoryAPI } from "~/service/module/category";
const categoryAPI = useCategoryAPI()

export const useCategoryStore = defineStore('categoryStore', {
  state: () =>({
    categorys: []
  }),
  actions: {
    async fetchGetCategory() {
      try {
        const result = await categoryAPI.category()
        this.categorys = result.data.list
      } catch (error) {
        ElMessage.error(error)
      }
    }
  }
})
