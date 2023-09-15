<template>
    <div>
      <h2>Product Details</h2>
      <div v-if="product in products" :key="product.prodId">
        <img :src="product.prodUrl" alt="">
        <h3>{{ product.prodName }}</h3>
        <h4>{{ product.amount }}</h4>
        <p>Quantity: {{ product.quantity }}</p>
        <p>Category: {{ product.Category }}</p>
      </div>
    </div>
  </template>
  
  <script>
export default {
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    },
  },
  created() {
    const productId = this.$route.params.id;
    this.$store.dispatch('fetchProduct', productId);
  },
};
</script>