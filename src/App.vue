<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col md="3" v-for="(item, index) in imgDatas" :key="index">
        <MainHeader :image="item"/>
      </b-col>
    </b-row>
  </b-container>
  <b-container>
    <b-row>
      <b-col>
        <div>
          <StandardButton/>
          <StandardStreaming/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
</style>

<script>
  import StandardButton from "./components/Button/StandardButton.vue";
  import StandardStreaming from "./components/Streaming/StandardStreaming.vue";
  import MainHeader from "./components/Header/MainHeader.vue";
  export default {
    data() {
      return {
        imgDatas: [
          "https://loremflickr.com/640/480",
          "https://loremflickr.com/640/470",
          "https://loremflickr.com/640/460",
          "https://loremflickr.com/640/450",
          "https://loremflickr.com/640/440",
        ],
      };
    },
    components: {
    MainHeader,
    StandardButton,
    StandardStreaming
},
  };
</script>
