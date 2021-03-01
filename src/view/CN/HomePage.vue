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
                <a
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
                  <div class="buildify_tm_social_list">
                    <!-- <label>Follow us:</label> -->
                    <ul>
                      <li>
                        <a href="#"><i class="xcon-facebook"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="xcon-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="xcon-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="xcon-pinterest"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="xcon-gplus"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- /TOPBAR -->

                <!-- SHORT SERVICES -->
                <div class="buildify_tm_section">
                  <div class="buildify_tm_slider_wrap">
                    <div class="container swiper"></div>
                    <a-spin :spinning="showLoading">
                      <div class="row bannerBox">
                        <div
                          id="swiper"
                          class="col-xs-12 col-sm-12 col-md-12 container-fuild"
                        >
                          <div class="swiper-container banner-swiper">
                            <div class="swiper-wrapper">
                              <div
                                class="swiper-slide"
                                v-for="(item, index) in swiperList"
                                :key="index"
                                :data-url="item.url"
                              >
                                <img
                                  :src="getImageUrl(item.image)"
                                  alt="轮播图"
                                />

                                <div class="swiper-slide-title">
                                  <div class="banner_title">
                                    {{ item.title }}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- 如果需要分页器 -->
                            <div class="swiper-pagination"></div>
                            <div class="swiper-scrollbar"></div>
                            <!-- 如果需要导航按钮 -->
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                          </div>
                        </div>
                      </div>
                    </a-spin>
                  </div>
                </div>
                <!-- /SHORT SERVICES -->
                <div class="buildify_tm_section">
                  <div class="container">
                    <div class="buildify_check_list_wrap buildify_tm_miniboxes">
                      <ul>
                        <li>
                          <div class="inner">
                            <div class="title_holder buildify_tm_minibox">
                              <div class="shape">
                                <span></span>
                              </div>
                              <div class="definition">
                                <h3>我们有着崇高的理想</h3>
                                <span
                                  >推进各国间的地理标志产品贸易往来,推动世界地理标志产业发展</span
                                >
                              </div>
                            </div>
                            <div class="image_holder">
                              <div class="image_wrap">
                                <img
                                  class="inner_image"
                                  src="../../assets/img/about/1.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="inner">
                            <div class="title_holder buildify_tm_minibox">
                              <div class="shape">
                                <span></span>
                              </div>
                              <div class="definition">
                                <h3>我们有着严格细致的协会章程</h3>
                                <span>中意地理标志发展协会章程</span>
                              </div>
                            </div>
                            <div class="image_holder">
                              <div class="image_wrap">
                                <img
                                  class="inner_image"
                                  src="../../assets/img/banner_news.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="inner">
                            <div class="title_holder buildify_tm_minibox">
                              <div class="shape">
                                <span></span>
                              </div>
                              <div class="definition">
                                <h3>我们有着优质的产品和严格的标准</h3>
                                <span>每个产品都精心挑选</span>
                              </div>
                            </div>
                            <div class="image_holder">
                              <div class="image_wrap">
                                <img
                                  class="inner_image"
                                  src="../../assets/img/about/3.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_section">
                  <div class="container">
                    <div class="buildify_tm_about_company_wrap">
                      <div class="buildify_tm_leftbox">
                        <div class="buildify_tm_main_title_wrap">
                          <div class="title">
                            <h3>关于协会</h3>
                          </div>
                          <div class="subtitle">
                            <p>
                              协会名称：中意地理标志发展协会。英文名为China-Italy
                              Geographical Indication Development
                              Association，缩写为 CIGI。
                              中意地理标志发展协会，是由中国和意大利两国从事地理标志产品生产、加工、技术推广、教学、科研、管理的企事业单位、经济组织和有关人员自愿联合组成的世界性、行业性、非营利性社会组织，具有社会团体法人资格，协会注册地意大利米兰。
                              本协会宗旨：以意大利宪法为根本准则，遵守意大利国家的法律、法规和政策。紧紧围绕地理标志发展交流工作这个重点，以推动地理标志产品发展为指导，为高产、优质、高效、生态、安全地理标志品牌发展服务；为提高地理标志产品质量安全水平服务，为提高地理标志产品竞争力服务。品牌产品及品牌文化交流；
                            </p>
                          </div>
                        </div>
                        <div class="sign">
                          <img src="=../../assets/img/sign/dark.png" alt="" />
                        </div>
                        <div class="author_name">
                          <span></span>
                        </div>
                      </div>
                      <div class="rightbox">
                        <div class="first_image">
                          <img
                            style="height: 200px"
                            src="../../assets/img/about/460x500.jpg"
                            alt=""
                          />
                          <div class="image"></div>
                        </div>
                        <div class="second_image_wrap">
                          <div class="inner">
                            <img
                              src="../../assets/img/about/460x500.jpg"
                              alt=""
                            />
                            <div class="image"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_section">
                  <div class="container">
                    <div class="buildify_tm_counter_wrap_all">
                      <div class="leftbox">
                        <div class="roof">
                          <span></span>
                        </div>
                        <div class="inner">
                          <p>我们的数字</p>
                        </div>
                      </div>
                      <div class="rightbox">
                        <div
                          class="buildify_tm_counter_wrap"
                          data-col="4"
                          data-delay="300"
                        >
                          <ul
                            class="buildify_tm_counter_list buildify_tm_miniboxes"
                          >
                            <li>
                              <div class="inner buildify_tm_minibox">
                                <h3>
                                  <span
                                    ><span
                                      class="buildify_tm_counter"
                                      data-from="0"
                                      data-to="3572"
                                      data-speed="3000"
                                      >20项</span
                                    ></span
                                  >
                                </h3>
                                <span>会员服务</span>
                              </div>
                            </li>
                            <li>
                              <div class="inner buildify_tm_minibox">
                                <h3>
                                  <span
                                    ><span
                                      class="buildify_tm_counter"
                                      data-from="0"
                                      data-to="300"
                                      data-speed="3000"
                                      >286</span
                                    >家</span
                                  >
                                </h3>
                                <span>会员企业</span>
                              </div>
                            </li>
                            <li>
                              <div class="inner buildify_tm_minibox">
                                <h3>
                                  <span
                                    ><span
                                      class="buildify_tm_counter"
                                      data-from="0"
                                      data-to="2348"
                                      data-speed="3000"
                                      >2,348</span
                                    ></span
                                  >
                                </h3>
                                <span>地理标志商标</span>
                              </div>
                            </li>
                            <li>
                              <div class="inner buildify_tm_minibox">
                                <h3>
                                  <span
                                    ><span
                                      class="buildify_tm_counter"
                                      data-from="0"
                                      data-to="120"
                                      data-speed="3000"
                                      >354</span
                                    >+</span
                                  >
                                </h3>
                                <span>宣传活动</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_section">
                  <div class="container">
                    <div class="buildify_tm_principles_wrap">
                      <div class="list_wrap">
                        <ul class="masonry">
                          <li class="item">
                            <div class="inner">
                              <span class="leftshape"></span>
                              <span class="topshape"></span>
                              <div class="in">
                                <div class="title">
                                  <h3>协会名称</h3>
                                </div>
                                <div class="definition">
                                  <p>
                                    协会名称：中意地理标志发展协会。英文名为China-Italy
                                    Geographical Indication Development
                                    Association，缩写为 CIGI。
                                    中意地理标志发展协会，
                                  </p>
                                </div>
                                <div class="number">
                                  <span>01</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="item">
                            <div class="inner">
                              <span class="leftshape"></span>
                              <span class="topshape"></span>
                              <div class="in">
                                <div class="title">
                                  <h3>协会宗旨</h3>
                                </div>
                                <div class="definition">
                                  <p>
                                    以意大利宪法为根本准则，遵守意大利国家的法律、法规和政策。紧紧围绕地理标志发展交流工作这个重点，以推动地理标志产品发展为指导，为高产、优质、高效、生态、安全地理标志品牌发展服务
                                  </p>
                                </div>
                                <div class="number">
                                  <span>02</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="item">
                            <div class="inner">
                              <span class="leftshape"></span>
                              <span class="topshape"></span>
                              <div class="in">
                                <div class="title">
                                  <h3>协会属性</h3>
                                </div>
                                <div class="definition">
                                  <p>
                                    是由中国和意大利两国从事地理标志产品生产、加工、技术推广、教学、科研、管理的企事业单位、经济组织和有关人员自愿联合组成的世界性、行业性、非营利性社会组织，具有社会团体法人资格，协会注册地意大利米兰
                                  </p>
                                </div>
                                <div class="number">
                                  <span>03</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="item">
                            <div class="inner">
                              <span class="leftshape"></span>
                              <span class="topshape"></span>
                              <div class="in">
                                <div class="title">
                                  <h3>协会目标</h3>
                                </div>
                                <div class="definition">
                                  <p>
                                    以“文化交流+ 产品贸易+
                                    品牌互认”的多元化形式，争创国际地标新标准
                                  </p>
                                </div>
                                <div class="number">
                                  <span>04</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_section">
                  <div class="buildify_tm_news_wrap fn_w_sminiboxes">
                    <div class="container">
                      <div class="inner_wrap">
                        <div class="buildify_tm_projects_leftbox fn_w_sminibox">
                          <div class="buildify_fn_sticky_section">
                            <div class="buildify_tm_main_title_wrap">
                              <div class="title">
                                <h3>中意地标产品</h3>
                              </div>
                              <div class="subtitle">
                                <p>
                                  以意大利宪法为根本准则，遵守意大利国家的法律、法规和政策。紧紧围绕地理标志发展交流工作这个重点，以推动地理标志产品发展为指导，为高产、优质、高效、生态、安全地理标志品牌发展服务；为提高地理标志产品质量安全水平服务，为提高地理标志产品竞争力服务
                                </p>
                              </div>
                              <div class="buildify_tm_button_wrap">
                                <a @click="gotoProduct">查看所有产品</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="buildify_tm_rightbox fn_w_sminibox">
                          <div class="buildify_fn_sticky_section">
                            <div class="news_list_wrap">
                              <ul class="masonry">
                                <li
                                  class="item"
                                  v-for="(item, index) in customerList"
                                  :key="index"
                                >
                                  <div class="inner">
                                    <div class="image_wrap">
                                      <img
                                        src="../../assets/img/blog/340x230.jpg"
                                        alt=""
                                      />
                                      <img
                                        class="image"
                                        :src="getImageUrl(item.image)"
                                        alt=""
                                      />
                                    </div>
                                    <div class="definitions_wrap">
                                      <div class="title_holder">
                                        <h3>
                                          <a
                                            @click="gotoProductDetail(item.id)"
                                            >{{ item.title }}</a
                                          >
                                        </h3>
                                      </div>
                                      <div class="read_more_wrap">
                                        <div class="read_more_in">
                                          <a @click="gotoProductDetail(item.id)"
                                            >查看详情</a
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_section">
                  <div class="container">
                    <div class="buildify_tm_projects_home fn_w_sminiboxes">
                      <div class="buildify_tm_projects_leftbox fn_w_sminibox">
                        <div class="buildify_fn_sticky_section">
                          <div class="buildify_tm_main_title_wrap">
                            <div class="title">
                              <h3>我们的最新活动</h3>
                            </div>
                            <div class="subtitle">
                              <p>
                                以意大利宪法为根本准则，遵守意大利国家的法律、法规和政策。紧紧围绕地理标志发展交流工作这个重点，以推动地理标志产品发展为指导，为高产、优质、高效、生态、安全地理标志品牌发展服务；为提高地理标志产品质量安全水平服务，为提高地理标志产品竞争力服务
                              </p>
                            </div>
                            <div class="buildify_tm_button_wrap yellow">
                              <a @click="gotoActivity()">查看所有活动</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buildify_tm_rightbox fn_w_sminibox">
                        <div class="buildify_fn_sticky_section">
                          <div class="projects_list_wrap">
                            <ul>
                              <li
                                v-for="(item, index) in eventList"
                                :key="index"
                              >
                                <div class="inner">
                                  <div class="image_holder">
                                    <img
                                      :src="getImageUrl(item.image)"
                                      alt=""
                                    />
                                  </div>
                                  <div class="image_definition">
                                    <div class="title">
                                      <h3>
                                        <a
                                          @click="gotoActivityDetails(item.id)"
                                          >{{ item.title }}</a
                                        >
                                      </h3>
                                    </div>
                                    <div class="read_more">
                                      <p>
                                        <a>
                                          <span
                                            class="text"
                                            @click="
                                              gotoActivityDetails(item.id)
                                            "
                                            >查看详情</span
                                          >
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
                    </div>
                  </div>
                </div>
                <div class="buildify_tm_section">
                  <div class="container">
                    <div class="buildify_tm_projects_home fn_w_sminiboxes">
                      <div class="buildify_tm_projects_leftbox fn_w_sminibox">
                        <div class="buildify_fn_sticky_section">
                          <div class="buildify_tm_main_title_wrap">
                            <div class="title">
                              <h3>地标新闻</h3>
                            </div>
                            <div class="subtitle">
                              <p>
                                地理标志是人类文明的重要成果和共同财富，是世界各国实现绿色
                                发展、可持续发展、减少贫困问题的重要路径选择，也是我国与世界国际贸易和文化交流的重要阵地。以“文化交流+
                                产品贸易+
                                品牌互认”的多元化形式，争创国际地标新标准。
                              </p>
                            </div>
                            <div class="buildify_tm_button_wrap yellow">
                              <a @click="gotoNews()">查看所有新闻</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buildify_tm_rightbox fn_w_sminibox">
                        <div class="buildify_fn_sticky_section">
                          <div class="projects_list_wrap">
                            <ul>
                              <li
                                v-for="(item, index) in newsList"
                                :key="index"
                              >
                                <div class="inner">
                                  <div class="image_holder">
                                    <img
                                      :src="getImageUrl(item.image)"
                                      alt=""
                                    />
                                  </div>
                                  <div class="image_definition">
                                    <div class="title">
                                      <h3>
                                        <a @click="gotoNewsDetail(item.id)">{{
                                          item.title
                                        }}</a>
                                      </h3>
                                    </div>
                                    <div class="read_more">
                                      <p>
                                        <a>
                                          <span
                                            class="text"
                                            @click="gotoNewsDetail(item.id)"
                                            >查看详情</span
                                          >
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
import Swiper from "swiper";
import { WOW } from "wowjs";
import {
  findBanners,
  findTwoArticles,
  findAllArticles,
  findFiveArticles,
  findAllProduct,
  findAllFriendLinks,
} from "../../server/api";

