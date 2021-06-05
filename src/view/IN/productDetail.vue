<template>
  <div id="CompanyIntroduction">
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
                <!-- /TOPBAR -->

                <!-- /HEADER -->
                <div class="buildify_tm_section">
                  <div class="buildify_tm_main_title_holder">
                    <div class="container">
                      <div class="title_holder">
                        <h3>Dettagli del prodotto di riferimento</h3>
                      </div>
                      <div class="builify_tm_breadcrumbs">
                        <ul>
                          <li><a>Pagina iniziale</a></li>
                          <li class="shape"><span></span></li>
                          <li><span>Dettagli del prodotto</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_about_wrap">
                  <div class="container">
                    <div class="newsDetailBox_newsBox">
                      <div class="newsDetail">
                        <div class="detail_head">
                          <p class="detail_title">
                            {{ title }}
                          </p>
                          <p class="detail_talk">Testo riadattato</p>
                          <p class="detail_date">Data：{{ date }}</p>
                        </div>
                        <div class="detailContentBox">
                          <div class="detail_box" v-html="detailContent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /CONTENT -->
                <Footers></Footers>
              </div>
            </div>
          </div>
        </div>
        <!-- /RIGHTPART -->
      </div>
    </div>
    <!-- / WRAPPER ALL -->
  </div>
</template>
<script>
import { WOW } from "wowjs";
import { findProductById, findFiveProductFive } from "../../server/api";
export default {
  name: "NewsInformation",
  data() {
    return {
      detailContent: null,
      hotList: [
        // {
        //   image: require("../../assets/img/p8.png"),
        //   title: "新郑红枣",
        //   content:
        //     "新郑红枣又名鸡心大枣、鸡心枣，是河南省郑州市新郑的特产，素有 “灵宝苹果潼关梨，新郑大枣甜似蜜”的盛赞。红枣味甜、性温，是补血健脾美容的滋补佳果，而 新郑大枣以其皮薄、肉厚、核小、味甜备受人们青睐，成为枣类中的佼佼者。",
        // },
        // {
        //   image: require("../../assets/img/p9.png"),
        //   title: "纯正加州牛奶",
        //   content:
        //     "　加州是美国乳品生产第一州。得益于充沛的阳光，温和的气候及现代化的牧场管理，生活在加州的奶牛被称为“快乐奶牛”。只有快乐的奶牛才能产出优质且安全的 牛奶 ，以用来制作多种美味的乳制品。加州生产超过250个不同品种的奶酪，如蒙特利杰克、切达、马苏里拉等传统美式奶酪，以及布里、蓝奶酪、卡蒙尔等特殊风味奶酪。",
        // },
        // {
        //   image: require("../../assets/img/p10.png"),
        //   title: "赤水乌骨鸡",
        //   content:
        //     "赤水乌骨鸡是赤水市独有的地方特色家禽，为肉蛋兼用型，是饲养的主要品种，单冠、平头、胸宽、体深、腹部大、丰满、脚长短适中，羽毛疏松均匀，黑色为主，耳垂紫黑色，喙、腿、爪以黑色较多。",
        // },
      ],
      title: "",
      date: "",
      all: 10, //总页数
      cur: 1, //当前页码
      totalPage: 0, //当前条数
    };
  },
  methods: {
    getList() {
      findProductById({ language: 1, id: this.$route.query.id }).then((res) => {
        this.detailContent = res.data.particulars;
        this.title = res.data.title;
        this.date = res.data.createTime;
      });
    },
    gotoProductDetail(id) {
      if (id == this.$route.query.id) {
        return false;
      } else {
        this.$router.push({ path: "/CN/productDetail", query: { id: id } });
        this.getList();
      }
    },
  },

  mounted() {
    findProductById({ language: 1, id: this.$route.query.id }).then((res) => {
      this.detailContent = res.data.particulars;
      this.title = res.data.title;
      this.date = res.data.createTime;
    });
    findFiveProductFive({ language: 1 }).then((res) => {
      this.hotList = res.data;
    });
    var wow = new WOW();
    wow.init();
  },
  // updated() {
  //   $(".detail_box")
  //     .find("p")
  //     .css("display", "flex", "justify-content", "center");
  // },
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;

  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
/* 大数据管理系统 */
#newsDetailBox {
  padding: 40px 20px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#newsDetailBox .newsDetailBox-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.newsDetailBox_newsBox {
  background-color: rgb(235, 235, 235);
  height: auto;
  border-radius: 2px;
  width: 100%;
}
.newsDetailBox_newsBox .newsDetailBox_newsBox_header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 40px;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.newsDetailBox_newsBox {
  background-color: #fbfbfb;
}

.detail_box {
  background: #fbfbfb;
}
.newsDetailBox_newsBox .newsDetailBox_newsBox_header p:first-child {
  font-size: 18px;
  color: #1d2088;
}
.newsDetailBox_newsBox .newsDetailBox_newsBox_header p:last-child {
  font-size: 14px;
  color: #aaa;
  cursor: pointer;
}
.newsDetailBox_newsOne {
  padding: 10px 20px;
  border-bottom: 1px solid rgb(252, 252, 252);
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
}
.newsDetailBox_newsOne img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.newsDetailBox_title_time {
  max-width: 450px;
}
.newsDetailBox_title_time .news_time {
  font-size: 16px;
}
.newsDetailBox_newsOne .newsDetailBox_title_time .news_title {
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
.newsDetailBox_newsOne .newsDetailBox_title_time .news_content {
  white-space: normal;
  /* word-break: break-all;*/
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0px;
}
.detail_head {
  text-align: center;
  padding: 10px 50px;
}
.detail_title {
  font-size: 38px;
  font-weight: bold;
}
.detail_date {
  font-size: 20px;
}
.detail_talk {
  font-size: 20px;
  font-weight: bold;
}
#newsDetailBox .newsDetailBox-device {
  margin: 50px 0 20px;
}
.detailContentBox {
  box-sizing: border-box;
  text-align: center;
  padding: 30px 50px;
}
.detail_box {
  width: 100%;
  padding: 0px 20px;

  border-radius: 2px;
}
.detail_box p {
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail_box >>> img {
  width: 100%;
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
.hot_productPage_title_time {
  max-width: 216px;
}
.hot_productPage_title_time .hot_title {
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
.hot_productPage_title_time .hot_time {
  white-space: normal;
  /* word-break: break-all;*/
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 767px) {
  .detail_head {
    text-align: center;
    padding: 20px 0px;
  }
  .detailContentBox {
    box-sizing: border-box;
    text-align: center;
    padding: 20px 10px;
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

