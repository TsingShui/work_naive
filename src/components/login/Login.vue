<template>

    <n-space align="center" justify="center" >
        <n-grid :x-gap="0" :y-gap="0" :cols="1">
            <n-grid-item>
                <n-config-provider :theme="darkTheme">
                    <n-card >
                        <n-tabs class="card-tabs" default-value="signin" size="large" animated style="margin: 0 -4px"
                            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
                            <n-tab-pane name="signin" tab="登录">
                                <n-form>
                                    <n-form-item-row label="用户名">
                                        <n-input />
                                    </n-form-item-row>
                                    <n-form-item-row label="密码">
                                        <n-input />
                                    </n-form-item-row>
                                </n-form>
                                <n-button type="primary" block secondary strong>
                                    登录
                                </n-button>
                            </n-tab-pane>
                            <n-tab-pane name="signup" tab="注册">
                                <n-form>
                                    <n-form-item-row label="用户名">
                                        <n-input />
                                    </n-form-item-row>
                                    <n-form-item-row label="密码">
                                        <n-input />
                                    </n-form-item-row>
                                    <n-form-item-row label="重复密码">
                                        <n-input />
                                    </n-form-item-row>
                                </n-form>
                                <n-button type="primary" block secondary strong>
                                    注册
                                </n-button>
                            </n-tab-pane>
                        </n-tabs>
                    </n-card>
                </n-config-provider>
            </n-grid-item>
        </n-grid>
    </n-space>


</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'

export default defineComponent({
    setup() {
        // todo
        return {
            darkTheme
        }
    }
})
</script>

<style  scoped>
.n-space {
    height: 100vh;
    width: 100vw;
}

.n-layout {
    align-items: center;

}
</style>
