<template>
  <div class="homeBody">
    <div class="articleBody">
      <header class="listHeader">
        <client-only>
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">推荐</el-menu-item>
            <a class="rightLine"></a>
            <el-menu-item index="2">最新</el-menu-item>
            <a class="rightLine"></a>
            <el-menu-item index="3">热榜</el-menu-item>
            <a class="rightLine"></a>
          </el-menu>
        </client-only>
      </header>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
  padding: 0.5rem 1rem;
  transition: none;
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
  border-right: solid 1px hsla(0, 0%, 59.2%, 0.2);
  margin-top: 10px;
}
</style>
