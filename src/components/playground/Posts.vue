<template>
  <!-- 中间内容 -->
  <ContentMainVue/>
  <n-divider vertical style="height: 100%"/> <!-- 分割线 -->
  <!-- 右侧栏 -->
  <SideRight></SideRight>
</template>

<script lang="ts" setup>
import ContentMainVue from '@/components/playground/ContentMain.vue'
import SideRight from '@/components/playground/SideRight.vue'
</script>

<style scoped>

</style>