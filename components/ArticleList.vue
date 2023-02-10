<template>
  <div v-for="item in articleList" :key="item.id" class="articleDiv">
    <div class="authorAndTime">
      {{ item.author }} {{ item.date }}
    </div>
    <div class="lessArticle">
      <h3>{{ item.title }}</h3>
      <p>{{ item.info }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: articleList } = await useFetch('/api/articleList')
</script>

<style lang="less" scoped>
.articleDiv{
  border-bottom: 1px solid #e5e6eb;
}
</style>
