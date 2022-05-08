<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    sendEvent: function () {
      // 상위 컴포넌트로 전달할 수 있게 되었다.
      this.$emit("renew");
    },
  },
};
</script>

<style></style>
