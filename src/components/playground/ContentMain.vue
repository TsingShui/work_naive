<script lang="ts" setup>
import BlogPost from "@/components/playground/BlogPost.vue";
import {ref} from 'vue'
import axios from 'axios'
import type {Post} from "@/components/TypeInterface";

const service = axios.create({
      baseURL: "http://localhost:8000/playground",
      timeout: 1000 * 10,
    }
)


const posts = ref<Post[]>([])

service.get("/papers")
    .then((response) => {
      posts.value = response.data
    }).catch((e) => {
})
</script>

<template>
  <n-layout content-style="padding: 24px;" :native-scrollbar='false'>
    <BlogPost
        v-for="post in posts"
        :key="post.id"
        :post="post"/>
  </n-layout>
</template>

<style>
</style>
