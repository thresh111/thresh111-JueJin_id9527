<template>
    <el-container >
      <el-main>
        <div class="main-article">
          <h1 class="article-title" >
            光明正大
          </h1>
          <div class="author-info-block" >
              <div class="author-png">
                <a href="https://www.baidu.com" target="_blank"  class="avatar-link" >
                  <el-avatar
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
                    />
                </a>
              </div>  
              <div class="author-article">
                <div class="author-name">
                  <a href="https://www.baidu.com" target="_blank"  class="avatar-link author-name" >
                      <span>官方账号</span>
                      <span>
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" class="level">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg">
                      </span>
                  </a>
                </div>
                <div class="time-readsum">
                    <span class="time">time</span>
                    <span class="readsum">   s</span>
                </div>
              </div>
              <!-- <div class="subscribe"> -->
                <!-- <button   @click="favor"
                      class="my_button" :style="{backgroundColor:bg_color, color: ft_color,}"
                      @mouseenter="change()" @mouseleave="goback()">
                  {{content}}
              </button> -->
                <!-- <el-button>
                    关注
                </el-button> -->
              <!-- </div> -->

          </div>
        </div>
      </el-main>
      <el-aside width="100px">
        1
      </el-aside>
      
    </el-container>
</template>
<style>
  .main-article{
    border-radius: 4px 4px 1 0
  }
  .el-container{
    background-color: antiquewhite;
  }
</style>

<script>
import '@/style/app.css'
export default {
        name: "zan",
        data () {
            return{
                liked:false,
                content:'+关注',
                bg_color:"#fef0f0",
                ft_color:"#f56c6c",
            }
        },
        methods:{
            favor (e) {
                this.liked=!this.liked;
                if(this.liked){
                    this.content="已关注";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }

                else{
                    this.content="+关注"
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";

                }
            },
            change(){
                this.bg_color="#ff9999";
                this.ft_color="#fef0f0";
            },
            goback(){
                if(this.liked){
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }
                else{
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                }
            }
        }
    }
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Share, 
  Upload
} from '@element-plus/icons'
</script>


<!-- <script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script> -->
