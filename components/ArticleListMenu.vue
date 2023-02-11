<template>
  <main class="homeBody">
    <div class="articleBody">
      <header class="listHeader">
        <client-only>
          <el-menu
            class="articleListMenu"
            mode="horizontal"
            :default-active="articleListChangeIndex"
            :ellipsis="false"
            @select="articleListSelect"
          >
            <div
              v-for="(item, i) in articleListChange"
              :key="item.sort"
              index="{item.sort}"
              style="padding: 0"
            >
              <el-menu-item>
                {{ item.title }}
              </el-menu-item>
              <a v-if="i !== 2" class="rightLine" />
            </div>
          </el-menu>
        </client-only>
        <el-main>
          <ArticleList />
        </el-main>
      </header>
      <div class="rightBox">
        <AppAdvertise />
        <AppAuthor />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const articleListChangeIndex = ref('-1')
const articleListSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

async function getArticleListTags () {
  const { data } = await useAsyncData('articleListChange', () => $fetch('/api/articleListChange'))
  if (data.value.data[0].attributes.show !== true) {
    ElMessage({
      showClose: true,
      message: 'articleListTags 获取失败!',
      type: 'error'
    })
  }
  return data.value.data[0].attributes.articleListTags
}
const articleListChange = await getArticleListTags()
</script>

<style lang="less" scoped>
.homeBody {
  position: relative;
  max-width: 960px;
  margin: 66px auto;
  height: 100%;
  background-color: #f4f5f5;
}

.articleBody {
  margin: auto;
  width: 700px;
}

.listHeader {
  border: 1px solid hsla(0, 0, 59.2, 0.1);
}

.el-menu-item {
  color: #909090;
  line-height: normal;
  align-content: center;
  padding: 1.5rem 1.6rem;
  transition: none;
  height: 30px;
}

.el-menu--horizontal {
  border-right: inherit;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: white;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.rightLine {
  height: 16px;
  position: absolute;
  border-right: solid 1px hsla(0, 0%, 59.2%, 0.2);
  margin-top: -25px;
  margin-left: 65px;
}

.rightBox {
    position: absolute;
    width: 20rem;
    height: 600px;
    top: 0;
    right: -125px;
    z-index: 1;
}
.el-main {
  background-color: white;
  padding: 0;
}
</style>
