<template>
    <div>
      <UpdateProd :products="products"/>
      <AddProduct @productAdded="fetchProducts"/>
      <div>
        <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Profile URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td><img :src="user.profileUrl" alt=""></td>
              <td>
                <!-- SVG icon button for editing -->
                <button @click="editUser(user)">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </button>
             
         
                 <button @click="deleteUser(user.userId)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
      
        <table class="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Product URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.ProdID">
              <td>{{ product.ProdID }}</td>
              <td>{{ product.ProdName }}</td>
              <td>{{ product.Quantity }}</td>
              <td>{{ product.Price }}</td>
              <td>{{ product.Category }}</td>
              <td><img :src="product.ProdUrl" alt="product"></td>
              <td>
                 <!-- SVG icon button for editing -->
        <button @click="editProduct(product)">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </button>
                 <!-- SVG icon button for deleting -->
        <button @click="deleteProduct(product.prodID)">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        </button>
              </td>
            </tr>
          </tbody>
        </table>


      </div>

      <AddUser @userRegistered="fetchUsers" />
    <div class="container">
      
    </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import AddProduct from "@/components/AddProduct.vue";
  
  import { capstone } from "@/store";
  
  export default {
    name: "AdminTable",
   components: { AddProduct },
    computed: {
      products() {
        return this.$store.state.products;
      },
      users() {
        return this.$store.state.users;
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
      this.$store.dispatch('UpdateProduct');
      this.$store.dispatch('fetchUsers')
    },
    methods: {
     
  // ================DELETE PRODUCT=======================================
      async deleteProduct(productId) {
      const confirmed = confirm("Are you sure you want to delete this product?");
        if (confirmed) {
          try   {
            await this.$store.dispatch("deleteProduct", productId);
            console.log("Product deleted successfully!");
          } catch (error) {
          console.error("Error deleting product:", error);
          }
        }
        this.$router.push("/admin");
      },
    },
    }
  
  </script>
  
  <style scoped>

  .table img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  
  /* Responsive styles for small screens */
  @media screen and (max-width: 768px) {
    .table-container {
      overflow-x: auto;
    }
    .table {
      width: 100%;
    }
    .table th,
    .table td {
      padding: 10px;
      font-size: 14px;
    }
  }
  
  /* Additional responsive styles as needed */
  @media screen and (max-width: 480px) {
    /* Add specific styles for smaller screens here */
  }
  /* Style for product images */
  .table img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }

  .container {
    border: darkgray;
  }
  
  </style>
  
  
  
  
  
  
  
  
  
  
  
  
  