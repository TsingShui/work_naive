
<script lang="ts" setup>
import WriteVue from '@/components/write/Write.vue';
</script>

<template>
  <div style="height: 100vh; width: 100%; position: relative">
    <n-layout position="absolute">
      <n-layout has-sider position="absolute">
        <n-divider vertical style="height: 100%; margin-right: -10px" /> <!-- 分割线 -->
        <!-- 中间内容 -->
          <WriteVue></WriteVue>
      </n-layout>
    </n-layout>
  </div>
</template>




<style>
</style>