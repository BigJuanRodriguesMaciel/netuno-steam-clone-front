<template>
  <b-container><SideBarMenu/></b-container>
</template>

<style>

</style>

<script>
  import SideBarMenu from "./components/SideBar/SideBarMenu.vue";

  export default {
    data() {
      return {
        imgDatas: [
          "https://loremflickr.com/640/480",
          "https://loremflickr.com/640/480",
          "https://loremflickr.com/640/480",
          "https://loremflickr.com/640/480",
          "https://loremflickr.com/640/480",
        ],
      };
    },
    components: {
    SideBarMenu
    },
  };
</script>
