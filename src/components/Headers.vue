<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <ul class="header-nav-wrapper">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="$route.path == item.path ? 'active' : ''"
        @click="navClick(index, item.name)"
      >
        <router-link :to="item.path">
          {{ item.name }}
          <span
            v-if="item.children.length > 0"
            class="glyphicon glyphicon-menu-down"
          ></span>
          <i class="underline"></i>
        </router-link>
        <dl v-if="item.children.length > 0">
          <dt v-for="(i, n) in item.children" :key="n">
            <router-link :to="i.path">{{ i.name }}</router-link>
          </dt>
        </dl>
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
          :class="[this.$store.state.language == 'IN' ? 'CNS' : 'IN']"
          data-lan="IN"
          @click="changeLanguage(IN)"
        >
          italiano
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Headers",
  data() {
    return {
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "Pagina iniziale",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "Home Page",
          path: "/IN/home",
          children: [],
        },
        {
          name: "Prodotti",
          path: "/IN/product",
          children: [
            {
              name: "Elenco",
              path: "/IN/product",
            },
            {
              name:
                "Italy___DOPIGP_e_STG_Registrati_aggiornato_al_27_novembre_2020",
              path: "/IN/Protect",
            },
          ],
        },
        {
          name: "News",
          path: "/IN/newsinformation",
          children: [
            {
              name: "Status Eventi",
              path: "/IN/activity",
            },
            {
              name: "Notizie relative all'Associazione",
              path: "/IN/newsinformation",
            },
          ],
        },
        {
          name: "Attività",
          path: "/IN/activity",
          children: [],
        },

        {
          name: "Informazioni sull'Associazione",
          path: "/IN/About",
          children: [
            {
              name: "Statuto",
              path: "/IN/Charter",
            },
            {
              name: "Presentazione dell'Associazione",
              path: "/IN/About",
            },
          ],
        },
      ],
      CN: "CN",
      IN: "IN",
    };
  },
  methods: {
    changeLanguage(lan) {
      console.log(lan);
      this.$store.commit("changeLanguage", lan);
      console.log(this.$store);
    },
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = name;
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
#header {
  background: #ffffff;
  /* transition: all ease 0.6s; */
}
.header-right-manage {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  min-width: 100px;
  color: white;
}
.CN {
  cursor: pointer;
  color: #c4c4c4;
}
.CNS {
  color: #fff;
  font-size: 16px;
}
.IN {
  cursor: pointer;
  color: #c4c4c4;
}

#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 150px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 100px;
}
.logoBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo_text {
  width: 738px;
  font-size: 30px;
  color: rgb(122, 122, 122);
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  align-items: center;
}
.logo_text p {
  margin: 0px;
  color: #1d2088;
}
/* 导航栏logo图片 */
.logoBox img {
  width: 130px;
  height: 130px;
  margin-right: 20px;
}
.header-nav-wrapper {
  background: #00157e;
}
/* 导航栏 每个导航 */
.header-nav-wrapper > li {
  margin: 0 15px;
  color: #fff;
  font-size: 16px;
  min-width: 80px;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.header-nav-wrapper > li:hover {
  margin: 0 15px;
  position: relative;
  background: #022061;
  font-size: 16px;
}
/* 导航栏 每个导航下面的 a 链接 */
.header-nav-wrapper > li > a {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  min-width: 80px;
  display: block;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
.header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #ffffff;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
.header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
.header-nav-wrapper > li > a:hover {
  color: #fff;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
.header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
.header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
.header-nav-wrapper > li.active > a {
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid #fff;
}
/* 导航栏 每个导航下面的二级导航容器 */
.header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 0%;
  right: -150px;
  z-index: 999999;

  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
.header-nav-wrapper > li > dl > dt > a {
  font-weight: bold;
  color: #fff;
  display: block;
  height: 100%;
  padding: 10px 0px;
}
.header-nav-wrapper > li > dl > dt {
  width: 100%;

  border-bottom: 1px solid #ccc;
  background: -webkit-linear-gradient(rgb(36, 58, 182), rgb(19, 19, 146));
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
.header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
  background: #fff;
  color: #022061;
}
/* 导航栏 滑上一级导航显示二级导航 */
.header-nav-wrapper > li:hover dl {
  display: block;
}
.header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: rgb(255, 255, 255);
  color: #022061;
}
@media screen and (max-width: 780px) {
  #header .header-nav-m {
    position: relative;
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
    background: #0764a7;
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
    background: #0764a7;
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
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
  .header-nav-wrapper {
    display: none;
  }
}
</style>
