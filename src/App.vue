<template>
  <b-container><SideBarMenu/></b-container>
<<<<<<< Updated upstream
=======
  <CadastroSteam/> 
  </template>
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream

  import MainHeader from "./components/Header/MainHeader.vue";
  import CadastroSteam from "./components/Cadastro/CadastroSteam.vue";
  import FooterGlobal from "./components/Footer/FooterGlobal.vue";
  
=======
 
  import { CadastroSteam } './Header/Cadastro/CadastroSteam.vue'
>>>>>>> Stashed changes

  export default {
    data() {
      return {
      };
    },
    components: {

    MainHeader,
    FooterGlobal,
    CadastroSteam
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
},


  }
</script>
