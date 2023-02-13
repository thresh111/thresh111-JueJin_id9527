<template>
  <div class="main">
    <el-container>
      <el-space>
        <el-main>
          <div class="main-article">
            <h1 class="article-title">
              {{ articles.title }}
            </h1>
            <div class="author-info-block">
              <div class="author-png">
                <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                  <el-avatar
                    :src="articles.avatarImgUrl"
                  />
                </a>
              </div>
              <div class="author-name">
                <a href="https://www.baidu.com" target="_blank" class="avatar-link author-name">
                  <span style="max-width: 128px;">{{ articles.authorName }}</span>
                  <span>
                    <img :src="articles.levelUrl" class="level">
                    <img :src="articles.superLevelUrl">
                  </span>
                </a>
                <div class="time-readsum">
                  <span class="time">{{ articles.time }}</span>
                  <span class="readsum"> {{ articles.read }} </span>
                </div>
              </div>
            </div>
            <div class="author-article">
              <div ref="markdownContent">
                <div class="MarkdownText" v-html="result" />
                <!-- {{ markdownoo }} -->
              </div>
            </div>
          </div>
        </el-main>
        <el-aside width="auto" class="aside-author">
          <el-space direction="vertical" width="auto">
            <div class="author-info aside-size">
              <div class="author-info-block">
                <div class="author-png">
                  <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                    <el-avatar
                      :src="articles.avatarImgUrl"
                    />
                  </a>
                </div>
                <div class="author-name">
                  <a href="https://www.baidu.com" target="_blank" class="avatar-link author-name">
                    <span>{{ articles.authorName }}</span>
                    <span>
                      <img :src="articles.levelUrl" class="level">
                      <img :src="articles.superLevelUrl">
                    </span>
                  </a>
                  <div class="author-identity">
                    <span class="author-identity">{{ articles.role }}</span>
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
                    {{ subscribe }}
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
              <div class="goodOfRead">
                <div class="zan icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" class="iocn like"><g fill="none" fill-rule="evenodd" transform="translate(0 .57)"><ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" /><path fill="#7BB9FF" d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z" /></g></svg>
                  <span class="content">{{ articles.good }}</span>
                </div>
                <div class="kan icon">
                  <svg width="25" height="25" viewBox="0 0 25 25" class="view icon"><g fill="none" fill-rule="evenodd"><circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" /><path fill="#7BB9FF" d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z" /></g></svg>
                  <span class="content">{{ articles.read }}</span>
                </div>
              </div>
            </div>
            <div class="article-directory aside-size">
              <span>目录</span>
              <el-divider />
              <div v-html="tocs" />
            </div>
          </el-space>
        </el-aside>
      </el-space>
    </el-container>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  name: 'Zan',
  markdown_content: '12345',
  setup () {
    function markdown () {
      const { data: article } = useLazyAsyncData('article', () => $fetch('/api/article'))
      // if (data.value.data[0].attributes.show !== true) {
      //   ElMessage({
      //     showClose: true,
      //     message: 'nvaList 获取失败!',
      //     type: 'error'
      //   })
      // }

      // 处理其他数据
      const articles = article.value.data[0].attributes
      // 处理markdown
      const md = new MarkdownIt()
      const result = md.render(article.value.data[0].attributes.articleText)
      const lines = result.split('\n')
      const regex = /<[hH][1-6]>.*?<\/[hH][1-6]>/g
      const toc = []
      for (let i = 0; i < lines.length; i++) {
        toc[i] = regex.exec(lines[i])
      }
      const tocs = toc.filter(line => line !== null)
      return { result, tocs, articles }
    }
    const { result, tocs, articles } = markdown()
    return { result, tocs, articles }
  },
  data () {
    return {
      liked: false,
      content: '# markdown: &nbsp #  Nuxt 3 Minimal Starter Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more. ## Setup Make sure to install the dependencies: ```bash # yarn yarn install # npm npm install # pnpm pnpm install ``` ## Development Server Start the development server on http://localhost:3000 ```bash npm run dev ``` 1. 解决基本布局问题，文章、作者信息和文章目录的布局 ✔使用eslint和prettier</br> ✔已使用element-plus自动导入</br> ✔2月6日凌晨完成了主页文章部分的菜单UI</br> ✔计划2月6日完成文章部分的UI。</br> ',
      bg_color: '#1D7DFA',
      ft_color: '#fff',
      subscribe: '关注',
      // message,
      str: '# 标题',
      catalog: ''
    }
  },
  methods: {
    // 生成目录
    // generate_catalog(){
    // this.$nextTick(() => {
    //   const article_content = this.$refs.markdownContent;
    //   const nodes = ["h1", "h2", "h3"];
    //   let titles = [];
    //   article_content.childNodes.forEach((e, index) => {
    //     if (nodes.includes(e.nodeName)) {
    //       const id = "header-" + index;
    //       e.setAttribute("id", id);
    //       titles.push({
    //         id: id,
    //         title: e.innerHTML,
    //         level: Number(e.nodeName.substring(1, 2)),
    //         nodeName: e.nodeName
    //       });
    //     }
    //   });
    //   this.catalog = titles;
    // });
    // },
    favor () {
      this.liked = !this.liked
      if (this.liked) {
        this.subscribe = '已关注'
        this.bg_color = '#FFFFFF'
        this.ft_color = '#000000'
      } else {
        this.subscribe = '关注'
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

<style lang="less" scoped>
.readsum {
  margin-left: 10px;
}
.MarkdownText{
  font-size: 16px;
}
.goodOfRead {
  box-sizing: border-box;
  vertical-align: middle;
}
.zan.icon {
    display: flex;
}
.article-title {
    margin: 0 0 1.667rem;
    font-size: 2.467rem;
    font-weight: 550;
    line-height: 1.31;
    color: #252933;
}

.avatar-link {
    text-decoration: none;
    width: 20px;
}

.author-info-block {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
}

.el-avatar {
    margin-top: 4px;
    height: 3.333rem;
    width: 3.333rem;
}

.author-name {
    /* display: flex; */
    font-size: 1.3rem;
    font-weight: 500;
    color: #515767;
    line-height: 2rem;
    overflow: hidden;
}

.author-png {
    display: flex;
    margin-right: 0.1rem;
    width: 3.333rem;
    height: 3.333rem;
    border-radius: 50%;
}

.level {
    width: 35px;
    height: 16px;
}

.author-identity {
    margin-top: 4px;
    font-size: 1rem;
    color: #515767;
    font-weight: 400;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.time-readsum {
    margin-top: 4px;
    font-size: 1rem;
    color: #515767;
    font-weight: 400;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.subscribe {
    margin: 0 0 0 auto;
    padding: 0 1rem;
    height: 34px;
    font-size: 14px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.el-main {
    position: relative;
    padding-top: 2.667rem;
    z-index: 1;
    border: 1px solid hsla(0, 0, 59.2, 0.1);
    border-radius: 1px;
    min-width: 800px;
    height: 100%;
    max-width: 800px;
    background-color: white;
    padding-left: 2.67rem;
    padding-right: 2.67rem;
    /* margin-left: 270px; */
    margin-bottom: 187px;
}

.el-aside {
    /* width: 400px; */
    overflow: hidden;
}

.aside-author {
    position: absolute;
    top: 0px;
    /* left: 50px; */
    margin-bottom: 0px;
    margin-left: 20px;
    margin-right: 10px;
    width: 25rem;
    /* padding: 1.667rem; */
    overflow: hidden;
}

.aside-size {
    padding: 1.4rem;
}

.author-info {
    display: block;
    border-radius: 5px;
    /* padding: 1.5rem; */
    width: 300px;
    background-color: white;
    border: 1px solid hsla(0, 0, 59.2, 0.1);
    overflow: hidden;
}

.article-directory {
    border-radius: 4px;
    /* padding: 1.5rem; */
    width: 300px;
    text-align: center;
    background-color: white;
    border: 1px solid hsla(0, 0, 59.2, 0.1);
}

.button {
    display: flex;
    position: relative;
    margin-top: 10px;
    margin-right: 25px;
    vertical-align: middle;
}

.my_button {
    width: 100px;
    height: 36px;
    vertical-align: middle;
    /* font-size: 14px;
    border-radius: 4px; */
}

.el-container {
    margin-top: 1.767rem;
    position: relative;
    padding: 0 0 8rem;
}

.directory {
    text-align: left;
}

.main {
    position: relative;
    max-width: 1140px;
    margin: 0 auto;
}

.content {
    font-size: 1.1rem;
    color: #252933;
    font-weight: 400;
    margin-left: 1rem;
    line-height: 25px;
}

.icon {
    vertical-align: middle;
}
</style>>
