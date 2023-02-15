<template>
  <div>
    <header class="main-header">
      <div class="container">
        <a href="/" class="logo">
          <img
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt=""
            class="logo-img"
          >
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ClientOnly>
                <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  :ellipsis="false"
                  @select="handleSelect"
                >
                  <el-menu-item
                    v-for="item in headerList"
                    :key="item.id"
                    :index="'{item.id}'"
                  >
                    {{ item.title }}
                  </el-menu-item>
                </el-menu>
              </ClientOnly>
              <div class="item">
                <img
                  style="max-width: 115px; vertical-align: middle"
                  src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7482b3ad2cd14edda31f05399c2ae759~tplv-k3u1fbpfcp-zoom-1.image"
                  alt=""
                >
              </div>
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
                      >
                      <div class="search-icon-container">
                        <img
                          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                          alt=""
                          class="search-icon"
                        >
                      </div>
                      <div class="typehead" style="display: none" />
                    </form>
                  </li>
                  <li class="creator-item">
                    <div class="add-group">
                      <el-dropdown split-button type="primary" trigger="click">
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
              <li class="vip-entry">
                <div class="vip-title">
                  <div class="vip-entry-img">
                    <img
                      class="vip-img"
                      src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
                      alt="vip"
                    >
                  </div>
                  <div class="vip-words">
                    会员
                  </div>
                </div>
              </li>
              <li class="notification">
                <a href="#" class="notification-a">
                  <svg
                    t="1675881482944"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="835"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M847 733.1l-77.5-154.8c-0.8-1.7-1.3-3.5-1.3-5.4l-0.2-171.4c-0.1-96.7-65.6-178.1-154.5-202.4v-0.1c0-55.6-45.1-100.7-100.7-100.7-55.5 0-100.5 44.9-100.7 100.4C322.2 222.6 255.9 304.6 256 402l0.2 171.4c0 1.9-0.4 3.7-1.3 5.4l-77.4 154.6c-22.6 45.2 10.3 98.5 60.9 98.4l547.9-0.4c50.5 0.1 83.4-53.1 60.7-98.3zM421.5 860.8c-10.1 0-15.6 11.7-9.3 19.6 23.4 29.2 59.4 47.9 99.7 47.9 40.4 0 76.4-18.7 99.9-48 6.3-7.9 0.8-19.6-9.3-19.5h-181z"
                      p-id="836"
                      fill="#8a919f"
                    />
                  </svg>
                  <span class="count"> 3 </span>
                </a>
              </li>
              <li class="menu">
                <div class="avatar-wrapper">
                  <img
                    class="avatar"
                    src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3114521287~100x100.awebp"
                    alt=""
                  >
                </div>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

async function getHeaderList () {
  const { data } = await useAsyncData('header', () => $fetch('/api/header'))
  if (data.value.data[0].attributes.show !== true) {
    ElMessage({
      showClose: true,
      message: 'headers 获取失败!',
      type: 'error'
    })
  }
  return data.value.data[0].attributes.headerTags
}
const headerList = await getHeaderList()

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
          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
          }
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
                  width: 260px;
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
                .add-group {
                  display: flex;
                  align-items: center;
                  position: relative;
                  cursor: pointer;
                  width: 115px;
                  height: 3rem;
                }
              }
            }
          }
          .vip-entry {
            color: #86909c;
            padding: 0 1rem;
            font-size: 1.167rem;
            margin: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .vip-title {
              display: flex;
              align-items: center;
              height: 100%;
              position: relative;
              .vip-entry-img {
                position: relative;
                display: flex;
                align-items: center;
                height: 100%;
                .vip-img {
                  width: 24px;
                  height: 24px;
                }
              }
              .vip-words {
                color: #86909c;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                margin-left: 4px;
              }
            }
          }
          .notification {
            position: relative;
            color: #86909c;
            padding: 0 1rem;
            font-size: 1.167rem;
            margin: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 2rem;
            .count {
              position: absolute;
              left: 27px;
              bottom: 60%;
              margin: 0;
              line-height: 11px;
              text-align: center;
              border-radius: 3rem;
              word-break: normal;
              display: inline-block;
              color: #f1f1f1;
              transform: scale(0.8);
              font-size: 1rem;
              font-weight: 500;
              padding: 3px 5px;
              background: #f03535;
              border-radius: 50px;
              border: 1px solid #fff;
            }
          }
          .menu {
            position: relative;
            padding-left: 0;
            background-color: #fff;
            .avatar-wrapper {
              margin-right: 2rem;
              .avatar {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
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
