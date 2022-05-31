<template>
    <n-grid :x-gap="10" :y-gap="0" :cols="1">
        <n-grid-item>
            <div class="Title1">
                <n-gradient-text type="primary">这里是 AFX0 Team </n-gradient-text>
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="Title2">
                <n-gradient-text type="primary" :gradient="{
                }">
                    全栈开发,百万并发! <br>
                    Coding && Reverse<br>
                    Dev && Sre
                </n-gradient-text>
            </div>
        </n-grid-item>
    </n-grid>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'




export default defineComponent({
    setup() {
        //
        return {}
    }
})
</script>

<style scoped>



.Title1 {
    font-size: 50px;
    margin-top: 20%;
    margin-left: 10%;
}

.Title2 {
    margin-top: -1%;
    font-size: 30px;
    margin-left: 10%;

}

.start-button {
    margin-top: 0%;
    margin-left: 10%;

}


</style>
