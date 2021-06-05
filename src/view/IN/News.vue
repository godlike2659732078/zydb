<template>
  <div id="HomePage">
    <!-- MAIN BACKGROUND -->
    <div class="buildify_tm_mainbg">
      <!-- PATTERN -->
      <div class="marketify_pattern_overlay"></div>
      <!-- /PATTERN -->
    </div>
    <!-- /MAIN BACKGROUND -->

    <!-- WRAPPER ALL -->
    <div class="buildify_tm_wrapper_all">
      <div class="buildify_tm_wrapper">
        <div class="buildify_tm_animate_submenu"></div>

        <!-- LEFTPART -->
        <div class="buildify_tm_leftpart_wrap">
          <!-- LEFT PATTERN -->
          <div class="buildify_tm_build_pattern"></div>
          <!-- /LEFT PATTERN -->

          <!-- MENUBAR -->
          <div class="buildify_tm_menubar">
            <div class="buildify_tm_menubar_in">
              <div class="buildify_tm_menubar_content">
                <div class="menu_logo">
                  <a href="#"
                    ><img src="../../assets/img/logo_black.png" alt=""
                  /></a>
                  <div class="buildify_tm_slider_title_wrap">
                    <div class="title">
                      <h3>China Italy Geographical Indication Development</h3>
                    </div>
                  </div>
                </div>
                <div class="menu_nav">
                  <div class="menu_nav_in">
                    <div class="menu_nav_content scrollable">
                      <Headers></Headers>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buildify_tm_home_button">
              <span class="first">
                <a href="index.html"
                  ><img class="svg" src="../../assets/img/svg/home.svg" alt=""
                /></a>
              </span>
              <span class="second">We build your dream</span>
            </div>
          </div>
          <!-- /MENUBAR -->
        </div>
        <!-- /LEFTPART -->

        <!-- RIGHTPART -->
        <div class="buildify_tm_rightpart_wrap">
          <div class="buildify_tm_rightpart">
            <!-- CONTENT -->
            <div class="buildify_tm_content_wrap">
              <div class="buildify_tm_content">
                <!-- TOPBAR -->
                <div class="buildify_tm_topbar_info">
                  <div class="buildify_tm_connection">
                    <div class="phone_numb">
                      <div class="phone_numb_in">
                        <img src="../../assets/img/logo_black.png" alt="" />
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="banner text-center">NEWS</div>
                <div>
                  <!-- <div class="container text-center">
               
            </div> -->
                  <div class="nav container text-center">
                    <div class="active"></div>
                  </div>
                  <!-- 新闻列表 -->
                  <div>
                    <div class="row newsPage-container">
                      <div class="col-xs-12 col-sm-12 col-md-12 wow fadeInUp">
                        <div class="col-xs-12 col-sm-12 col-md-10">
                          <div class="headRoute">
                            Pagina iniziale>notizia >elenco delle notizie
                          </div>
                          <a-spin :spinning="showLoading" size="large">
                            <div class="newsPage_newsBox">
                              <div class="newsPage_newsPage_newsBox_content">
                                <ul>
                                  <li
                                    class="wow fadeInUp"
                                    v-for="(item, index) in newsList"
                                    :key="index"
                                  >
                                    <div
                                      class="newsPage_newsOne"
                                      @click="gotoNewsDetail(item.id)"
                                    >
                                      <div class="newsImgBox">
                                        <img
                                          :src="getImageUrl(item.image)"
                                          alt="图片"
                                        />
                                      </div>

                                      <div class="newsPage_title_time">
                                        <p class="news_title">
                                          {{ item.title }}
                                        </p>
                                        <p class="news_time">
                                          {{ item.createTime }}
                                        </p>

                                        <p class="news_content">
                                          {{ item.introduct }}
                                        </p>
                                      </div>
                                      <div class="detailBtn">Dettagli</div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </a-spin>
                        </div>
                      </div>
                      <div
                        class="col-xs-12 col-sm-12 col-md-2 wow zoomInDown"
                      ></div>
                    </div>
                  </div>
                  <div class="contaianer-fuild text-center more">
                    <i class="glyphicon glyphicon-th"></i>
                  </div>
                  <!--分页-->
                  <div class="page_barBox">
                    <div class="page-bar">
                      <ul>
                        <li v-if="cur > 1">
                          <a v-on:click="cur--, pageClick()">precedente</a>
                        </li>
                        <li v-if="cur == 1">
                          <a class="banclick">precedente</a>
                        </li>
                        <li
                          v-for="index in indexs"
                          v-bind:class="{ active: cur == index }"
                          :key="index"
                        >
                          <a v-on:click="btnClick(index)">{{ index }}</a>
                        </li>
                        <li v-if="cur != all">
                          <a v-on:click="cur++, pageClick()">successiva</a>
                        </li>
                        <li v-if="cur == all">
                          <a class="banclick">successiva</a>
                        </li>
                        <li>
                          <a
                            >Totale<i>{{ all }}</i
                            >pagine</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Footers></Footers>
            </div>
          </div>
          <!-- /RIGHTPART -->
        </div>
      </div>
    </div>
    <!-- / WRAPPER ALL -->
  </div>
