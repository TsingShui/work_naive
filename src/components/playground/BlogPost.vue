<script lang="ts" setup>
defineProps({
    post: Object
})

</script>

<template>
    <n-space vertical>
        <!-- 博客顶部：头像 + 博主名字 + 发布日期(Mon Day, Year) -->
        <n-space>
            <n-avatar round size="small" src="{{ post.author.avatar }}" />
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
                <h1>post.title</h1>
                <n-ellipsis :line-clamp="3">
                </n-ellipsis>
            </n-space>
        </n-space>
    </n-space>
</template>

<style>
</style>