export default {
  name: "HomePage",

  data() {
    return {
      urlList: [],
      showLoading: true,
      showLoading_news: true,
      showLoading_events: true,
      showLoading_hot: true,
      showLoading_products: true,
      lang: this.$store.state.language,
      language: 0,
      swiperList: null,
      newActivity: [],
      newsList: [],
      eventList: [],
      hotList: [],
      customerList: [],
      banner_rightList: [],
    };
  },
  watch: {
    lang() {
      //console.log(this.lang);
    },
  },
  methods: {
    gotoUrlPage(url) {
      window.open(url, "_blank");
    },
    gotoWeb(url) {
      window.open(url, "_blank");
    },
    toFocusLink(url) {
      //console.log(url);
    },
    carouselScroll() {
      let that = this;
      let mySwiper = new Swiper(".swiper-container", {
        effect: "fade",
        loop: true,
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay （没有加入之前轮播图设置 autoplay：true无效）
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        preventClicks: false,
        // 如果需要分页器
        pagination: {
          clickable: true,
          el: ".swiper-pagination",
          // type: "progressbar",
        },
        on: {
          click: function () {
            let id = this.clickedSlide.attributes["data-url"].nodeValue;
            that.$router.push({ path: "/CN/newsDetail", query: { id: id } });
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        observeParents: true, //必须加入
        observer: true, //必须加入
      });
    },

    gotoNews() {
      this.$router.push({ path: "/CN/newsinformation" });
    },
    gotoActivity() {
      this.$router.push({ path: "/CN/activity" });
    },
    gotoAbout() {
      this.$router.push({ path: "/CN/About" });
    },
    gotoNewsDetail(id) {
      this.$router.push({ path: "/CN/newsDetail", query: { id: id } });
    },
    gotoActivityDetails(id) {
      this.$router.push({ path: "/CN/activityDetails", query: { id: id } });
    },
    gotoProduct() {
      this.$router.push({ path: "/CN/product" });
    },
    gotoProductDetail(id) {
      this.$router.push({ path: "/CN/productDetail", query: { id: id } });
    },
  },

  mounted() {
    findAllFriendLinks({ language: 0 }).then((res) => {
      //console.log(res);
      this.urlList = res.data;
    });
    let obj = {
      language: this.language,
    };
    findBanners(obj).then((res) => {
      if (res) {
        this.showLoading = false;
        this.swiperList = res.data;
        //console.log(this.swiperList);
        this.$nextTick(function () {
          //l轮播图初始化函数carouselScroll一定要放在$nextTick回调中执行
          this.carouselScroll();
        });
      }
    });
    findTwoArticles(obj).then((res) => {
      this.banner_rightList = res.data;
    });

    findAllArticles({
      language: this.language,
      type: 1,
      pageSize: 6,
      pageNum: 1,
    }).then((res) => {
      if (res) {
        this.showLoading_news = false;
        this.newsList = res.data;
      }
    });
    findAllArticles({
      language: this.language,
      type: 2,
      pageSize: 5,
      pageNum: 1,
    }).then((res) => {
      if (res) {
        this.showLoading_events = false;
        this.eventList = res.data;
        this.newActivity = res.data[0];
      }
    });
    findFiveArticles({ language: this.language }).then((res) => {
      if (res) {
        //console.log(res);
        this.hotList = res.data;
        this.showLoading_hot = false;
      }
    });
    findAllProduct({ language: this.language, pageSize: 10, pageNum: 1 }).then(
      (res) => {
        if (res) {
          this.showLoading_products = false;
          //console.log(res);
          this.customerList = res.data;
        }
      }
    );
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 10,
      mobile: true,
      live: true,
    });
    wow.init();
  },
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
  background-color: aliceblue;
}

