import { createStore } from 'vuex'
import axios from 'axios'
const capstone = "https://capstone-mp0y.onrender.com/";

export default createStore({
  state: {
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null
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
    setmsg(state, msg){
      state.msg = msg
    },
    setDeletionStatus(state, status) {
      state.deletionStatus = status;
    },
   
  },
  actions: {
   
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${capstone}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
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

     
      
  
    async deleteProduct(context, prodID) {
      try {
        context.commit("setDeletionStatus", null);
        
        const response = await axios.delete(`${fullStackEOMPUrl}products/${prodID}`);
        
        if (response.status !== 200) {
          throw new Error(`Failed to delete product. Status: ${response.status}`);
        }
        
        context.commit("removeProduct", prodID);
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        context.commit("setDeletionStatus", "error");
      }
    },
     updateProduct(context, updatedData) {
      try {
        const response = axios.put(`${fullStackEOMPUrl}products/${updatedData.prodID}`, updatedData);
        
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
 
}, 
modules: {
},
})
