<script setup>
const tabs = ref([
  { name: '日志', path: '/index' },
  { name: '专题', path: '/category' },
  { name: '邻居', path: '/links' }
  // { name: '说说', path: '' },
  // { name: '相册', path: '' },
])

const currentTableIndex = ref(0)

const changeTable = async (index, path) => {
  currentTableIndex.value = index
  await navigateTo({ path })
}

const route = useRoute()
const path = route.fullPath
const result = tabs.value.findIndex(item => item.path === path)
if (result !== -1) {
  currentTableIndex.value = result
}
</script>

<template>
  <div class="tab">
    <ul class="flex items-center justify-center h-12 text-gray-dark border-gray-light-50 border-b-[1px]">
      <li
        v-for="(tab, index) in tabs" :key="tab.path"
        class="relative flex items-center h-full px-6 cursor-pointer"
        :class="{ active: currentTableIndex === index }"
        @click="changeTable(index, tab.path)"
      >{{ tab.name }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.active {
  color: #60A5FA;

  &::after{
    content: '';
    position: absolute;
    width: 80%;
    height: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 2px;
    background-color: #60A5FA;
  }
}
</style>
