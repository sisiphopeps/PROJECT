<template>
  <div class="page">
    <h1 class="text-center">Product List</h1>
    <div class="d-flex justify-content-center align-items-center">
      <form class="d-flex" role="search" style="text-align: center!important;">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery" @input="performSearch">
      </form>
    </div>

    <button @click="sortProducts">Sort by Price (Asc)</button>
    <button @click="sortProducts2">Sort by Price (Desc)</button>
    <div class="row">
      <div class="col-md-4" v-for="product in filteredProducts" :key="product.ProdId">
        <div class="card mb-3">
          <img :src="product.ProdUrl" class="card-img-top product-image" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.ProdName }}</h5>
            <p class="card-text">Price: {{ product.Price }}</p>
            <p class="card-text">Quantity: {{ product.Quantity }}</p>
            <a class="btn btn-danger" href="/">Add to Cart</a>
            <button>View product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "",
      filteredProducts: [],
      categories: ["Handbag", "Watches", "Sunglasses"],
      searchQuery: "",
      sortOrder: "asc",
      isLoading: true,
    };
  },
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

    performSearch() {
      if (this.searchQuery === "") {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => {
          const productName = product.ProdName.toLowerCase();
          return productName.includes(this.searchQuery.toLowerCase());
        });
      }
    },

    sortProducts() {
      this.filteredProducts.sort((a, b) => {
        if (this.sortOrder === "asc") {
          return a.Price - b.Price;
        } else {
          return b.Price - a.Price;
        }
      });
      this.sortOrder = "asc";
    },

    sortProducts2() {
      this.filteredProducts.sort((a, b) => {
        if (this.sortOrder === "desc") {
          return a.Price - b.Price;
        } else {
          return b.Price - a.Price;
        }
      });
      this.sortOrder = "desc"; 
    },
  },
  mounted() {
    this.fetchProducts();
    this.filteredProducts = this.products;
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center!important;
  align-items: center!important;
  width: 30%;
  margin-bottom: 15px;
}

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

.filter-btn {
  background: none;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  margin: 10px 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
