<template>
  <div>
    <form @submit.prevent="addProduct">

      <input v-model="newProduct.ProdID" style="visibility: hidden; display: none" type="text">

      <label for="prodName">Product Name:</label>
      <input v-model="newProduct.ProdName" type="text" id="prodName" required>

      <label for="amount">Price:</label>
      <input v-model.number="newProduct.Price" type="number" id="price" required>

      <label for="quantity">Quantity:</label>
      <input v-model="newProduct.Quantity" type="number" id="quantity" required>
      
      <label for="Category">Category:</label>
      <input v-model="newProduct.Category" type="text" id="Category" required>

      <label for="prodUrl">Image Url:</label>
      <input v-model="newProduct.ProdUrl" type="text" id="prodUrl">

      <button type="submit">Add Product</button>
    </form>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProduct: {
        ProdID: null,
        ProdName: '',
        Price: 0,
        Quantity: 0,
        Category: '',
        ProdUrl: '',
      },
    };
  },
  methods: {
    async addProduct() {
      try {
        await this.$store.dispatch('addNewProduct', this.newProduct);
        this.newProduct = {
        ProdID: null,
        ProdName: '',
        Price: 0,
        Quantity: 0,
        Category: '',
        ProdUrl: '',
      };
      } catch (error) {
        console.error('Failed to add product:', error);
        
      }
    },
  },
};
</script>
<style scoped>
input {
  width: 300px;
  height: 40px;
  border-radius: 0;
  border: solid black
}
@media screen and (max-width: 340px) {
  input {
      width: 270px;
  }
}
.button {
  background-color: blue;
  font-family: montserrat;
}
#addToStore {
  width: 10rem;
  height: 3rem;
  border: solid black;
  background-color: black;
  color: white;
  font-weight: bolder;
}
.row {
  display: grid;
}
.border-1 {
  background-color: black;
  color: white;
  border: solid white;
}
thead {
  border: solid white;
}
table {
  margin: auto;
}
@media (max-width: 1025px) {
  #product-table thead {
    display: none;
  }
  #product-table tbody tr {
    display: block;
    margin-bottom: 20px;
    border: 1px solid #ccc;
  }
  #product-table tbody td {
    display: block;
    text-align: center;
  }
}
</style>