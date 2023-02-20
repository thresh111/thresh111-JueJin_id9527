<template>
  <main class="homeBody">
    <div class="articleBody">
      <header class="listHeader">
        <client-only>
          <el-menu class="articleListMenu" mode="horizontal" :ellipsis="false">
            <el-menu-item>
              推荐
            </el-menu-item>
            <el-menu-item>
              最新
            </el-menu-item>
            <el-menu-item>
              热门
            </el-menu-item>
          </el-menu>
        </client-only>
        <el-main>
          <div style="float: left;">
            <HomeListArticleList />
          </div>
        </el-main>
      </header>
      <aside class="rightBox">
        <HomeSidebarAppAdvertise />
        <HomeSidebarAppAuthor />
      </aside>
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';
.homeBody {
  position: relative;
  max-width: 960px;
  margin: 25px auto;
  height: 100%;
}

.articleBody {
  margin: auto;
  width: 100%;
}

.listHeader {
  border: 1px solid hsla(0, 0%, 59.2%, 0.1%);
  width: 58rem;
  @include media-ipad {
    width: 100%;
  }
  @include media-between-mini-and-normal-mobile {
    width: 100%;
  }
  @include media-mini-mobile {
    width: 100%;
  }
}

.el-menu-item {
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
  top: 0;
  right: -0.5rem;
  z-index: 1;
  @include media-ipad {
    display: none;
  }
  @include media-mini-mobile {
    display: none;
  }
  @include media-between-mini-and-normal-mobile {
    display: none;
  }
}
.el-main {
  background-color: white;
  padding: 0;
}
</style>
