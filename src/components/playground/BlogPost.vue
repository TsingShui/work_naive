<script lang="ts" setup>

import type {Post} from "@/components/TypeInterface";
const props = defineProps({
  post: Object as () => Post,
})


</script>

<template>
  <n-divider/> <!-- 分割线 -->
  <n-space vertical>
    <!-- 博客顶部：头像 + 博主名字 + 发布日期(Mon Day, Year) -->
    <n-space>
      <n-avatar round size="small" v-bind:src='post.author.avatar' />
      <n-button text color="#000000">
        {{ post.author.name }}
      </n-button>
      ·
      <n-button text color="#757575">
        {{ post.date }}
      </n-button>
    </n-space>
    <!-- 博客中间：文章标题 + 文章内容简略 + 文章图片 -->
    <n-space justify="space-between">
      <n-space vertical>
        <n-space class="title">{{ post.title }}</n-space>
        <n-ellipsis :line-clamp="3" class="content">{{ post.content }}</n-ellipsis>
      </n-space>
    </n-space>
  </n-space>
  <!-- 博客底部：tags -->
  <n-space>
    <n-tag
        round
        :color="{ color: '#f2f2f2', textColor: '#292929', borderColor: '#f2f2f2' }"
        size="small" v-for="tag in post.tags">
      {{ tag }}
    </n-tag>
  </n-space>
</template>

<style>
.title {
  font-weight: bold;
  font-family: "JetBrains Mono ExtraBold",serif;
  font-size: 21px;
}
.content {
  font-family: "Consolas",serif;
  font-size: 16px;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>