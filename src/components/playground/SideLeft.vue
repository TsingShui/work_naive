<script lang = "ts" setup>

import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { h } from 'vue';
import { NIcon } from 'naive-ui';
import {
    HomeOutline as HomeIcon,
    PencilOutline as PencilIcon,
    BookOutline as BookIcon,
    LogoGitlab as  LogoIncon,
    Person as DefaultAvatarIcon,
} from '@vicons/ionicons5';


const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/playground'
                    }
                },
            ),
        key: 'home',
        icon: () => h(HomeIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/write'
                    }
                },
            ),
        key: 'write',
        icon: () => h(PencilIcon)
    }, {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/playground'
                    }
                },
            ),
        key: 'papers',
        icon: () => h(BookIcon)
    },

]

</script>


<template>
    <n-layout-sider width=80px>
        <!-- 外层 Grid 布局 -->
        <n-grid :x-gap="10" :y-gap="5" :cols="1" class="main">

            <n-grid-item class="head">
            <n-icon size="30">
                <LogoIncon></LogoIncon>
            </n-icon>

            </n-grid-item>
            <!-- Middle -->
            <n-grid-item class="body">
                <n-grid :x-gap="5" :y-gap="5" :cols="1">
                    <n-grid-item>
                        <n-menu :options="menuOptions" />
                    </n-grid-item>
                </n-grid>
            </n-grid-item>

            <n-grid-item class="foot">
                <n-avatar size="medium" color="black" round >
                    <n-icon size="30">
                        <default-avatar-icon> </default-avatar-icon>
                    </n-icon>

                </n-avatar>

            </n-grid-item>

        </n-grid>

    </n-layout-sider>

</template>


<style>
.main {
    height: 100%;
    padding: 0;
    margin: 0;
}


.body{
    align-self: center;
    justify-self: center;
}
.foot{
    align-self:end;
    justify-self: center;
    padding-bottom: 30px;
    padding-left: 10px;

}
.head{
    justify-self: center;
    margin-top: 10px;
    margin-left: 10px;
}

</style>
