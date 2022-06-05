<template>
  <md-editor


  v-model="text" />
</template>

<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';


const text = ref('# 开始创作吧!🥰🥰🥰');
</script>

<style>
.md{
  height: 100%;
  /*width: 130%;*/
}

</style>