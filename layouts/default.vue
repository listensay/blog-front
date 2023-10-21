<script lang="ts" setup>

</script>

<template>
  <div class="w-[640px] my-8 mx-auto shadow bg-red-500 bg-white rounded md:w-full md:my-0">
    <AppHeader></AppHeader>
    <div>
      <slot></slot>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="less" scoped>
</style>
