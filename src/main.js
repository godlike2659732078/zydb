// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import imageUrl from "../static/imageUrl";
document.title = sessionStorage.getItem("title") || "中意地理标志发展协会";
/* 路由 */
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
import MetaInfo from "vue-meta-info";
Vue.use(MetaInfo);
/* swiper */
import "swiper/dist/css/swiper.min.css";

/* 重置样式 */
import "./assets/css/reset.min.css";

/* jquery */
import "jquery";

/* bootstarp */
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min";
import "./assets/js/init";
import "./assets/js/jquery";
import "./assets/css/base.css";
// import "./assets/css/fontello.css"
import "./assets/css/skeleton.css";
import "./assets/css/style.css";
import "./assets/css/plugins.css";
/* animate.css */
import "animate.css";
Vue.use(imageUrl);

/* 头部组件 */
import Header from "./components/Header";
Vue.component(Header.name, Header);
/* 头部组件 */
import Headermini from "./components/headermini.vue";
Vue.component(Headermini.name, Headermini);
import HeaderminiEN from "./components/HeaderminiEN.vue";
Vue.component(HeaderminiEN.name, HeaderminiEN);
/* 头部组件 */
import Headers from "./components/Headers.vue";
Vue.component(Headers.name, Headers);

/* 尾部组件 */
import Footer from "./components/Footer";
Vue.component(Footer.name, Footer);
/* 尾部组件 */
import Footers from "./components/Footers.vue";
Vue.component(Footers.name, Footers);

/* 回到顶部 */
import GoTop from "./components/GoTop";
Vue.component(GoTop.name, GoTop);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
