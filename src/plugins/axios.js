import Vue from "vue";
import axios from "axios";

export default Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://stock-trader-851b5-default-rtdb.firebaseio.com",
    });
  },
});
