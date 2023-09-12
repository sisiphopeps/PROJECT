<template>
  <div>
    <h1 class="text-center">Product List</h1>

    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.ProdId">
        <div class="card mb-3">
          <img :src="product.ProdUrl" class="card-img-top product-image" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.ProdName }}</h5>
            <p class="card-text">Price: {{ product.Price }}</p>
            <p class="card-text">Quantity: {{ product.Quantity }}</p>
            <a class="btn btn-danger" href="/WishlistView.vue">Add to Cart</a>
            <a class="btn" href="../views/SingleView.vue">See More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    spinner() {
      return this.$store.state.spinner;
    },
    msg() {
      return this.$store.state.msg;
    },
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
.product-image {
  max-height: 200px; 
  object-fit: contain; 
}
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s; 
}

.card:hover {
  transform: scale(1.03); 
}
</style>
