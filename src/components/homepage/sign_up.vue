<template>
  <n-form ref="formRef" :model="model" :rules="rules">
<!-- 用戶 -->
    <n-form-item path="user_name" label="用户名😁">
      <n-input v-model:value="model.user_name" @keydown.enter.prevent />
    </n-form-item>

<!--密碼-->
    <n-form-item path="password" label="密码😆">
      <n-input
          v-model:value="model.password"
          type="password"
          @input="handlePasswordInput"
          @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item
        ref="rPasswordFormItemRef"
        first
        path="reenteredPassword"
        label="重复密码😉"
    >
      <n-input
          v-model:value="model.reenteredPassword"
          :disabled="!model.password"
          type="password"
          @keydown.enter.prevent
      />
    </n-form-item>

<!--gender-->
    <n-form-item label="性別🤩" path="radioGroupValue">
      <n-radio-group v-model:value="model.gender" name="radiogroup2">
        <n-radio-button value="boy">
          Boy🧒
        </n-radio-button>
        <n-radio-button value="girl">
          Girl👧
        </n-radio-button>
        <n-radio-button value="lgbt">
          Undefined?😨
        </n-radio-button>
      </n-radio-group>
    </n-form-item>

      <n-form-item label="领域">
        <n-select v-model:value="model.profile" multiple :options="profile_options" >

        </n-select>
      </n-form-item>

    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button
              :disabled="model.age === null"
              round
              type="primary"
              @click="handleValidateButtonClick"
          >
            注册
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>
<!--预览Json-->
<!--  <pre>{{ JSON.stringify(model, null, 2) }}-->
<!--</pre>-->
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
import axios from 'axios'

// 表单类型
interface ModelType {
  user_name: string | null
  password: string | null
  reenteredPassword: string | null
  gender : string | null
  profile: string|null|[string]
}

export default defineComponent({
  setup () {
    // 表单引用
    const formRef = ref<FormInst | null>(null)
    // 重复密码
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    // 提示信息
    const message = useMessage()
    // axios 请求
    const sign_up = axios.create({
      baseURL:'http://localhost:8000',
      timeout:1000*5,
    })

    // model
    const modelRef = ref<ModelType>({
      user_name: null,
      password: null,
      reenteredPassword: null,
      gender :null,
      profile:null,
    })
    function validatePasswordStartWith (
        rule: FormItemRule,
        value: string
    ): boolean {
      return (
          !!modelRef.value.password &&
          modelRef.value.password.startsWith(value) &&
          modelRef.value.password.length >= value.length
      )
    }
    function validatePasswordSame (rule: FormItemRule, value: string): boolean {
      return value === modelRef.value.password
    }

    // 检查规则
    const rules: FormRules = {
      user_name: [
        {
          required: true,
          validator (rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('用户名是必须的!它是唯一登录凭证')
            } else if (!/^[A-Za-z0-9@_]+$/.test(value)) {
              return new Error('用户名只能包含英文字符,_,@和数字')
            } else if (value.length > 10){
              return new Error('用户名太长啦!')
            }else if (value.length < 4){
              return new Error('用户名不能这么短...')
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
              return new Error('密码太短了!')
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
        },
        {
          validator: validatePasswordStartWith,
          message: '两次密码输入不一致',
          trigger: 'input'
        },
        {
          validator: validatePasswordSame,
          message: '两次密码输入不一致',
          trigger: ['blur', 'password-input']
        }
      ]
    }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput () {
        if (modelRef.value.reenteredPassword) {
          rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
        }
      },
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
      ,
      // 领域内容
      profile_options:[
        {
          label: 'Web-Dev🙄',
          value:'Web-Dev',
        } ,
        {
          label:'Web-Security😏',
          value: 'Web-Security'
        },
        {
          label:'Pc-Dev😯',
          value: 'Pc-Dev'
        },
        {
          label:'Pc-Reverse😊',
          value: 'Pc-Reverse',
        },
        {
          label:'Mobile-Dev😘',
          value: 'Mobile-Dev'
        },
        {
          label:'Full-Stack-SRE😎',
          value: 'Full-Stack-SRE'
        }
      ]

    }
  }
})
</script>