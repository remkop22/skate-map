import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue from "vue";
import VueAnime from "vue-animejs";
import vSelect from "vue-select";
import VueLottiePlayer from "vue-lottie-player";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

Vue.use(VueAnime);

Vue.use(vSelect);
// Vue.component("v-select", vSelect);

Vue.use(VueLottiePlayer);

import Leaflet from "leaflet";
import "./assets/tailwind.css";
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
