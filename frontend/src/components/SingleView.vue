<template>
  <div v-if="product" class="product_details" :key="product.prodID" :product="product">
    <div class="card mx-auto" id="that">
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">
            <img class="image" :src="product.prodUrl" :alt="product.prodName" />
          </div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <p class="fs-4">{{ product.prodName }}</p>
            <div class="card-body m-2">
              <p>{{ product.Category }}</p>
              <p>R {{ product.Price }}</p>
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading-spinner v-else />
</template>
  <script>
  // import Swal from 'sweetalert2';
  // import LoadingSpinner from '@/components/LoadingSpinner.vue'
  export default {
    computed: {
      product() {
        return this.$store.state.product
      },
      // id() {
      //   return this.$route.params.id
      // },
      userData() {
      return this.$store.state.userData;
    },
    },
    mounted() {
      const prodID = this.$route.params.prodID;
      this.$store.dispatch("fetchProduct", prodID)
    },
  }
  </script>

<style scoped>

</style>