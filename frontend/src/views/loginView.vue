<template>
  <div class="login-container">
    <div v-if="isLoading" class="spinner-overlay">
      <div class="spinner"></div>
    </div>
    <div class="text-center">
      <h1>Welcome Back</h1>
    </div>
    <div class="login-form">
      <div>
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div >
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn" @click="login">Login</button>
      <p> Don't have an account?<router-link to="register">Register</router-link></p>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import { mapActions } from 'vuex';
import router from '../router';
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    };
  },
  methods: {
    ...mapActions(['setAuthenticated']),
    async login() {
      this.isLoading = true;
      const loginInfo = {
        emailAdd: this.emailAdd,
        userPass: this.userPass
      };

      try {
        const response = await fetch("https://capstone-92p2.onrender.com/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
        });
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('authToken', data.token);
          this.setAuthenticated(true);
          router.push('/');
          Swal.fire({
            title: 'Success!',
            text: 'Logged in successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#ffffff',
            iconColor: 'green',
            confirmButtonColor: 'pink',
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: data.message || 'Error logging in.',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#ffffff',
            iconColor: 'red',
            confirmButtonColor: 'pink',
          });
        }
      } catch (error) {
        console.error("Error logging in:", error.message);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while logging in. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#ffffff',
          iconColor: 'green',
          confirmButtonColor: 'pink',
        });
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
 
<style scoped>
.login-container {
  max-width: 22.875rem;
  height: 20rem;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 1.2rem;
  border: 2px solid pink;
  border-radius: 0.375rem;
  background: transparent;
}
input {
  width: 85%;
  height: 2rem;
  padding: 0.2rem;
  border: 0.063rem solid pink;
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 15px;
}
input:focus {
  border-bottom-width: 0.125rem;
}
button[type="submit"] {
  color: #fff;
  background-color:pink;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 20px;
  width: 30%;
  margin-left: 15px;
}
button[type="submit"]:hover {
  background-color: white;
  color: pink;
}
.error-message {
  color: red;
  margin-top: 0.625rem;
}
.text-center{
    color: pink;
    font-size: 50px;
}
p{
    color: pink;
}
</style>