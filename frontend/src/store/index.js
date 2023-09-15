import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useCookies } from 'vue3-cookies';
const capstone = "https://capstone-92p2.onrender.com/";


export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    spinner: false,
    token: null,
    msg: null,
    cart: [],
    sortBy: "",
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users =users
    },
    setUser(state, user){
      state.user =user
    },
    setProducts(state, products){
      state.products =products
    },
    setProduct(state, product){
      state.product = product
    },
    setSpinner(state, value){
      state.spinner = value
    },
    setToken(state, token){
      state.token = token
    },
    setMsg(state, msg){
      state.msg = msg
    },
    setDeletionStatus(state, status) {
      state.deletionStatus = status;
    },
    addProduct(state, newProduct) {
      state.products.push(newProduct);
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(product => product.ProdID !== productId)
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.userID !== userId)
    },
    setCart(state, cart) {
    state.cart = cart;
  },

  addProductToCart(state, product) {
    state.cart.push(cartID);
  },
 
  },
  actions: {
   
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${capstone}products`);
        context.commit("setProducts", data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
        context.commit("setMsg", "An error occurred while fetching products.");
      }
    },

    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${capstone}users`);
        context.commit("setUsers", data.results);
      } catch (error) {
        console.error("Error fetching products:", error);
        context.commit("setMsg", "An error occurred while fetching users.");
      }
    },
    
    async fetchProduct(context, prodID) {
      try {
        const { data } = await axios.get(`${capstone}products/${prodID}`);
        context.commit("setProduct", data.result[0]);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

    async addNewProduct(context, newProduct) {
      try {
        const response = await axios.post(`${capstone}add-product`, newProduct);
        if (response.status === 201) {
          context.commit('addProduct', newProduct);
        }
      } catch (error) {
        console.error('Error adding new product:', error);
      }
    },

    async addNewUser(context, newUser) {
      try {
        const response = await axios.post(`${capstone}register`, newUser);
        if (response.status === 201) {
          context.commit('addUser', newUser);
        }
      } catch (error) {
        console.error('Error adding new user:', error);
      }
    },

    async deleteProduct(context, productId) {
      try {
        const response = await fetch(`${capstone}products/${productId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          context.commit('deleteProduct', productId);
        } else {
          throw new Error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },

    async deleteUser(context, userId) {
      try {
        const response = await fetch(`${connection}user/${userId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          context.commit('deleteUser',userId);
        } else {
          throw new Error('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },

     updateProduct(context, updatedData) {
      try {
        const response = axios.put(`${capstone}products/${updatedData.prodID}`, updatedData);
        
        if (response.status !== 200) {
          throw new Error(`Failed to update product. Status: ${response.status}`);
        }
        
        context.commit("updateProduct", { prodID, updatedData });
        context.commit("setEditStatus", "success");
      } catch (error) {
        console.error("Error editing product:", error);
        context.commit("setEditStatus", "error");
      }
    },

    async login(context, payload) {
      try {
        const response = await axios.post(`${capstone }login`, payload);
        const { msg, token, results } = response.data;
        if (results) {
          context.commit("setToken", token);
          context.commit("setUser", { results, msg });
          cookies.set("LegitUser", { token, msg, results });
          Swal.fire({
            title: msg,
            icon: "success",
            text: `Welcome back ${results?.userName}`,
            timer: 3000,
          });
          router.push({ name: "home" });
        }
      } catch (error) {
        console.log("clicked");
        const msg =
          error.response?.data?.msg || "An error occurred during login";
        Swal.fire({
          title: "Error",
          icon: "error",
          text: msg,
          timer: 3000,
        });
      }
    },

  },

modules: {
},
})
