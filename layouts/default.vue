<script lang="ts" setup>
import useHomeStore from '@/store/home'
const homeStore = useHomeStore()
await homeStore.fetchUserProfile()
</script>

<template>
  <div class="my-2 w-[640px] mx-auto shadow bg-red-500 bg-white md:w-full md:my-0 rounded">
    <AppHeader></AppHeader>
    <div>
      <slot></slot>
    </div>
    <AppFooter></AppFooter>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<style lang="less" scoped>
</style>
