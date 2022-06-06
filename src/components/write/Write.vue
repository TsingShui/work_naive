<template>
  <md-editor
      placeholder="# 开始创作吧!🥰🥰🥰"
      @onSave="showModal = true"
      v-model="paper_text"/>

  <n-modal v-model:show="showModal">
    <n-card
        style="width: 600px"
        title="发布"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template #header-extra>
        看起来不错..
      </template>

      <n-form
          ref="formRef"
          :model="model"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          :style="{
      maxWidth: '640px'
    }"
      >
        <n-form-item label="标题">
          <n-input placeholder="Title" v-model:value="model.title" ></n-input>
        </n-form-item>
        <n-form-item label="标签">
          <n-input placeholder="Tag" v-model:value="model.tags"></n-input>
        </n-form-item>


      </n-form>


      <template #footer>

        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div style="display: flex; justify-content: flex-end">
              <n-button round type="primary" @click="save_draft" style="margin-right: 10px">
                保存草稿
              </n-button>
              <n-button round type="primary" @click="publish_paper">
                发布文章
              </n-button>
            </div>
          </n-col>
        </n-row>
      </template>
    </n-card>
  </n-modal>


</template>

<script lang="ts" setup>
import {ref} from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import axios from "axios";

const showModal = ref(false)
const paper_text = ref('');

interface paper{
  content : string |null
  title : string | null
  tags : string |null
}

const model = ref<paper>(
    {
      content : paper_text.value,
      title :null,
      tags :null
    }
)

const save_service = axios.create({
  baseURL:'http://localhost:8000',
  timeout: 1000*7,
  headers :{
    authorization : `Bearer ${localStorage.token}`,
  }
})
function save_draft(){
  save_service.post(
      '/user/post',
      {
        'title': model.value.title,
        'tags' : model.value.tags,
        'content' : model.value.content
      }
  ).then(
      function (response){
        alert('Chenggong')
      }
  ).catch( function (reason){
    console.log(reason)
  } )
}
function publish_paper(){
  save_service.post(
      '/user/post',
      {
        'title': model.value.title,
        'tags' : model.value.tags,
        'content' : model.value.content
      }
  ).then(
      function (response){
        alert('Chenggong')
      }
  ).catch( function (reason){
    console.log(reason)
  } )
}

</script>

<style>
.md {
  height: 100%;
}
.md-toolbar-wrapper .md-toolbar{
  border-bottom : transparent;
}


</style>