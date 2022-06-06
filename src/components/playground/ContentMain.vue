<script lang="ts" setup>
import BlogPost from "@/components/playground/BlogPost.vue";
import {ref} from 'vue'
import axios from 'axios'
import type {Post} from "@/components/TypeInterface";

const service = axios.create({
      baseURL: "http://localhost:8000",
      timeout: 1000 * 10,
    }
)

const posts = ref<Post[]>([])

// service.get("/post")
//     .then((response) => {
//       posts.value = response.data
//     }).catch((e) => {
// })
posts.value?.push({
  id: 1,
  author: {
    id: 1,
    name: 'AAA',
    avatar: 'aaa'
  },
  title: 'AAA',
  content: 'aaa',
  date: '2022-01-01',
  tags: ['tag1', 'tag2']
}, {
  id: 1,
  author: {
    id: 1,
    name: 'AAA',
    avatar: 'aaa'
  },
  title: 'AAA',
  content: 'aaa',
  date: '2022-01-01',
  tags: ['tag1', 'tag2']
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
