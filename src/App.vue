<template>
  <MainHeader v-if="showHeader" />
  <router-view/>
  <FooterGlobal v-if="showFooter" />
</template>

<script>
import MainHeader from "./components/Header/MainHeader.vue";
import FooterGlobal from "./components/Footer/FooterGlobal.vue";
  export default {
    data() {
      return {}
    },
    computed: {
        showHeader() {
          return this.$route.meta.showHeader;
        },
        showFooter() {
          return this.$route.meta.showFooter;
        }
    },
    components: { MainHeader, FooterGlobal}
  }
</script>