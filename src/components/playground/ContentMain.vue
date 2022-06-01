<script lang = "ts" setup>
import BlogPost from "@/components/playground/BlogPost.vue";

const props = defineProps({
    posts: Object
})
</script>

<template>
    <n-layout content-style="padding: 24px;" :native-scrollbar='false'>
        <BlogPost v-for="post in props.posts" :key="post.id" :post="post" />
    </n-layout>
</template>

<style>
</style>
