<script lang = "ts" setup>

import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {h} from 'vue';
import { NIcon } from 'naive-ui';
import {HomeOutline as HomeIcon} from '@vicons/ionicons5';


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
        <n-grid :x-gap="5" :y-gap="5" :cols="1">
            <n-grid-item>
            <n-menu :options="menuOptions"  />
            </n-grid-item>
        </n-grid>
    </n-layout-sider>

</template>


<style>
</style>
