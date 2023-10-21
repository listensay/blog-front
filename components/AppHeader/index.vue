<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
const route = useRoute()
</script>

<template>
  <div class="app-header">
    <div class="navbar px-8">
      <div class="text-black flex items-center justify-between">
        <div>
          <template v-if="route.fullPath === '/'">
            <span>听的说个人空间</span>
          </template>
          <template v-else>
            <NuxtLink to="/">
              <div class="flex flex-row items-center">
                <el-icon class="mr-1"><ArrowLeft /></el-icon> <span>返回</span>
              </div>
            </NuxtLink>
          </template>
        </div>
        <div>
          <!-- <el-button link><el-icon size="20"><Menu /></el-icon></el-button> -->
        </div>
      </div>
    </div>
    <Profile ></Profile>
    <Tab></Tab>
  </div>
</template>

<style lang="less" scoped>
.app-header {
  position: relative;
  .navbar {
    width: 100%;
    height: 50px;
    line-height: 50px
  }
}

</style>
