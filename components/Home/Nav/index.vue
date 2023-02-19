<template>
  <nav class="view-nav">
    <div class="nav-list">
      <a v-for="item in navlist" :key="item.id" href="#" class="nav-item">
        <div class="category-popover-box">
          <span>{{ item.title }}</span>
        </div>
      </a>
      <a href="#" class="nav-item right">标签管理</a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
async function getNavList () {
  const { data } = await useAsyncData('nav-lists', () => $fetch('/api/nav-lists'))
  if (data.value.data[0].attributes.show !== true) {
    ElMessage({
      showClose: true,
      message: 'nvaList 获取失败!',
      type: 'error'
    })
  }
  return data.value.data[0].attributes.tags
}
const navlist = await getNavList()
</script>
<style lang="scss" scoped>
@import '@/assets/style/main.scss';
.view-nav {
  left: 0;
  // background-color: #fff;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  ::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 200%;
    z-index: -1;
  }
  .nav-list {
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    position: relative;
    left: 1rem;
    @include media-between-mini-and-normal-mobile {
      overflow-x: scroll;
    }
    @include media-mini-mobile {
      overflow-x: scroll;
    }
    .nav-item {
      height: 100%;
      align-items: center;
      display: flex;
      flex-shrink: 0;
      font-size: 1.16rem;
      // color: #71777c;
      padding: 0 1rem;
      .category-popover-box {
        position: relative;
      }
    }
    .right {
      position: absolute;
      top: 0;
      right: 4rem;
      @include media-mini-mobile {
        display: none;
      }
      @include media-between-mini-and-normal-mobile {
        display: none;
      }
    }
  }
}
.view-nav .nav-list .nav-item:first-child {
  padding: 0 1rem 0 0;
}
.view-nav .nav-list .nav-item:last-child {
  padding: 0 0 0 1rem;
}
</style>>
