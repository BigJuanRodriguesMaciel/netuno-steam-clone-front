<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col md="3" v-for="(item, index) in imgDatas" :key="index">
        <MainHeader :image="item" />
      </b-col>
    </b-row>
  </b-container>
  <CadastroSteam/>>
</template>

<style>

</style>

<script>
 
 import MainHeader from "./components/Header/MainHeader.vue";
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

    components: { MainHeader, CadastroSteam },
  };
</script>
