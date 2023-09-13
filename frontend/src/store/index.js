import { createStore } from 'vuex'
import axios from 'axios'
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

    addToCart(state, product) {
      const existingProduct = state.cart.find(
        (item) => item.prodID === product.prodID
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
    },
    updateCartItemQuantity(state, { prodID, prodQUANTITY }) {
      const cartItem = state.cart.find((item) => item.prodID === prodID);
      if (cartItem) {
        cartItem.quantity = prodQUANTITY;
      }
    },
    removeItem(state, cartID) {
      const index = state.cart.findIndex((item) => item.cartID === cartID);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    // async fetchUsers(context) {3
    //   try{
    //     const {data} = await axios.get(`${capstone }/users`)
    //     context.commit("setUsers", data.results)
    //     console.log(data.results);
    //   }catch(e){
    //     context.commit("setMsg", "An error occured.")
    //   }
    // },
 
}, 
modules: {
},
})
