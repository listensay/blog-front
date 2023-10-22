import eslintPlugin from 'vite-plugin-eslint'
import { loadEnv } from 'vite'

const envScript = process?.env?.npm_lifecycle_script?.split(' ')
const envName = envScript?.[envScript.length - 1] || "" // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as any

export default defineNuxtConfig({
  sitemap: {
    xsl: false,
    autoLastmod: true
  },
  runtimeConfig: {
    public: {
      baseUrl: envData.VITE_BASE_URL  // env下读取的数据
    }
  },
  devServer: {
    port: 8088
  },
  css: [
    'normalize.css',
    '@/assets/css/tailwind.css',
    '@/assets/css/index.less',
    '@/assets/font/iconfont.css'
  ],
  build: {
    // 该文件需要进行Babel转义
    transpile: ['element-plus/es'],
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    // Simple usage
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'dayjs-nuxt',
    'nuxt-simple-sitemap'
  ],
  routeRules: {
    // 设置重定向
    '/': { redirect: '/index' },
  },
  app: {
    // 可以给所有的页面的head添加一下SEO的信息
    head: {
      title: "星期四的空间",
      meta: [
        {
          name: "description",
          content:
            "星期四的空间，细致记录着生活的点滴绽放与翻飞，以及万般折腾的奇妙之路。",
        },
        {
          name: "keywords",
          content: "星期四的空间,星期四的博客,星期四,听说",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      noscript: [{ children: "Javascript is required" }],
    },
  }
})
