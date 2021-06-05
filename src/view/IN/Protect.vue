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
                        <h3 style="font-size: 30px">
                          Italian DOP Origin Protection Products, IGP
                          Geographical Indication Protection Products, STG
                          Traditional Local Protection Products
                        </h3>
                      </div>
                      <div class="builify_tm_breadcrumbs">
                        <ul>
                          <li><a>Home</a></li>
                          <li class="shape"><span></span></li>
                          <li><span>Protect the product</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_about_wrap">
                  <div class="container">
                    <div>
                      <div class="tools">
                        <button
                          type="default"
                          @click.stop="prePage"
                          class="mr10"
                        >
                          precedente
                        </button>

                        {{ pageNum }}/{{ pageTotalNum }}
                        <button
                          type="default"
                          @click.stop="nextPage"
                          class="mr10"
                        >
                          successiva
                        </button>
                        <button type="default" @click.stop="clock" class="mr10">
                          Clockwise
                        </button>
                        <button
                          type="default"
                          @click.stop="counterClock"
                          class="mr10"
                        >
                          Counterclockwise
                        </button>
                        <button
                          type="default"
                          @click.stop="scaleBig"
                          class="mr10"
                        >
                          enlarge
                        </button>
                        <button
                          type="default"
                          @click.stop="scaleSmall"
                          class="mr10"
                        >
                          Shrink
                        </button>
                      </div>
                      <div style="overflow-x: scroll; overflow-y: auto">
                        <pdf
                          :src="pdfSrc"
                          :page="pageNum"
                          class="pdf"
                          ref="wrapper"
                          :rotate="pageRotate"
                          @progress="loadedRatio = $event"
                          @page-loaded="pageLoaded($event)"
                          @num-pages="pageTotalNum = $event"
                          @error="pdfError($event)"
                          @link-clicked="page = $event"
                        >
                        </pdf>
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
import pdf from "vue-pdf";
import { findAboutUsById } from "../../server/api";
export default {
  name: "CompanyIntroduction",
  components: { pdf },
  metaInfo: {
    //  这里是给页面修改
    title: "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes",
      },
    ],
  },
  data() {
    return {
      pdfSrc:
        "https://image.cigi.org.cn/files/Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020 .pdf",
      numPages: 1, //  pdf 文件总页数
      pageNum: 1,
      pageTotalNum: "",
      pageRotate: 0,
      scale: 100,
    };
  },
  mounted() {
    this.getNumPages(
      "https://image.cigi.org.cn/files/Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020 .pdf"
    );
  },
  methods: {
    getNumPages(url) {
      var loadingTask = pdf.createLoadingTask(url);
      loadingTask.promise
        .then((pdf) => {
          this.pdfSrc = loadingTask;
          this.pageTotalNum = pdf.pageTotalNum;
        })
        .catch((err) => {
          //console.error("pdf加载失败");
        });
    },
    // 上一页函数，
    prePage() {
      var page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90;
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90;
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e;
    },
    // 其他的一些回调函数。
    pdfError(error) {
      //console.error(error);
    },
    scaleBig() {
      this.scale += 10;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
    },
    scaleSmall() {
      if (this.scale == 100) {
        return;
      }
      this.scale += -10;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
      // this.$refs.wrapper.$el.style.transform = "scale(" + this.scale + ")";
    },
  },
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
.arrow {
  padding: 0px 30px;
}
.arrow span {
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
.arrow span:hover {
  color: #00157e;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.about_contentImage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.CompanyIntroduction-container {
  padding: 50px 0;
  color: #808080;
  transition: all ease 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
.img-responsive {
  width: 320px;
  height: 300px;
}
.detailContentBox {
  box-sizing: border-box;
  text-align: center;
  padding: 30px 50px;
}
.detail_box {
  width: 100%;
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.856);
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
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

