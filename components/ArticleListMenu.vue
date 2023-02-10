<template>
  <div class="homeBody">
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
              v-for="item in articleListChange"
              :key="item.sort"
              index="{item.sort}"
              style="padding: 0"
            >
              <el-menu-item>
                {{ item.title }}
              </el-menu-item>
              <a class="rightLine" />
            </div>
          </el-menu>
        </client-only>
        <el-main>
          <ArticleList />
        </el-main>
      </header>
    </div>
  </div>
</template>

<script lang="ts" setup>
const articleListChangeIndex = ref('-1')
const articleListSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const { data: articleListChange } = await useFetch('/api/articleListChange')
</script>

<style lang="less" scoped>
.homeBody {
  // border-radius: 2px;
  height: 100%;
  // max-width: 960px;
  background-color: #f4f5f5;
}

.articleBody {
  width: 700px;
}

.listHeader {
  border: 1px solid hsla(0, 0, 59.2, 0.1);
}

.el-menu-item {
  color: #909090;
  line-height: normal;
  align-content: center;
  padding: 0.5rem 1rem;
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
  margin-top: -22px;
  margin-left: 60px;
}

.el-main {
  background-color: white;
  padding: 0;
}
</style>
