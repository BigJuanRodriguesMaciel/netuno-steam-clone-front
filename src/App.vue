<template>
  <header>
    <b-container fluid>
    <MainHeader />
  </b-container>
  </header>
<body>
  <b-container fluid>
    <HeaderStore/>
  </b-container>
</body>

    
</template>

<style>

</style>

<script>
  import MainHeader from "./components/Header/MainHeader.vue"
  import HeaderStore from "./components/HeaderStore/HeaderStore.vue";
  export default {
    data() {
      return {
      };
    },
    components: {
      MainHeader,
      HeaderStore,
    },
  };
</script>
