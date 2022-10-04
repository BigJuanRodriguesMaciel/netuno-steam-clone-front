<template>
    <b-container class="containerBackground">
      <b-row>
        <b-col md="11">
          <h4 class="text-titlle">Games Streaming Now</h4>
        </b-col>
        <b-col md="1">
          <b-button class="transparent-button" href="#">Steam</b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" class="card-streaming" v-for="(item, index) in videoDatas" :key="index">
          <div>
            <iframe class="iframeStyle" :src="item"></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    export default {
    name: "StreamingPadrao",
    data() {
      return {
        videoDatas: [
          "https://www.youtube.com/embed/v64KOxKVLVg",
          "https://www.youtube.com/embed/v64KOxKVLVg",
          "https://www.youtube.com/embed/v64KOxKVLVg",
          "https://www.youtube.com/embed/v64KOxKVLVg",
          "https://www.youtube.com/embed/v64KOxKVLVg",
          "https://www.youtube.com/embed/v64KOxKVLVg",
        ],
      }
    },
 }
</script>

<style lang="scss">
  @import '../Button/ButtonStyle.scss';
  @import './Streaming.scss' 
</style>