<template>
  <div id="app">
    <!-- photo from https://www.flickr.com/photos/90692443@N05/8239219385/in/photolist-dy59SD-8x5GgR-271DJf-dYJwTg-BkJQY-9EEojo-63Yngh-PpFYZ-X7uFqU-qfvKv-5zp8LR-49a7YD-oJKGjG-8gc1W-88Cgrq-aqJkHS-hxhva-XJGTvD-eWKkqC-KbQKs-6DcLtG-82EPin-6Dkqno-pjMoQH-6GEAvk-6LtZeF-2b2o8Vf-o4SA7h-8ijEMv-4KwUKy-F7pBR-6f5hsD-e3qfQR-57jDMK-BFPob-9fC1yx-8HYynP-7Y2bxj-aPszoD-SDd6zw-edbAiN-7pPXTx-4Ufk9k-9X9LbT-6h52kr-6Deqgg-5UcVrS-ddqybs-dHWaUV-pakFXA -->
    <img alt="Sad puppy" src="./assets/sad_pup.jpg" />
    <sorry-not-sorry msg="Don't be sorry"/>
  </div>
</template>

<script>
// import sorry-not-sorry from "./components/sorryNotSorry.vue";
// import question-two from "./components/questiontwo.vue";
// import dont-be-sorry from "./components/dontBeSorry.vue";

export default {
  name: "app",
  // components: {
  //   sorry-not-sorry,
  //   question-two,
  //   dont-be-sorry
  // }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  button {
    border-radius: 10px;
    background-color: #89cff0;
    color: white;
    margin-left: 1em;
    margin-right: 1em;
    padding-right: 1em;
    padding-left: 1em;
  }
}
</style>
