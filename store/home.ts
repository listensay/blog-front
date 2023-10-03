import { defineStore } from "pinia";
import { useHomeAPI } from "~/service/module/home";
const homeAPI = useHomeAPI()

export interface IArticle {
  avatar:string
  comments:null
  content:string
  cover:null
  create_date: string
  description:null
  likes:null
  nickname: string
  post_id: number
  state: number
  title: number
  user_id: number
}

export interface IUserInfor {
  email: string
  avatar: string
  nickname: string
  description: string
  registration_date: string
  bg: string
}

export interface IHomeState {
  articles?: IArticle[];
  userinfo?: IUserInfor;
}

const useHomeStore = defineStore('homeStore', {
  state: ():IHomeState  => ({
    articles: [],
    userinfo: null
  }),
  actions: {
    async fetchArticle() {
      const result = <any> await homeAPI.getArticleList()
      this.articles = result.data.list
    },
    async fetchGetUserInfo() {
      const result = <any> await homeAPI.getUserInfor()
      const { userinfo } = result.data
      this.userinfo = userinfo
    }
  }
})

export default useHomeStore