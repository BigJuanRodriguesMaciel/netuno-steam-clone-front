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
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  