<<<<<<< HEAD
<template>
    <div class="main">
        <div class="allBox">
            <div class="articleList">
                <div class="header"></div>
            </div>
            <div class="rightBox">
                <Advertise></Advertise>
                <Author></Author>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Advertise from '../component/advertise.vue'
import Author from '../component/author.vue'
export default defineComponent({
    setup() {
        return {};
    },
    updated() {
        window.scroll(0, 0);
    },
    components: { Advertise,Author }
})
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
.main {
    position: relative;
    margin: 0 auto;
    width: auto;
    max-width: 960px;
}

.main .allBox {
    margin-top: 5.20rem;
}

.main .allBox .articleList {
    margin-right: 21.667rem;
    width: 688px;
    height: 5000px;
    background-color: skyblue;
}

.rightBox {
    position: absolute;
    width: 15rem;
    height: 600px;
    top: 0;
    right: 0;
    z-index: 1;
}

</style>
=======
<template>
  <div class="contain">
    <HomeNav />
    <HomeListArticleListMenu />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contain {
  position: relative;
}
</style>
>>>>>>> test
