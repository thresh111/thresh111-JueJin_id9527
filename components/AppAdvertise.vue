<template>
  <div>
    <div class="sidebar">
      <div class="banner">
        <a href="">
          <img src="~/assets/img/0.webp" alt="" style="width:100%;">
        </a>
        <div class="close">
          <i> <svg
            t="1675847168690"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3295"
            width="48"
            height="48"
          ><path d="M1007.603202 929.818395L592.684241 514.699473 1007.603202 99.780512c10.797891-10.797891 16.196837-24.795157 16.196837-38.992385 0-13.997266-5.398946-28.194493-16.196837-38.992384-21.595782-21.595782-56.388987-21.595782-77.984768 0L514.699473 436.914665 99.780512 21.795743C78.18473 0.199961 43.391525 0.199961 21.795743 21.795743s-21.595782 56.388987 0 77.984769l415.118922 414.918961L21.795743 929.818395c-21.595782 21.595782-21.595782 56.388987 0 77.984768s56.388987 21.595782 77.984769 0l414.918961-415.118922L929.818395 1007.603202c10.797891 10.797891 24.795157 16.196837 38.992384 16.196837 13.997266 0 28.194493-5.398946 38.992384-16.196837 21.395821-21.395821 21.395821-56.388987-0.199961-77.784807z" fill="#707070" p-id="3296" /></svg></i>
          <a href="" class="label">广告</a>
        </div>
      </div>
    </div>
    <div class="downLoad">
      <img src="~/assets/img/home.59780ae.png" alt="">
      <div class="contentBox">
        <div class="headline">
          下载稀土掘金APP
        </div>
        <div class="dec">
          一个帮助开发者成长的社区
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return {

    }
  }
})
</script>

<style  scoped>
    .sidebar{
    margin-bottom: 1.3375rem;
}
.sidebar .banner {
    position: relative;
    font-size: 0;
    height: 200px;
    cursor: pointer;
}
.sidebar .banner .close i{
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 1rem;
    color: #909090;
    opacity: .5;
    display: none;
}
.sidebar .banner .close .cha {
    position: absolute;
    font-size: 12px;
    top: 10;
    right: 10;
}
.sidebar .banner .close .label{
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 20px;
    color: black;
    text-align: center;
    background-color: gray;
    opacity: 0.7;
    bottom: 10px;
    right: 10px;
    border-radius: 10px;
    font-size: 14px;
}
.downLoad {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 12px;
    background-color: white;
}

.downLoad img {
    margin-right: 16px;
    width: 3.167rem;
    height: 3.167rem;
}

.downLoad .contentBox .headline{
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #1d2129;
}
.downLoad .contentBox .dec{
    margin-top: .5rem;
    font-size: 12px;
    line-height: 20px;
    color: #86909c;
}
</style>
