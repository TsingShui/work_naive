<template>
    <n-layout-header>
        <n-grid  :cols="2">
            <n-gi class="left-bar">
                <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
            </n-gi>
            <n-gi class="right-bar">
                <n-grid :cols="1">
                    <n-grid-item class="right-bar">
                        <n-menu v-model:value="activeKey" :options="menuOptions_login" mode="horizontal" />
                    </n-grid-item>
                </n-grid>
            </n-gi>
        </n-grid>
    </n-layout-header>
</template>

<script lang='ts'>
import { defineComponent, h, ref } from 'vue'
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';


let menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path:'/home'
                    }
                },
              ()=>h('p','Home')
            ),
        key: 'home'
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/about-us'
                    }
                },
                ()=>h('p','AboutUs')
            )
        , key: 'About'
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/playground'
                    }
                },
               ()=> h('p',"PlayGround")
            )
        , key: 'PlayGround'
    }

]

let menuOptions_login: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/login'
                    }
                },
              ()=>h('p','Login')
            ),
        key: 'Login'
    },
]

export default defineComponent({
    setup() {
        //
        return {
            menuOptions, activeKey: ref<string | null>(null),
            menuOptions_login }
    }
})
</script>

<style  scoped>
.right-bar {
    align-self: center;
    justify-self: end;
}
</style>
