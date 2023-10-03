<script lang="ts" setup>

</script>

<template>
  <div class="layout m-auto shadow bg-red-500  bg-white rounded">
    <AppHeader></AppHeader>
    <div>
      <slot></slot>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="less" scoped>
.layout {
  width: 650px;
  margin-top: 20px;
}
</style>
