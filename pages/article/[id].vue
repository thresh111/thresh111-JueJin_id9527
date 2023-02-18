<template>
  <div class="main">
    <div>
      <el-main class="articleBody">
        <div class="main-article">
          <h1 class="article-title">
            {{ articles.title }}
          </h1>
          <div class="author-info-block">
            <div class="author-png">
              <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                <el-avatar :src="articles.avatarImgUrl" />
              </a>
            </div>
            <div class="author-name">
              <a href="https://www.baidu.com" target="_blank" class="avatar-link author-name">
                <span style="max-width: 128px;">{{ articles.author }}</span>
                <span>
                  <img :src="articles.levelUrl" class="level">
                  <img :src="articles.superLevelUrl">
                </span>
              </a>
              <div class="time-readsum">
                <span class="time">{{ articles.time }}</span>
                <span class="readsum"> {{ articles.view }} </span>
              </div>
            </div>
          </div>
          <div class="author-article">
            <div ref="markdownContent">
              <div v-dompurify-html="result" class="markdown-body" />
              <!-- <v-md-preview ref="preview" :text="articles.articleText" /> -->
            </div>
          </div>
        </div>
      </el-main>
      <el-aside width="auto" class="aside-author">
        <div direction="vertical" width="auto">
          <div class="author-info aside-size">
            <div class="author-info-block">
              <div class="author-png">
                <a href="https://www.baidu.com" target="_blank" class="avatar-link">
                  <el-avatar :src="articles.avatarImgUrl" />
                </a>
              </div>
              <div class="author-name">
                <a href="https://www.baidu.com" target="_blank" class="avatar-link author-name">
                  <span>{{ articles.author }}</span>
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
                <el-button class="my_button" style="background-color: #1D7DFA; color: #ffffff" @click="favor"
                  @mouseenter="change()" @mouseleave="goback()">
                  关注
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
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" class="iocn like">
                  <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                    <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" />
                    <path fill="#7BB9FF"
                      d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z" />
                  </g>
                </svg>
                <span class="content">{{ articles.good }}</span>
              </div>
              <div class="kan icon">
                <svg width="25" height="25" viewBox="0 0 25 25" class="view icon">
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" />
                    <path fill="#7BB9FF"
                      d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z" />
                  </g>
                </svg>
                <span class="content">{{ articles.view }}</span>
              </div>
            </div>
          </div>
          <ArticleReleatedArticle />
          <div class="article-directory aside-size">
            <span>目录</span>
            <el-divider />
            <div style="display: table;">
              <div v-for="(heading, i) in tocs" :key="i + ''" class="catalog-item"
                :style="{ padding: `10px 0 10px ${(Number(heading[1]) - 1) * 10}px` }">
                <nuxt-link active-class exact-active-class
                  style="font-size: 1.167rem; pointer; color: black; margin-left: 20px" :to="`#${heading[2]}`">
                  {{ heading[3] }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import 'github-markdown-css'
import './article.scss'
import MarkdownItAnchor from 'markdown-it-anchor'
export default {
  async setup() {
    async function markdown() {
      const route = useRoute()
      const config = useRuntimeConfig()
      const { data: article } = await useLazyAsyncData(route.params.id, () => $fetch(`${config.public.apiBase}/api/author-articles/${route.params.id}`))
      // 处理其他数据
      const articles = article.value.data.attributes
      const md = new MarkdownIt()
      md.use(MarkdownItAnchor)
      const result = md.render(article.value.data.attributes.articleText)
      const lines = result.split('\n')
      const regex = /<h([1-6])\s+id="([^"]+)"[^>]*>(.+?)<\/h\1>/gi
      const toc = []
      for (let i = 0; i < lines.length; i++) {
        toc[i] = regex.exec(lines[i])
      }
      const tocs = toc.filter(line => line !== null)
      return { result, tocs, articles }
    }
    const { result, tocs, articles } = await markdown()
    return { result, tocs, articles }
  },
  methods: {
    favor() {
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
    change() {
      this.bg_color = '#FFFFFF'
      this.ft_color = '#0000F0'
    },
    goback() {
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
