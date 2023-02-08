<template>
  <div>
    <header class="main-header">
      <div class="container">
        <a href="/" class="logo">
          <img
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt=""
            class="logo-img"
          />
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ClientOnly>
                <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  :ellipsis="false"
                >
                  <el-menu-item
                    v-for="item in headerList"
                    :key="item.id"
                    :index="'{item.id}'"
                    >{{ item.title }}</el-menu-item
                  >
                </el-menu>
              </ClientOnly>
            </li>
            <ul class="right-side-nav">
              <li class="search-add">
                <ul class="search-add-ul">
                  <li class="search">
                    <form class="search-form">
                      <input
                        class="search-input"
                        type="search"
                        :maxlength="32"
                        placeholder="搜索稀土掘金"
                      />
                      <div class="search-icon-container">
                        <img
                          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                          alt=""
                          class="search-icon"
                        />
                      </div>
                      <div class="typehead" style="display: none"></div>
                    </form>
                  </li>
                  <li class="creator-item">
                    <div class="add-group">
                      <el-dropdown split-button type="primary">
                        创作者中心
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item>Action 4</el-dropdown-item>
                            <el-dropdown-item>Action 5</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </div>
                  </li>
                </ul>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const { data: headerList } = await useFetch("/api/header");
</script>

<style lang="scss" scoped>
.main-header {
  height: 60px;
  background-color: #fff;
  .container {
    display: flex;
    height: 100%;
    max-width: 1440px;
    align-items: center;
    margin: auto;
    .logo {
      margin-right: 1rem;
      margin-left: 24px;
      display: inline-block;
      height: 22px;
      width: auto;
      .logo-img {
        display: block;
        width: 107px;
        height: 22px;
      }
    }
    .main-nav {
      height: 60px;
      flex: 1 0 auto;
      line-height: normal;
      .nav-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex-direction: row-reverse;
        height: 100%;
        margin: 0;
        .main-nav-list {
          display: flex;
          order: 99;
        }
        .right-side-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          height: 100%;
          margin: 0;
          order: 0;
          .search-add {
            flex: 1 1 auto;
            height: 5rem;
            display: flex;
            justify-content: flex-end;
            .search-add-ul {
              width: 514px;
              display: flex;
              justify-content: flex-start;
              .search {
                color: #86909c;
                padding: 0 1rem;
                font-size: 1.167rem;
                margin: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding-left: 0;
                .search-form {
                  width: 360px;
                  background-color: #fff;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  border-radius: 4px;
                  position: relative;
                  height: 2.834rem;
                  border: 1px solid #c2c8d1;
                  .search-input {
                    border: none;
                    width: calc(100% - 44px);
                    padding: 0.6rem 0 0.6rem 1rem;
                    box-shadow: none;
                    outline: none;
                    font-size: 1.1rem;
                    color: #8a919f;
                    background-color: transparent;
                  }
                  .search-icon-container {
                    position: relative;
                    left: -2px;
                    width: 44px;
                    height: 30px;
                    background: #f2f3f5;
                    border-radius: 2px;
                    .search-icon {
                      display: inline-block;
                      width: 1.33rem;
                      cursor: pointer;
                      margin: 7px 15px;
                    }
                  }
                }
              }
              .creator-item {
                overflow: visible;
                width: 11rem;
                padding-left: 5px;
                cursor: default;
                color: #86909c;
                padding: 0 1rem;
                font-size: 1.167rem;
                margin: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
              }
            }
          }
        }
      }
    }
  }
}
</style>
