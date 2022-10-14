<template>
  <b-container><SideBarMenu/></b-container>


  <div id="app">
    <MainHeader/>
    <router-view></router-view>
    <FooterGlobal/>
    <CadastroSteam/>
  </div>
</template>



<style>

</style>

<script>

  import MainHeader from "./components/Header/MainHeader.vue";
  import CadastroSteam from "./components/Cadastro/CadastroSteam.vue";
  import FooterGlobal from "./components/Footer/FooterGlobal.vue";
  

  export default {
    data() {
      return {
      };
    },
    components: {

    MainHeader,
    FooterGlobal,
    CadastroSteam
    
},


  }
</script>
