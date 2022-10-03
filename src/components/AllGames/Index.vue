<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col md="3" v-for="(item, index) in imgDatas" :key="index">
        <MainHeader :image="item" />
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
  export default {
    data() {
      return {
        imgDatas: [
        "https://loremflickr.com/100/200",
        ],
      };
    },
    components: {},
  };
</script>

<style>

</style>