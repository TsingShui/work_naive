<template>
  <n-form ref="formRef" :model="model" :rules="rules">
    <!-- 用戶 -->
    <n-form-item path="user_name" label="用户名😋">
      <n-input v-model:value="model.user_name" @keydown.enter.prevent />
    </n-form-item>

    <!--密碼-->
    <n-form-item path="password" label="密码😎">
      <n-input
          v-model:value="model.password"
          type="password"
          @keydown.enter.prevent
      />
    </n-form-item>
<!--    登录按钮 -->

    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button
              :disabled="model.user_name === null"
              round
              type="primary"
              @click="handleValidateButtonClick"
          >
            登录
          </n-button>
        </div>
      </n-col>
    </n-row>



  </n-form>
  <!--预览Json-->
  <pre>{{ JSON.stringify(model, null, 2) }}
</pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type{
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules
} from 'naive-ui'
import {
  useMessage
} from 'naive-ui'
// 表单类型
interface ModelType {
  user_name: string | null
  password: string | null
}

export default defineComponent({
  setup () {
    // 表单引用
    const formRef = ref<FormInst | null>(null)
    // 重复密码
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    // 提示信息
    const message = useMessage()
    // model
    const modelRef = ref<ModelType>({
      user_name: null,
      password: null,
    })

    // 检查规则
    const rules: FormRules = {
      user_name: [
        {
          required: true,
          validator (rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('用户名是必须的!它是唯一登录凭证')
            } else if (!/^[A-Za-z\d@_]+$/.test(value)) {
              return new Error('用户名只能包含英文字符,_,@和数字!')
            } else if (value.length > 10){
              return new Error('用户名怎么会这么长..?')
            }else if (value.length < 2){
              return new Error('用户名不会这么短...')
            }
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
      password: [
        {
          required: true,
          validator (rule:FormItemRule,value:string){
            if (!value){
              return new Error('输入密码哦')
            }
            else if (value.length < 5){
              return new Error('密码不会这么短!')
            }
            return true
          },
          trigger:['input','blur'],
          // message: '请输入密码'
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: '请再次输入密码',
          trigger: ['input', 'blur']
        }
      ]
    }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,

      handleValidateButtonClick (e: MouseEvent) {
        e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {

            message.success('注册成功')
          } else {
            console.log(errors)
            message.error('注册失败')
          }
        })
      }
    }
  }
})
</script>