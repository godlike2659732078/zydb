<template>
  <div id="footer">
    <!-- /CONTENT -->
    <footer class="buildify_tm_footer">
      <div class="buildify_tm_universal_parallax_wrap">
        <div class="main_bg">
          <div class="overlay_image footer jarallax" data-speed="0"></div>
          <div class="overlay_video"></div>
          <div class="overlay_color footer"></div>
        </div>
        <div class="main_content footer">
          <div class="buildify_tm_footer_wrap">
            <div class="container">
              <div
                class="buildify_tm_list_wrap"
                data-column="3"
                data-space="40"
              >
                <ul class="buildify_list">
                  <li>
                    <div class="inner">
                      <div class="footer_section_title">
                        <h3>关于协会</h3>
                      </div>
                      <div class="definition">
                        <p>
                          本协会是由中国和意大利两国从事地理标志产品生产、加工、技术推广、教学、科研、管理的企事业单位、经济组织和有关人员自愿联合组成的世界性、行业性、非营利性社会组织，具有社会团体法人资格，协会注册地意大利米兰
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="inner">
                      <div class="footer_section_title">
                        <h3>文件-法律条规</h3>
                      </div>
                      <div class="helpful_links">
                        <div class="inner_list">
                          <ul>
                            <li
                              v-for="(item, index) in surlList"
                              @click="gotoWeb(item.url)"
                              :key="index"
                            >
                              {{ item.title }}
                            </li>
                          </ul>
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
    </footer>
    <div class="buildify_tm_section">
      <div class="buildify_tm_copyright_wrap">
        <div class="container">
          <div class="inner_wrap">
            <div class="main_info_wrap">
              <div class="share_wrap">
                <div class="send_msg">
                  <a>
                    <img
                      class="svg"
                      src="../assets/img/svg/message2.svg"
                      alt=""
                    />
                  </a>
                  <span>联系方式:正在更新</span>
                </div>

                <!-- <ul>
                  <li v-for="(item, index) in urlList" :key="index">
                    <img
                      :src="getImageUrl(item.image)"
                      @click="gotoUrlPage(item.url)"
                      alt=""
                    />
                  </li>
                </ul> -->
              </div>
              <div class="bottom_wrap">
                <div class="copyright">
                  <p>
                    &copy; 2020 - 2021 中意地理标志发展协会 . China Italy
                    Geographical Indication Development
                  </p>
                </div>
              </div>
            </div>
            <a class="buildify_tm_totop" href="#">
              <span class="first">To top</span>
              <span class="top">
                <span class="line"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { findAllFriendLinks } from "../server/api";
export default {
  name: "Footer",
  data() {
    return {
      urlList: [],
      surlList: [
        {
          title: "中欧《中欧地理标志保护与合作协定》",
          url: "https://image.cigi.org.cn/files/zoxd.pdf",
        },
        {
          title: "意大利农业、食品、林业政策部 D.O.P.  I.G.P. S.T.G.产品列表 ",
          url:
            "https://image.cigi.org.cn/files/Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020 .pdf",
        },
        {
          title: "中国《地理标志产品保护规定》",
          url: "https://image.cigi.org.cn/files/地理标志产品保护规定.pdf",
        },
        {
          title: "中国《农产品地理标志管理办法》",
          url: "https://image.cigi.org.cn/files/农产品地理标志管理办法.pdf",
        },

        {
          title: "中国《国外农产品地理标志登记审查规定》",
          url:
            "https://image.cigi.org.cn/files/国外农产品地理标志登记审查规定.pdf",
        },
      ],
    };
  },
  methods: {
    gotoUrlPage(url) {
      window.open(url, "_blank");
    },
    gotoWeb(url) {
      window.open(url, "_blank");
    },
  },
  mounted() {
    findAllFriendLinks({ language: 0 }).then((res) => {
      console.log(res);
      this.urlList = res.data;
    });
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: auto;
  color: #fff;
}
.logo {
  margin: 50px auto 20px;
}
.logo img {
  width: 90px;
  height: 90px;
  margin: auto;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 20px 0 10px;
}
.urlBox ul {
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 20px 0px 0px;
}
.surlBox ul {
  margin: 20px 0px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.surlBox ul li {
  cursor: pointer;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.urlBox ul li img {
  width: 30px;
  margin: 0px 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>

