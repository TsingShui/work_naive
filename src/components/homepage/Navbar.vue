<template>
    <n-grid x-gap="0" :cols="2">
        <n-gi class="left-bar">
            <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
        </n-gi>
        <n-gi class="right-bar">
            <n-grid :x-gap="10" :y-gap="5" :cols="2">
                <n-grid-item>
                    <n-button size="Large" text @click="">Login</n-button>
                </n-grid-item>
            </n-grid>


        </n-gi>

    </n-grid>
</template>

<script lang='ts'>
import { defineComponent, h ,ref} from 'vue'
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';


let menuOptions: MenuOption[] = [
    {
        label: ()=>h(
            RouterLink,
            {
                to:{
                    path:'/home'
                }
            },
            'Home Wc'
        ),
        key : 'home'
    },
    {
        label:()=>
            h(
                RouterLink,
                {
                    to:{
                        path:'/about-us'
                    }
                },
                'About'
            )
            ,key:'About'
    },
    {
        label: "Playground",
        key: '3'
    }

]

export default defineComponent({
    setup() {
        //
        return { menuOptions,activeKey: ref<string | null>(null), }
    }
})
</script>

<style  scoped>

 .right-bar {
    align-self: center;
    justify-self: end;
}

</style>
