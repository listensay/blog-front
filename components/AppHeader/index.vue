<script lang="ts" setup>
import {
  // ArrowLeft,
  Message
} from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import useHomeStore from '~/store/home';

const homeStore = useHomeStore()
const { userinfo } = storeToRefs(homeStore)
</script>

<template>
  <div class="app-header">
    <div class="navbar px-8">
      <nuxt-link to="/" class="text-black flex flex-row items-center">
        <!-- <el-icon class="mr-1"><ArrowLeft /></el-icon> -->
        <span>听的说个人空间</span>
      </nuxt-link>
    </div>
    <div class="profile">
      <div class="bg">
        <img :src="userinfo.bg" alt="bg">
      </div>
      <div class="author p-8">
        <div class="photo">
          <img :src="userinfo.avatar" alt="头像">
        </div>
        <div class="authour-info">
          <div class="name font-bold text-xl text-gray-dark mb-1">{{ userinfo.nickname }}</div>
          <div class="email text-sm text-gray flex items-center mb-2"><el-icon style="margin-right: 5px"><Message /></el-icon> {{ userinfo.email }}</div>
          <div class="desc text-gray-dark text-sm">{{ userinfo.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-header {
  position: relative;
  .navbar {
    width: 100%;
    height: 50px;
    line-height: 50px;
  
  }
  .profile {
    border-bottom: 1px solid #eee;
    .bg {
      img {
        height: 250px;
        object-fit: cover;
        width: 100%;
      }
    }
    .author {
      position: relative;
      .photo {
        position: relative;
        margin-bottom: 20px;
        margin-top: -90px;

        img {
          width: 100px;
          border: 1px solid #eeeeeeb5;
        }
      }
    }

    .authour-info {
      .email {
        margin-bottom: 8px;
      }
    }
  }
}

</style>
