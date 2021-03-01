<template>
  <div id="footer">
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
                        <h3>About the Association</h3>
                      </div>
                      <div class="definition">
                        <p>
                          This association is a worldwide, industry-based,
                          non-profit social organization formed by the voluntary
                          cooperation of enterprises and institutions, economic
                          organizations and related personnel engaged in the
                          production, processing, technology promotion,
                          teaching, scientific research, and management of
                          geographical indication products in China and Italy. ,
                          Has the legal personality of a social organization,
                          the registered place of the association is Milan,
                          Italy
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="inner">
                      <div class="footer_section_title">
                        <h3>Documents-legal regulations</h3>
                      </div>
                      <div class="helpful_links">
                        <div class="inner_list">
                          <ul>
                            <li
                              v-for="(item, index) in surlList"
                              @click="gotoWeb(item.url)"
                              :key="index"
                            >
                              <i>
                                {{ item.title }}
                              </i>
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
                <span>Follow Us:</span>
                <ul>
                  <li v-for="(item, index) in urlList" :key="index">
                    <img
                      :src="getImageUrl(item.image)"
                      @click="gotoUrlPage(item.url)"
                      alt=""
                    />
                  </li>
                </ul>
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
  name: "Footers",
  data() {
    return {
      urlList: [],
      surlList: [
        {
          title:
            "China-EU 'China-EU Geographical Indication Protection and Cooperation Agreement' ",
          url:
            "https://image.cigi.org.cn/files/China-EU Geographical Indication Protection and Cooperation Agreement.pdf",
        },
        {
          title:
            "Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020",
          url:
            "https://image.cigi.org.cn/files/Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020 .pdf",
        },
        {
          title:
            "China's 'Provisions on the Protection of Geographical Indication Products' ",
          url:
            "https://image.cigi.org.cn/files/Provisions on the Protection of Geographical Indication Products.pdf",
        },
        {
          title:
            "China's 'Administrative Measures for Geographical Indications of Agricultural Products' ",
          url:
            "https://image.cigi.org.cn/files/Measures for the Administration of Geographical Indications of Agricultural Products.pdf",
        },

        {
          title:
            "'China's Regulations on the Registration and Examination of Geographical Indications of Foreign Agricultural Products'",
          url:
            "https://image.cigi.org.cn/files/Provisions on the Registration and Examination of Geographical Indications of Foreign Agricultural Products.pdf",
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

