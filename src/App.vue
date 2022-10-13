<template>
  <MainHeader v-if="showHeader" />
  <router-view/>
  <FooterGlobal v-if="showHeader" />
</template>


<style>

</style>

<script>
import MainHeader from "./components/Header/MainHeader.vue";
import FooterGlobal from "./components/Footer/FooterGlobal.vue";
  export default {
    data() {
      return {
        showHeader: this.$route.meta.showHeader,
        showFooter: this.$route.meta.showFooter,
      }
    },
    components: { MainHeader, FooterGlobal}
  }
</script>