<template>
  <b-container><SideBarMenu/></b-container>
  <CadastroSteam/>
  </template>>


<style>

</style>

<script>
  import CadastroSteam from "./components/Cadastro/CadastroSteam.vue";

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
    CadastroSteam
},
  };
</script>
