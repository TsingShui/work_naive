<script lang="ts" setup>
import SideLeftVue from '@/components/playground/SideLeft.vue';
import ContentMainVue from '@/components/playground/ContentMain.vue';
import SideRight from '../components/playground/SideRight.vue';
</script>

<template>
    <div style="height: 100vh; position: relative">
        <n-layout position="absolute">
            <n-layout has-sider position="absolute" >
                <!-- 左栏 -->
                <SideLeftVue />
                <n-divider vertical style="height: 100%"/> <!-- 分割线 -->
                <!-- 中间内容 -->
                <ContentMainVue />
                <n-divider vertical style="height: 100%"/> <!-- 分割线 -->
                <!-- 右侧栏 -->
                <SideRight></SideRight>
            </n-layout>
        </n-layout>
    </div>
</template>


<style>
</style>