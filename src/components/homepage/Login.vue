<template>
<n-space class="space" align="center" justify="center"
         style="margin-bottom: 0;margin-top: 35px"
        >
  <n-card>
    <n-tabs
        class="card-tabs"
        default-value="signin"
        size="large"
        animated
        style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="登录">
      <Reg></Reg>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
      <Signin></Signin>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</n-space>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Signin from "@/components/homepage/sign_up.vue";
import Reg from "@/components/homepage/sign_in.vue";
export default defineComponent({
  components: {Signin,Reg},
  setup() {
    return {
    }
  }
})
</script>

<style >


</style>