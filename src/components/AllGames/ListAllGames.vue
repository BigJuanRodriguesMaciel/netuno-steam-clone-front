<template>
  <img :src="image" alt="" />
</template>

<script>
  export default {
    props: ["image"],
  };
</script>
<style scoped>
  img {
    width: 100px;
    height: 150px;
  }
</style>
