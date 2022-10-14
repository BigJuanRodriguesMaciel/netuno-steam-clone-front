<template>
<<<<<<< HEAD
  <b-container><SideBarMenu/></b-container>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
  <CadastroSteam/> 
  </template>
>>>>>>> Stashed changes
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
=======
  <MainHeader v-if="showHeader" />
  <router-view/>
  <FooterGlobal v-if="showHeader" />
>>>>>>> db0c35168f7009fb3ddea188c1f4907b827794f5
</template>



<style>

</style>

<script>
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
 
  import { CadastroSteam } './Header/Cadastro/CadastroSteam.vue'
>>>>>>> Stashed changes

  import MainHeader from "./components/Header/MainHeader.vue";
  import CadastroSteam from "./components/Cadastro/CadastroSteam.vue";
  import FooterGlobal from "./components/Footer/FooterGlobal.vue";
  
=======
 
  import { CadastroSteam } './Header/Cadastro/CadastroSteam.vue'
>>>>>>> Stashed changes

=======
import MainHeader from "./components/Header/MainHeader.vue";
import FooterGlobal from "./components/Footer/FooterGlobal.vue";
>>>>>>> db0c35168f7009fb3ddea188c1f4907b827794f5
  export default {
    data() {
      return {
        showHeader: this.$route.meta.showHeader,
        showFooter: this.$route.meta.showFooter,
      }
    },
<<<<<<< HEAD
    components: {

    MainHeader,
    FooterGlobal,
    CadastroSteam
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
},


=======
    components: { MainHeader, FooterGlobal}
>>>>>>> db0c35168f7009fb3ddea188c1f4907b827794f5
  }
</script>