<script lang="ts" setup>
import SideLeftVue from '@/components/playground/SideLeft.vue';
import {RouterView} from "vue-router";

</script>

<template>
    <div style="height: 100vh; position: relative">
        <n-layout position="absolute">
            <n-layout has-sider position="absolute" >
                <!-- 左栏 -->
                <SideLeftVue />
                <n-divider vertical style="height: 100%;" /> <!-- 分割线 -->
                <RouterView></RouterView>
            </n-layout>
        </n-layout>
    </div>
</template>


<style>
</style>