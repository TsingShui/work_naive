<template>


  <div style="height: 100vh; position: relative">
    <n-layout position="absolute">
      <n-layout has-sider position="absolute">
        <!-- 左栏 -->
        <SideLeftVue />
        <!-- 中间内容 -->
          <WriteVue></WriteVue>
      </n-layout>
    </n-layout>
  </div>

</template>


<script lang="ts" setup>
import WriteVue from '@/components/write/Write.vue';
import SideLeftVue from '@/components/playground/SideLeft.vue';
</script>

<style>
</style>