/* 轮播图 */
#swiper {
  height: 600px;
}
.bannerBox {
  background-color: #fff;
  padding-bottom: 20px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* border: 10px solid rgba(0, 0, 0, 0.911); */
  border-radius: 2px;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title .banner_title {
  text-align: left;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.521);
  font-size: 20px;
  position: absolute;
  line-height: 40px;
  left: 0px;
  bottom: 0px;
  padding: 0px 20px;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.activity_newBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background: #fff;
  padding: 30px 10px;
  border-top: 2px solid rgb(179, 179, 179);
  border-bottom: 2px solid rgb(179, 179, 179);
}
.newActivityTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: #333;
}
.newActivityTitle p {
  margin-left: 20px;
  margin-bottom: 0px;
}
/* 大数据管理系统 */
#bigData {
  padding: 40px 20px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.hots_list {
  min-height: 300px;
}
.aboutBox {
  background: #fff;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
  margin: 20px 0px;
}
.newsBox {
  background-color: #fff;
  height: auto;
  border-radius: 2px;
  min-height: 300px;
}
.newsBox .newsBox_header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 40px;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.newsBox .newsBox_header p:first-child {
  font-size: 18px;
  color: #1d2088;
}
.newsBox .newsBox_header p:last-child {
  font-size: 14px;
  color: #aaa;
  cursor: pointer;
}

