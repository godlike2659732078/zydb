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
                      <h3>中意地理标志发展协会</h3>
                    </div>
                  </div>
                </div>
                <div class="menu_nav">
                  <div class="menu_nav_in">
                    <div class="menu_nav_content scrollable">
                      <Header></Header>
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
                        <p>联系我们: <span>1-000-666-8888</span></p>
                      </div>
                    </div>
                    <div class="send_msg">
                      <a>
                        <img
                          class="svg"
                          src="../../assets/img/svg/message2.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <!-- <div class="container text-center">
               
            </div> -->
                  <!-- /HEADER -->
                  <div class="buildify_tm_section">
                    <div class="buildify_tm_main_title_holder">
                      <div class="container">
                        <div class="title_holder">
                          <h3>协会活动</h3>
                        </div>
                        <div class="builify_tm_breadcrumbs">
                          <ul>
                            <li><a>首页</a></li>
                            <li class="shape"><span></span></li>
                            <li><span>活动列表</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="buildify_tm_section">
                    <div class="container">
                      <div class="buildify_tm_projects_wrap">
                        <ul class="buildify_tm_portfolio_list gallery_zoom">
                          <li
                            class="architecture wow fadeIn"
                            v-for="(item, index) in newsList"
                            :key="index"
                          >
                            <div class="inner">
                              <div class="image_holder">
                                <img
                                  @click="gotoActivityDetails(item.id)"
                                  :src="getImageUrl(item.image)"
                                />
                              </div>
                              <div class="image_definition">
                                <div class="title">
                                  <h3>
                                    <a @click="gotoActivityDetails(item.id)">{{
                                      item.title
                                    }}</a>
                                  </h3>
                                  <p
                                    class="activity_content"
                                    @click="gotoActivityDetails(item.id)"
                                  >
                                    {{ item.introduct }}
                                  </p>
                                </div>
                                <div class="read_more">
                                  <p>
                                    <a @click="gotoActivityDetails(item.id)">
                                      <span class="text">查看详情</span>
                                      <span class="direction"></span>
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
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
                          <a v-on:click="cur--, pageClick()">上一页</a>
                        </li>
                        <li v-if="cur == 1"><a class="banclick">上一页</a></li>
                        <li
                          v-for="index in indexs"
                          v-bind:class="{ active: cur == index }"
                          :key="index"
                        >
                          <a v-on:click="btnClick(index)">{{ index }}</a>
                        </li>
                        <li v-if="cur != all">
                          <a v-on:click="cur++, pageClick()">下一页</a>
                        </li>
                        <li v-if="cur == all">
                          <a class="banclick">下一页</a>
                        </li>
                        <li>
                          <a
                            >共<i>{{ all }}</i
                            >页</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Footer></Footer>
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
import { findAllArticles } from "../../server/api";
export default {
  name: "NewsInformation",
  data() {
    return {
      showLoading: true,
      newsList: [],
      all: 10, //总页数
      cur: 1, //当前页码
      totalPage: 0, //当前条数
    };
  },
  methods: {
    getActivitys() {
      findAllArticles({
        language: 0,
        type: 2,
        pageSize: 6,
        pageNum: this.cur,
      }).then((res) => {
        if (res) {
          this.showLoading = false;
          for (let item of res.data) {
            item.createTime = item.createTime.substring(0, 10);
            item.year = item.createTime.substring(0, 4);
          }

          this.newsList = res.data;
          this.all = res.count;
        }
      });
    },
    gotoActivityDetails(id) {
      this.$router.push({ path: "/CN/activityDetails", query: { id: id } });
    },
    //分页
    btnClick: function (data) {
      //页码点击事件
      this.showLoading = true;
      if (data != this.cur) {
        this.cur = data;
      }
      //console.log(this.cur);
      this.getActivitys();
    },
    pageClick: function () {
      this.showLoading = true;
      //console.log(this.cur);
      this.getActivitys();
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
    this.getActivitys();
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
.banner {
  margin-top: 80px;
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;

  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.nav {
  margin: 20px 0;
}
.nav > a {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav > a.active {
  color: #1d2088;
  border-color: #1d2088;
}
.nav > a:hover {
  color: #1d2088;
  border-color: #1d2088;
}
.news-container {
  min-height: 600px;
}
.news-container {
  overflow: hidden;
  margin-bottom: 0;
  min-height: 500px;
}
.news-container > li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.activity_title {
  font-size: 16px;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.activity_content {
  font-size: 14px;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.news-container > li:hover {
  color: #1d2088;
  border: 1px solid #1d2088;
  cursor: pointer;
}
.news-container > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}
.news-container > li > .content {
  width: 60%;
  float: left;
  padding: 20px 0;
}
.news-container > li > .time {
  width: 20%;
  float: left;
  padding: 10px 0;
}
.news-container > li > .time > p {
  font-size: 30px;
  margin: 5px 0;
}
.news-container > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container > li:nth-of-type(1n) > .content {
  display: flex;
  align-items: center;
}
.news_image img {
  width: 80px;
  height: 80px;

  display: block;
}
.news-container > li:nth-of-type(2n) > .content {
  float: right;
  display: flex;
}
.news-container > li:nth-of-type(2n) > .time {
  float: right;
}
.news-container > li:nth-of-type(2n) > .circle {
  float: right;
}
.news-container > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more {
  font-size: 25px;
  color: #707070;
}
.more > i {
  cursor: pointer;
}
/*分页*/
.page_barBox {
  display: flex;
  justify-content: center;
}
.page-bar ul {
  width: auto;
  min-width: 300px;
  margin: 40px 0px;
  text-align: center;
  display: flex;
  justify-content: center;
}
ul,
li {
  /* width: 100%; */
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.page-bar li:first-child > a {
  margin-left: 0px;
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
  .page-bar {
    width: auto;
    min-width: 300px;
    margin: 40px 0px;
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

