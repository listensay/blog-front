<script setup>
const links = ref([
  { name: '大海看看', url: 'https://www.dhkk.cn/', avatar: 'https://www.dhkk.cn/logo.png', desc: '记录生活留住美好时刻 ，分享个人学习笔记.' },
  { name: '半成熟の小屋', url: 'http://sire.cc/', avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2638209909&s=640', desc: '记录美好与生活' },
  { name: '潇洒哥', url: 'https://xiaosa.ge/', avatar: 'https://q.qlogo.cn/g?b=qq&nk=169777561&s=100', desc: '当然会有遗憾啊，这是人间常态呀' },
  { name: '染屿小窝', url: 'https://melog.cc/', avatar: 'https://melog.cc/content/uploadfile/202303/272b1679932151.jpeg', desc: '染屿小窝，记录生活与网站的log' },
  { name: '永恒末匕', url: 'https://www.avbk.cn/', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1527335101&spec=640&img_type=jpg', desc: '愿交一群在互联网末期还坚守着心灵树洞的人，所有的友链，我会时常拜访！' },
  { name: '末然的个人主页', url: 'https://www.avbk.cn/', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2107228359&spec=640&img_type=jpg', desc: 'c++大佬' },
])
</script>

<template>
  <div class="links p-8">
    <div class="relative flex flex-col items-center rounded-[10px]">
      <div class="py-4 w-full">
          <div class="text-lg text-navy-700">邻居们</div>
      </div>
      <div v-for="link in links" :key="link.url" class="flex h-full w-full items-center justify-between my-4">
          <div class="flex items-center gap-3">
              <div class="flex h-16 w-16 items-center justify-center">
              <img
                  class="h-full w-full rounded-full"
                  :src="link.avatar"
                  :alt="link.name"
              />
              </div>
              <div class="flex flex-col">
              <h5 class="text-base text-navy-700">{{ link.name }}</h5>
              <p class="mt-1 text-sm font-normal text-gray-600">{{ link.desc }} </p>
              </div>
          </div> 
          <div class="mt-1 flex items-center justify-center text-navy-700">
              <div>
                <NuxtLink :to="link.url" target="_blank" class="flex w-8 h-8 bg-primary rounded-full items-center justify-center text-white">
                  <el-icon size="16"><Promotion /></el-icon>
                </NuxtLink>
              </div>
          </div>
      </div>
    </div> 
  </div>
</template>

<style lang="less" scoped>

</style>
