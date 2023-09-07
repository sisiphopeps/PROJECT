<template>
    <div>
        <div v-for="product in products" :key="product.prodID" class="card col-12 col-lg-4 col-sm-6 p-0" style="background-color: #2c3e50; color:white;">
            <img :src="product.prodUrl" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">
                Price: {{ product.Price }}<br>
                Quantity: {{ product.Quantity }}<br>
                Category: {{ product.Category }}<br>
              </p>
              <!-- <router-link class="button" :to="{name: 'product', params: {id: product.prodID}}">View More...</router-link> -->
            </div>
          </div>     
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    components: {CardComp},
    // props: ["products"],
    computed: {
    products() {
      return this.$store.state.products;
    },
   },
   mounted() {
     this.$store.dispatch('fetchProducts');
   },

}

</script>
<style>
    
</style>