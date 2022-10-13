<template>
  <b-container class="all-games w-75">
      <b-dropdown class="dropdown-all" id="dropdown-1" :text="titleAllGames  + ` (${ imgDatas.length })`">
        <div v-for="(item, index) in allGames" :key="index">
          <b-dropdown-item v-if="item != '#divider'" @click="changeTitleAll(item)">{{ item }}</b-dropdown-item>
          <b-dropdown-divider v-else class="divider"></b-dropdown-divider>
        </div>
      </b-dropdown>

    <p class="text">SORT BY</p>

      <b-dropdown class="dropdown-hours m-md-2" id="dropdown-2" :text="titleHoursPlayed">
          <b-dropdown-item v-for="(item, index) in hoursPlayed" :key="index" @click="changeTitle(item)">{{ item }}</b-dropdown-item>
      </b-dropdown>

    <b-row class="pt-2">
      <b-col cols="6" sm="4" md="2" lg="2" class=" size-img mb-2" v-for="(item, index) in imgDatas" :key="index">
        <ListAllGames :image="item" />
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
import ListAllGames from './ListAllGames.vue';
  export default {
    data() {
      return {
        titleAllGames: "ALL",
        titleHoursPlayed: "Hours Played",
        allGames : [
          'FAVORITES',
          '#divider',
          'ALL',
          'ALL GAMES',
          'RECENT GAMES',
          'COLLECTIONS VIEW',
          'PLAY NEXT',
          '#divider',
          'DELETE THIS SHELF',
        ],
        hoursPlayed: [
          'Alphabetical',
          'Friends Playing',
          '% of Achievements Complete',
          'Hours Played',
          'Last Played',
          'Release Date',
          'Size on Disk',
          'Metacritic Score',
          'Steam Review',
        ],
        imgDatas: [
          'https://loremflickr.com/640/480',
          'https://loremflickr.com/640/480',
          'https://loremflickr.com/640/480',
          'https://loremflickr.com/640/480',
          'https://loremflickr.com/640/480',
          'https://loremflickr.com/640/480',
        ],
      };
    },
    components: { ListAllGames },
    methods: {
      changeTitleAll(titleAll) {
        this.titleAllGames = titleAll;
      },
      changeTitle(title) {
        this.titleHoursPlayed = title;
      },
    }
  };
</script>

<style lang="scss">
  @import './StyleAllGames.scss';
</style>