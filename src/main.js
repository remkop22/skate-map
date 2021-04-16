import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue from "vue";
import VueAnime from "vue-animejs";
import VueLottiePlayer from "vue-lottie-player";
import VueCompositionAPI from "@vue/composition-api";
import vuetify from "./plugins/vuetify";
import Leaflet from "leaflet";

Vue.use(VueCompositionAPI);
Vue.use(VueAnime);
Vue.use(VueLottiePlayer);

// Leafleft is the map component provider
// Below is required to get styling of markers correctly
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
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
