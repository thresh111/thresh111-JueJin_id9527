<template>
  <div>
    <div class="author-list">
      <header>🎖️作者榜</header>
      <div class="user-list">
        <div v-for="(item, id) in authorList.data" :key="item.attributes.id" class="items">
          <div v-if="id < 3" href="" class="link">
            <img :src="item.attributes.authorImgUrl" alt="" class="head">
            <div class="user-info">
              <a href="" class="username">
                <span class="name">{{ item.attributes.authorName }}</span>
                <span class="rank"><img :src="item.attributes.authorLevelUrl" alt="" class="userlevel"></span></a>
              <div class="position">
                {{ item.attributes.authorInfo }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <span>完整榜单</span>
        <i class="right"><svg
          t="1675736242287"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2667"
          width="200"
          height="200"
        ><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" fill="#1296db" p-id="2668" /></svg></i>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
async function getAuthorList () {
  const { data } = await useAsyncData('authorList', () => $fetch('/api/authorList'))
  if (data.value.data[0].attributes.show !== true) {
    ElMessage({
      showClose: true,
      message: 'Advertise 获取失败!',
      type: 'error'
    })
  }
  return data.value
}
const authorList = await getAuthorList()

</script>

<style scoped>
.author-list {
    background-color: white;
}

.author-list header {
    padding: 12px;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
}

.items .link {
    display: flex;
    align-items: center;
    padding: 14px;
    cursor: pointer;
}

.items .link .head {
    display: inline-block;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50px;
    margin-right: 10px;
}

.user-info .username {
    font-size: .856rem;
    font-weight: 400;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
}
.rank img{
    width: 35px;
    height: 16px;
}
.position{
    color: #909090;
    font-size: 0.3rem;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.more{
    color: #007fff;
    padding: 1rem 0;
    text-align: center;
    border-top: 1px solid hsla(0,0%,59.2%,.1);
    cursor: pointer;
}
.right svg{
    width: 20px;
    height: 13px;
}
</style>
