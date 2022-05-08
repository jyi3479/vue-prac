import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// new Vue({
//   el: '#app',
//   render: h => h(App) // App 컴포넌트 파일을 불러와서 집어넣고 랜더했다. (지역 컴포넌트 등록하던 거랑 비슷)
// })
