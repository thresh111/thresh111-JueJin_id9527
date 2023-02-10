<template>
  <div class="main">
    <el-container>
      <el-space>
        <el-main>
          <div class="main-article">
            <h1 class="article-title">
              光明正大
            </h1>
            <div class="author-info-block">
              <div class="author-png">
                <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                  <el-avatar
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
                  />
                </a>
              </div>
              <div class="author-name">
                <a href="https://www.baidu.com" target="_blank" class="avatar-link author-name">
                  <span style="max-width: 128px;">官方账号</span>
                  <span>
                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" class="level">
                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg">
                  </span>
                </a>
                <div class="time-readsum">
                  <span class="time">time</span>
                  <span class="readsum">   s</span>
                </div>
              </div>
            </div>
            <div class="author-article">
              <span>123456</span>
            </div>
          </div>
        </el-main>
        <el-aside class="aside-author">
          <el-space direction="vertical">
            <div class="author-info ">
              <div class="author-info-block">
                <div class="author-png">
                  <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                    <el-avatar
                      src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
                    />
                  </a>
                </div>
                <div class="author-name">
                  <a href="https://www.baidu.com" target="_blank" class="avatar-link author-name">
                    <span>官方账号</span>
                    <span>
                      <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" class="level">
                      <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg">
                    </span>
                  </a>
                  <div class="author-identity">
                    <span>前端工程师</span>
                  </div>
                </div>
              </div>
              <div class="button">
                <div class="subscribe">
                  <el-button
                    class="my_button"
                    :style="{backgroundColor:bg_color, color: ft_color,}"
                    @click="favor"
                    @mouseenter="change()"
                    @mouseleave="goback()"
                  >
                    {{ content }}
                  </el-button>
                </div>
                <div class="message">
                  <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                    <el-button class="my_button">
                      私信
                    </el-button>
                  </a>
                </div>
              </div>
              <el-divider />
              <div>
                <span>获得点赞数</span>
              </div>
              <div>
                <span>文章被阅读</span>
              </div>
            </div>
            <div class="article-directory ">
              <span>目录</span>
              <el-divider />
              <div class="directory">
                <span>
                  1234
                </span>
              </div>
            </div>
          </el-space>
        </el-aside>
      </el-space>
    </el-container>
  </div>
</template>
<script>
import '~/assets/style/app.css'
export default {
  name: 'Zan',
  data () {
    return {
      liked: false,
      content: '关注',
      bg_color: '#1D7DFA',
      ft_color: '#fff'
    }
  },
  methods: {
    favor (e) {
      this.liked = !this.liked
      if (this.liked) {
        this.content = '已关注'
        this.bg_color = '#FFFFFF'
        this.ft_color = '#000000'
      } else {
        this.content = '关注'
        this.bg_color = '#1D7DFA'
        this.ft_color = '#fff'
      }
    },
    change () {
      this.bg_color = '#FFFFFF'
      this.ft_color = '#0000F0'
    },
    goback () {
      if (this.liked) {
        this.bg_color = '#FFFFFF'
        this.ft_color = '#00000'
      } else {
        this.bg_color = '#1D7DFA'
        this.ft_color = '#fff'
      }
    }
  }
}
</script>

<style>
</style>
