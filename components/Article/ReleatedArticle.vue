<template>
  <div class="box-card">
    <div class="#header">
      <div class="card-header">
        <span>相关文章</span>
      </div>
    </div>
    <div v-for="(item, id) in releatedArticleList.data" :key="item.id" class="text item">
      <div v-if="id < 5">
        <nuxt-link class="reAr" :to="{ path: '/article/' + item.attributes.uid }" target="_blank">
          <div class="item">
            {{ item.attributes.articleTitle }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup scoped>
async function getReleatedArticleList () {
  // const { data: Ad } = await useLazyFetch('/api/releatedArticleList')
  const { data: Ad } = await useAsyncData('releatedArticleList', () => $fetch('/api/releatedArticleList'))
  // if (Ad.value.data[0].attributes.show !== true) {
  //   ElMessage({
  //     showClose: true,
  //     message: 'Advertise 获取失败!',
  //     type: 'error'
  //   })
  // }
  return Ad.value
}
const releatedArticleList = await getReleatedArticleList()
</script>
<style lang="scss" scoped>
.card-header {
  padding: 1.333rem 0;
  margin: 0 1.667rem;
  font-size: 16px;
  line-height: 2rem;
  font-weight: 500;
  border-bottom: 1px solid #e4e6eb;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  margin-top: 18px;
  margin-left: 10px;
  margin-right: 18px;
  line-height: 22px;
  font-size: 1.167rem;
}

.box-card {
  width: 25rem;
  border-radius: 5px;
  height: auto;
  background-color: white;
}

a {
  color: black;
}
</style>
