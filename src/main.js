import Vue from "vue";
window.axios = require('axios');

Vue.component("sorry-not-sorry", require("./components/sorryNotSorry.vue").default);
Vue.component("question-two", require("./components/questiontwo.vue").default);
Vue.component("dont-be-sorry", require("./components/dontBeSorry.vue").default);
Vue.component("apology", require("./components/apology.vue").default);
Vue.component("question-3", require("./components/question3.vue").default);
Vue.component("question-4", require("./components/question4.vue").default);
// Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
