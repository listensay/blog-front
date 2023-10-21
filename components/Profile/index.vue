<script lang="ts" setup>
import {
  // ArrowLeft,
  Message
} from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import useHomeStore from '~/store/home';

const homeStore = useHomeStore()
const { userinfo, userProfile } = storeToRefs(homeStore)
const baseUrl = useRuntimeConfig().public.baseUrl
</script>

<template>
  <div class="profile">
    <div class="bg">
      <img :src="baseUrl + userinfo?.bg" alt="bg">
    </div>
    <div class="author p-8">
      <div class="photo">
        <img :src="baseUrl + userinfo?.avatar" alt="头像">
      </div>
      <div class="authour-info">
        <div class="name font-bold text-xl text-gray-dark mb-1">{{ userinfo?.nickname }}</div>
        <div class="email text-sm text-gray flex items-center mb-2"><el-icon style="margin-right: 5px"><Message /></el-icon> {{ userinfo?.email }}</div>
        <div class="desc text-gray-dark text-sm">{{ userinfo?.description }}</div>
        <div class="authour-profiles">
          <client-only>
              <ul class="list mt-5 rounded-sm">
                <li
                  v-for="(profile, index) in userProfile?.profile" :key="index"
                  class="item p-5 border-1 flex items-center"
                >
                  <i class="iconfont mr-2" :class="profile.icon"></i>
                  <span class="first text-sm mr-2">{{ profile.first }} :</span> <span class="last text-sm">{{ profile.last }}</span>
                </li>
              </ul>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.profile {
  border-bottom: 1px solid #eee;
  .bg {
    img {
      height: 200px;
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

    .authour-profiles {
      .list {
        border: 1px solid #eee;
        .item {
          border-bottom: 1px solid #eee;
          &:last-child{
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>
