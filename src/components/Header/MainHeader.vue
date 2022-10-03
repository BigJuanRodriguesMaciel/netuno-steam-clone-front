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
    width: 400px;
    height: 400px;
  }
</style>
