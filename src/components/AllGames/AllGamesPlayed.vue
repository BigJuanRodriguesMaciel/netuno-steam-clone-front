<template>
  <b-container class="all-games">
      <b-dropdown class="dropdown-all m-md-2" id="dropdown-1" text="ALL">
          <b-dropdown-item>FAVORITES</b-dropdown-item>
          <b-dropdown-divider class="divider"></b-dropdown-divider>
          <b-dropdown-item>ALL</b-dropdown-item>
          <b-dropdown-item>ALL GAMES</b-dropdown-item>
          <b-dropdown-item>RECENT GAMES</b-dropdown-item>
          <b-dropdown-item>COLLECTIONS VIEW</b-dropdown-item>
          <b-dropdown-item>PLAY NEXT</b-dropdown-item>
          <b-dropdown-divider class="divider"></b-dropdown-divider>
          <b-dropdown-item>DELETE THIS SHELF</b-dropdown-item>
      </b-dropdown>

    <p class="text">SORT BY</p>

      <b-dropdown class="dropdown-hours m-md-2" id="dropdown-2" text="Hours Played">
          <b-dropdown-item>Alphabetical</b-dropdown-item>
          <b-dropdown-item>Friends Playing</b-dropdown-item>
          <b-dropdown-item>% of Achievements Complete</b-dropdown-item>
          <b-dropdown-item>Hours Played</b-dropdown-item>
          <b-dropdown-item>Last Played</b-dropdown-item>
          <b-dropdown-item>Release Date</b-dropdown-item>
          <b-dropdown-item>Size on Disk</b-dropdown-item>
          <b-dropdown-item>Metacritic Score</b-dropdown-item>
          <b-dropdown-item>Steam Review</b-dropdown-item>
      </b-dropdown>

    <b-row>
      <b-col md="2" v-for="(item, index) in imgDatas" :key="index">
        <ListAllGames :image="item" />
        <b-button>Hours</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
import ListAllGames from './ListAllGames.vue';
  export default {
    data() {
      return {
        imgDatas: [
        "https://loremflickr.com/100/200",
        "https://loremflickr.com/100/200",
        "https://loremflickr.com/100/200",
        "https://loremflickr.com/100/200",
        "https://loremflickr.com/100/200",
        "https://loremflickr.com/100/200"
        ],
      };
    },
    components: { ListAllGames },
  };
</script>

<style lang="scss">
  @import './StyleAllGames.scss';
</style>