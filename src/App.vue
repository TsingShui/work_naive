<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from "vue";
const token = ref("test");
</script>

<template>

  <RouterView ></RouterView>
</template>

<style>


html,body,
#app{
  margin: 0;
  padding: 0;
}

</style>