.newsOne {
  padding: 10px 20px;
  border-bottom: 1px solid rgb(252, 252, 252);
  display: flex;
  justify-content: left;
  align-items: center;
}
.newsOne_news {
  padding: 10px 20px;
  border-bottom: 1px solid rgb(252, 252, 252);
  display: flex;
  justify-content: left;
  align-items: center;
  max-height: 140px;
}
.newActivityOne {
  /* width: 100%; */
  padding: 10px 20px;
  border-bottom: 1px solid rgb(252, 252, 252);
  display: flex;
  justify-content: left;
  align-items: center;
}
.newActivityOne_news_time {
  font-size: 38px;
  color: rgb(82, 82, 82);
  text-align: center;
  border-bottom: 1px solid #aaa;
}
.newActivityOne_news_title {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #1d2088;
  cursor: pointer;
  font-size: 20px;
}
.newsOne_news img {
  width: 120px;
  height: 114px;
  margin-right: 20px;
  display: block;
  object-fit: cover;
}
.newsOne_news .title_time .news_time {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 20px;
}
.newsOne_news .title_time .news_title {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #1d2088;
  cursor: pointer;
  font-size: 18px;
}
.newsOne_news .title_time {
  max-width: 350px;
}
.newsOne img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  display: block;
  object-fit: cover;
}
.newsOne .title_time {
  max-width: 350px;
}
.newsOne .title_time .news_title {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #1d2088;
  cursor: pointer;
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
  display: block;
  object-fit: cover;
}
.hot_title_time {
  max-width: 216px;
}
.hotOne .hot_title_time .hot_title {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #1d2088;
  cursor: pointer;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 中意地理标志发展协会 */
#contactUs {
  color: #fff;
  height: 300px;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("/../../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
.products_box {
  min-height: 500px;
}
/* 地标产品 */
.productsBox {
  background-color: #fff;
  margin: 10px 0px;
  /* min-width: 260px; */
  height: auto;
  padding: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}
.customer-logo {
  overflow: hidden;
  position: relative;
}
.customer-yh {
  width: 100%;
  height: 250px;
  transition: all 2s;
}
.customer-yh:hover {
  transform: scale(1.4);
}
.textBox {
  background-color: rgba(0, 0, 0, 0.425);
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
.customer-content2 {
  font-size: 16px;
  text-align: center;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #ffffff;
  cursor: pointer;
  padding: 4px 4px 0px;
}
.customer-content1 {
  font-size: 12px;
  text-align: left;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #ffffff;
  line-height: 20px;
  height: 40px;
  padding: 0px 10px;
  margin: 6px 0px;
  box-sizing: border-box;
}
.bannerRight_text:first-child {
  margin-bottom: 20px;
}
.bannerRight_text {
  width: 100%;
  height: 240px;
  position: relative;
  cursor: pointer;
  border: 6px solid rgba(0, 0, 0, 0.349);
}
.banner_right_img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}
.text_type {
  position: absolute;
  top: 120px;
  right: 0px;
  padding: 4px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.39);
}
.banner_right_title {
  background-color: rgba(0, 0, 0, 0.39);
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 4px;
  color: #fff;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.home_product_head {
  margin-top: 20px;
  background-color: #0f2f97;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.more_product {
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.product_title p {
  margin: 0px;
}
.product_title h3 {
  margin: 10px;
  color: #fff;
}
.product_title {
  color: #fff;
  text-align: left;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper .banner-swiper .swiper-slide-title .banner_title {
    font-size: 16px;
    line-height: 24px;
  }
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