</template>
<script>
import { WOW } from "wowjs";
import { findAllArticles, findFiveArticles } from "../../server/api";
export default {
  name: "NewsInformation",
  data() {
    return {
      showLoading: true,
      newsList: [],
      hotList: [],
      all: 10, //总页数
      cur: 1, //当前页码
      createTime: "",
    };
  },
  methods: {
    getNews() {
      findAllArticles({
        language: 1,
        type: 1,
        pageSize: 10,
        pageNum: this.cur,
      }).then((res) => {
        if (res) {
          this.showLoading = false;
          this.newsList = res.data;
          this.all = res.count;
        }
      });
    },
    onPanelChange(value, mode) {
      let d = new Date(value._d);
      let month =
        d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
      let date = d.getFullYear() + "-" + month + "-" + d.getDate();
      let hour = d.getHours() > 9 ? d.getHours() : "0" + d.getHours();
      let minute = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
      let time = date;
      //console.log(time);
      findAllArticles({
        language: 1,
        type: 1,
        pageSize: 10,
        createTime: time,
        pageNum: this.cur,
      }).then((res) => {
        //console.log(res);
        this.newsList = res.data;
        this.all = res.count;
      });
    },

    gotoNewsDetail(id) {
      this.$router.push({ path: "/IN/newsDetail", query: { id: id } });
    },
    //分页
    btnClick: function (data) {
      //页码点击事件
      this.showLoading = true;
      if (data != this.cur) {
        this.cur = data;
      }
      //console.log(this.cur);
      this.getNews();
      window.scrollTo(0, 0);
    },
    pageClick: function () {
      this.showLoading = true;
      //console.log(this.cur);
      this.getNews();
      window.scrollTo(0, 0);
    },
  },
  computed: {
    //分页
    indexs: function () {
      var left = 1;
      var right = this.all;
      var ar = [];
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2;
          right = this.cur + 2;
        } else {
          if (this.cur <= 3) {
            left = 1;
            right = 5;
          } else {
            right = this.all;
            left = this.all - 4;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    },
  },
  mounted() {
    findFiveArticles({ language: 1 }).then((res) => {
      //console.log(res);
      this.hotList = res.data;
    });
    this.getNews();
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: true,
    });
    wow.init();
  },
};
</script>
<style scoped>
#NewsInformation {
  background-color: #f0f0f0be;
}
.banner {
  margin-top: 80px;
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../../assets/img/banner_news.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.headRoute {
  margin-bottom: 10px;
  display: block;
  padding: 10px;
  color: #1d2088;
  background-color: #fff;
}
/* 新闻列表 */
#newsPage {
  padding: 20px 20px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#newsPage .newsPage-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.newsPage_newsBox {
  height: auto;
  min-height: 900px;
  border-radius: 2px;
}
.newsPage_newsBox .newsPage_newsBox_header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 40px;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.newsPage_newsBox .newsPage_newsBox_header p:first-child {
  font-size: 18px;
  color: #1d2088;
}
.newsPage_newsBox .newsPage_newsBox_header p:last-child {
  font-size: 14px;
  color: #aaa;
  cursor: pointer;
}
.newsPage_newsOne {
  padding: 10px 20px;
  border-bottom: 6px solid rgb(252, 252, 252);
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  position: relative;
}
.newsImgBox img {
  width: 250px;
  height: 180px;
  transition: all 2s;
}
.newsImgBox img:hover {
  transform: scale(1.4);
}
.newsImgBox {
  width: 250px;
  height: 180px;
  overflow: hidden;
}
.newsPage_title_time {
  max-width: 450px;
  margin-left: 20px;
}
.newsPage_title_time .news_time {
  font-size: 16px;
}
.newsPage_newsOne .newsPage_title_time .news_title {
  font-size: 16px;
  white-space: normal;
  /* word-break: break-all;*/
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #1d2088;
  cursor: pointer;
}
.newsPage_newsOne .newsPage_title_time .news_content {
  white-space: normal;
  /* word-break: break-all;*/
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0px;
}
.detailBtn {
  width: 90px;
  height: 40px;
  background: rgb(255, 187, 29);
  color: white;
  position: absolute;
  right: 20px;
  bottom: 20px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
}
.detailBtn:hover {
  cursor: pointer;
  color: #fff;
  background: rgb(241, 58, 58);
}
.newsTop {
  background-color: #fff;
  height: auto;
  border-radius: 2px;
}
.hots_head {
  font-size: 18px;
  color: #1d2088;
  border-bottom: 1px solid rgb(248, 248, 248);

  padding: 10px 20px;
}
.hotOne {
  padding: 10px 20px;
  border-bottom: 1px solid rgb(252, 252, 252);
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100px;
}
.hotOne img {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.hot_newsPage_title_time {
  max-width: 216px;
}
.hotOne .hot_newsPage_title_time .hot_title {
  white-space: normal;
  /* word-break: break-all;*/
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #1d2088;
  cursor: pointer;
}

#newsPage .newsPage-device {
  margin: 50px 0 20px;
}
/*分页*/
.page_barBox {
  display: flex;
  justify-content: center;
}
.page-bar {
  width: auto;
  min-width: 400px;
  margin: 40px 0px;
}
ul,
li {
  width: 100%;
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.page-bar ul li > a {
  margin-left: 0px;
  margin-bottom: 10px;
}
.page-bar a {
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #5d6062;
  cursor: pointer;
  margin-right: 20px;
}
.page-bar a:hover {
  background-color: #eee;
}
.page-bar a.banclick {
  cursor: not-allowed;
}
.page-bar .active a {
  color: #fff;
  cursor: default;
  background-color: rgb(255, 187, 29);
  border-color: rgb(255, 187, 29);
}
.page-bar i {
  font-style: normal;
  color: rgb(255, 187, 29);
  margin: 0px 4px;
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  .newsPage_title_time {
    max-width: 150px;
    margin-left: 20px;
  }
  .page-bar {
    width: auto;
    min-width: 300px;
    margin: 40px 0px;
  }
  .detailBtn {
    display: none;
  }
  .newsImgBox {
    width: 100px;
    height: 100px;
    display: block;
  }
  .newsImgBox img {
    width: 100px;
    height: 100px;
    display: block;
    -webkit-transition: all 2s;
    transition: all 2s;
  }
  .banner {
    margin-top: 0px;
  }
  .news-container > li {
    width: 100%;
  }
  .news-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container > li > .circle {
    display: none;
  }
}
</style>

