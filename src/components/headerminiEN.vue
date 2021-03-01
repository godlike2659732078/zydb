<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="miniHeader">
        <img src="../assets/img/logo_black.png" alt="" />
        <p>China Italy Geographical Indication Development</p>
      </div>

      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{ item.name }}
              <i class="underline"></i>
            </router-link>
          </li>

          <div class="header-right-manage">
            <div
              :class="[this.$store.state.language == 'CN' ? 'CNS' : 'CN']"
              data-lan="CN"
              @click="changeLanguage(CN)"
            >
              中文
            </div>
            /
            <div
              :class="[this.$store.state.language == 'EN' ? 'CNS' : 'EN']"
              data-lan="EN"
              @click="changeLanguage(EN)"
            >
              English
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderminiEN",
  data() {
    return {
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "Home",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "Home",
          path: "/EN/home",
          children: [],
        },
        {
          name: "Landmark products",
          path: "/EN/product",
          children: [
            {
              name: "Product List",
              path: "/EN/product",
            },
            {
              name:
                "Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020",
              path: "/EN/Protect",
            },
          ],
        },
        {
          name: "News",
          path: "/EN/newsinformation",
          children: [
            {
              name: "Activity dynamics",
              path: "/EN/activity",
            },
            { name: "Association News", path: "/EN/newsinformation" },
          ],
        },
        {
          name: "Activity dynamics",
          path: "/EN/activity",
          children: [],
        },

        {
          name: "About the Association",
          path: "/EN/About",
          children: [
            {
              name: "Association Charter",
              path: "/EN/Charter",
            },
            {
              name: "Association Introduction",
              path: "/EN/About",
            },
          ],
        },
      ],
      CN: "CN",
      EN: "EN",
    };
  },
  methods: {
    changeLanguage(lan) {
      console.log(lan);
      this.$store.commit("changeLanguage", lan);
      console.log(this.$store);
    },
    navClick(index, item) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = item.name;
      console.log(item);
      this.$store.commit("changePage", item.name);
      // this.$router.push({ path: item.path });
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 780px) {
  .header-right-manage {
    float: right;
    display: flex;
    width: 200px;
    margin-left: 20px;
    color: white;
    text-align: right;
  }
  #header .header-nav-m {
    position: relative;
    background: #fff;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #1d2088;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #1d2088;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 0px;
    position: relative;
    display: block;
    width: 100%;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 20px;
  }
  .header-nav-wrapper {
    display: none;
  }
}
</style>
