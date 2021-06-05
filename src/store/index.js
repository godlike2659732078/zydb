import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: sessionStorage.getItem("language") || "",
    page: sessionStorage.getItem("page") || "Home"
  },
  mutations: {
    changeLanguage(state, language) {
      state.language = language;
      sessionStorage.setItem("language", language);
      if (language == "CN") {
        document.title = "中意地理标志发展协会";
        sessionStorage.setItem("title", "中意地理标志发展协会");
      } else {
        document.title = "China Italy Geographical Indication Development";
        sessionStorage.setItem(
          "title",
          "China Italy Geographical Indication Development"
        );
      }
    },
    changePage(state, page) {
      state.page = page;
      sessionStorage.setItem("page", page);
    }
  },
  actions: {}
});
