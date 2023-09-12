<template>
    <div>
      <h2>Product Details</h2>
      <div v-if="product">
        <img :src="product.ProdUrl" alt="">
        <h3>{{ product.ProdName }}</h3>
        <h4>{{ product.Price }}</h4>
        <p>Quantity: {{ product.Quantity }}</p>
        <p>Category: {{ product.Category }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.product;
      },
    },
  
    mounted() {
      const ProdID = this.$route.params.ProdID;
      this.$store.dispatch("fetchProduct", ProdID);
    },
  };
  </script>