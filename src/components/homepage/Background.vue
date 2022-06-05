<template>
    <div ref='vantaRef' class="background">
        <n-layout>
            <n-layout-header>
                <Navbar></Navbar>
            </n-layout-header>
            <n-layout-content class="content">
              <n-notification-provider>
                <n-message-provider>
                <RouterView></RouterView>
                </n-message-provider>
              </n-notification-provider>
            </n-layout-content>
        </n-layout>

    </div>
</template>

<script>


import RINGS from 'vanta/src/vanta.rings'
import * as THREE from "three";
import Content from "./Content.vue";
import Navbar from "./Navbar.vue";
import { RouterView } from "vue-router";
export default {
    mounted() {
        this.vantaEffect = RINGS({
            el: this.$refs.vantaRef,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color: 0xa4ff,
            backgroundAlpha: 0.00
        });
    },
    beforeDestroy() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    },
    components: { Content, Navbar, RouterView }
}
</script>


<style>
/* 背景高度 */
.background {
    height: 100vh;
}

/* 设置透明 */
.n-layout,
.n-layout-header {
    background-color: transparent;
}
</style>