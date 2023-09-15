<!-- <template>
    <div>
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.prodID">
            <div class="card mb-3">
              <img :src="product.ProdUrl" class="card-img-top product-image" alt="Product Image">
              <div class="card-body">
                <h5 class="card-title">{{ product.ProdName }}</h5>
                <p class="card-text">Price: {{ product.Price }}</p>
                <p class="card-text">Quantity: {{ product.Quantity }}</p>
                <a class="btn btn-danger" href="/">Add to Cart</a>
                <router-link class="button" :to="{ name: 'product', params: { prodID: product.prodID } }">View More...</router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["products"]
}
</script>
<style scoped>
    
</style> -->