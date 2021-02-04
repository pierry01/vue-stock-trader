import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.filter("currency", (value) => {
  return "R$ " + value.toLocaleString();
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
