<script lang = "ts" setup>

import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {h} from 'vue';
import { NIcon } from 'naive-ui';
import {
    HomeOutline as HomeIcon
    

} from '@vicons/ionicons5';


const menuOptions:MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home'
                    }
                },
            ),
        key: 'home',
        icon: ()=> h(HomeIcon)
    },
        {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home'
                    }
                },
            ),
        key: 'home',
        icon: ()=> h(HomeIcon)
    },    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home'
                    }
                },
            ),
        key: 'home',
        icon: ()=> h(HomeIcon)
    },

]



</script>


<template>
    <n-layout-sider  width=100px>
        <n-space class="main" align="center" justify ="center">
        <n-grid :x-gap="5" :y-gap="5" :cols="1">
            <n-grid-item>
            <n-menu :options="menuOptions"  />
            </n-grid-item>
        </n-grid>
        </n-space>
    </n-layout-sider>

</template>


<style>
.main{
    height: 100%;
    padding: 0;
    margin:0;
}
</style>
