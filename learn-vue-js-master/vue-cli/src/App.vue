<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  // 다른 컴포넌트에서 data에 접근할 수 없도록 함수로 반환해서 써야한다.
  data: function () {
    return {
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = "hi";
    },
  },
};
</script>

<style></style>
