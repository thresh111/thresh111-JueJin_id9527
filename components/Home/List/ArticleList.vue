<template>
  <div v-if="isReloadData">
    <div v-for="item in pageTicket" :key="item.id" class="articleDiv">
      <div class="authorAndTime">
        <client-only>
          <el-menu class="articleListMenu" mode="horizontal" :ellipsis="false">
            <div>
              <el-menu-item style="padding-left: 0;padding-top:0;padding-bottom:0;padding-right: 8px">
                {{ item.attributes.author }}
              </el-menu-item>
              <a class="rightLine" />
            </div>
            <div>
              <el-menu-item style="padding-left: 0;padding-top:0;padding-bottom:0;padding-right: 8px">
                {{ item.attributes.date }}
              </el-menu-item>
              <a
                class="rightLineSec"
                :style="item.attributes.articleTags.tags.num === 0 ? 'border-right:none' : 'padding-left: 30px'"
              />
            </div>
            <div v-for="(item1, i) in item.attributes.articleTags.tags.tag" :key="item1">
              <el-menu-item style="padding-left: 0;padding-top:0;padding-bottom:0;padding-right: 8px">
                {{ item1 }}
                <a
                  class="rightPoint"
                  :style="i === item.attributes.articleTags.tags.tag.length - 1 ? 'background:none' : ''"
                />
              </el-menu-item>
            </div>
          </el-menu>
        </client-only>
        <!--  -->
      </div>
      <div class="lessArticle">
        <div class="articleIntro">
          <!-- <Nuxt-link :to="'/' + item.attributes.uid" /> -->
          <nuxt-link :to="{ path: '/article/' + item.attributes.uid }" target="_blank" class="articleTittle">
            {{ item.attributes.title }}
          </nuxt-link>
          {{ item.attributes.Info }}
        </div>
        <img v-if="item.attributes.imageUrl !== null" class="articleImg" :src="nuxtUrl + item.attributes.imageUrl">
      </div>
      <div v-if="item.attributes.top !== true" class="touristPanel">
        <a class="panelItem">
          <i v-if="item.attributes.top !== true" class="touristView" /> <i v-else />
          <span>{{ (item.attributes.view) }}</span>
        </a>
        <a class="panelItem">
          <i v-if="item.attributes.top !== true" class="touristGood" /><i v-else />
          <span>{{ (item.attributes.good) }}</span>
        </a>
        <a class="panelItem">
          <i v-if="item.attributes.top !== true" class="touristTalk" /> <i v-else />
          <span>{{ (item.attributes.talk) }}</span>
        </a>
      </div>
    </div>
    <div>
      <el-pagination
        background
        :current-page="currentpage"
        :page-size="pagesize"
        layout="prev,pager,next"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
// import AL from '@/components/Home/List/ArticleList.js'
export default defineComponent({
  props: ['getdata'],
  async setup () {
    const runtimeConfig = useRuntimeConfig()
    const nuxtUrl = runtimeConfig.public.apiBase
    async function getArticleList () {
      const { data } = await useAsyncData('articleList', () => $fetch('/api/articleList'))
      return data.value
    }
    const articleList = await getArticleList()
    return {
      articleList,
      nuxtUrl
    }
  },
  data () {
    return {
      total: 0,
      currentpage: 1,
      pagesize: 5,
      ticket: [],
      pageTicket: [],
      tag: 1,
      isReloadData: true
    }
  },
  computed: {
    tapdata () {
      return this.getdata
    }
  },
  watch: {
    'getdata' (newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
      this.gettag()
    }
  },
  created () {
    this.getTicket()
    this.tag = this.getdata
  },
  methods: {
    getTicket () {
      this.ticket = this.articleList.data
      this.total = this.articleList.data.length
      this.getPageInfo()
    },
    getPageInfo () {
      this.pageTicket.length = 0
      for (let i = (this.currentpage - 1) * this.pagesize; i < this.total; i++) {
        this.pageTicket.push(this.ticket[i])
        if (this.pageTicket.length === this.pagesize) { break }
      }
    },
    handleCurrentChange (pageNumber) {
      this.currentpage = pageNumber
      this.getPageInfo()
      this.reloadPart()
    },
    reloadPart () {
      this.isReloadData = false
      this.$nextTick(() => {
        this.isReloadData = true
      })
    },
    gettag () {
      this.tag = this.getdata
      if (this.tag === 1) {
        this.getRecommend()
      } else if (this.tag === 3) {
        this.getNew()
      } else {
        this.getHot()
      }
    },
    getRecommend () {
      this.currentpage = 1
      this.ticket = this.ticket.sort((a, b) => a.id - b.id)
      this.getPageInfo()
      this.reloadPart()
    },
    getNew () {
      this.currentpage = 1
      this.ticket = this.ticket.sort((a, b) => b.id - a.id)
      this.getPageInfo()
      this.reloadPart()
    },
    getHot () {
      this.currentpage = 1
      this.ticket = this.ticket.sort((a, b) => b.attributes.view - a.attributes.view)
      this.getPageInfo()
      this.reloadPart()
    }
  }
})

</script>

<style lang="less" scoped>
.articleDiv {
  padding: 12px 20px 12px;
  border-bottom: 1px solid #e5e6eb;
}

.authorAndTime {
  display: flex;
  font-size: 13px;
  line-height: 22px;
}

.lessArticle {
  display: flex;
  margin-top: 2px;
}

.articleTittle {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: -webkit-box;
  margin-bottom: 8px;
  text-decoration: none;
}

.articleIntro {
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #86909c;
}

.articleImg {
  width: 120px;
  height: 80px;
  border-radius: 2px;
  margin-left: 24px;
}

.rightLine {
  height: 13px;
  position: absolute;
  border-right: solid 1px hsla(0, 0%, 59.2%, 0.2);
  margin-top: -20px;
  margin-left: 46px;
}

.rightLineSec {
  height: 13px;
  position: absolute;
  border-right: solid 1px hsla(0, 0%, 59.2%, 0.2);
  margin-top: -20px;
  margin-left: 10px;
}

.rightPoint {
  width: 2px;
  height: 2px;
  right: 1px;
  margin-right: 1px;
  position: absolute;
  border-radius: 50%;
  background: #4e5969;
}

.touristPanel {
  color: #4e5969;
  font-size: 13px;
  line-height: 20px;
  display: flex;
}

.touristPanel span {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
}

.touristView {
  vertical-align: middle;
  width: 17px;
  height: 17px;
  content: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);
}

.touristGood {
  vertical-align: middle;
  width: 17px;
  height: 17px;
  content: url(assets/img/touristGood.png)
}

.touristTalk {
  vertical-align: middle;
  width: 17px;
  height: 17px;
  content: url(assets/img/touristTalk.png);
}

.panelItem {
  margin-right: 20px;
}

.el-menu-item {
  color: #909090;
  line-height: normal;
  align-content: center;
  padding: 0.5rem 1rem;
  transition: none;
  height: 30px;
}

.el-menu--horizontal {
  border-right: inherit;
  border-bottom: none;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: white;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: none;
}
</style>
