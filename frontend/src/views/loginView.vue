<template>
  <div class="code animate__animated animate__slideInLeft">
       <h4 class="text-center">Welcome Back</h4>
        <form @submit.prevent="login">
      <input
        type="text"
        v-model="form.emailAdd"
        placeholder="Email"
        autocomplete="username"
      />
      <input
        type="password"
        v-model="form.userPass"
        placeholder="Password"
        autocomplete="current-password"
      />
      <button type="submit">Login</button>
     <p> Don't have an account?<router-link to="/register">Register</router-link></p>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </form>
    </div>
  </template>
  <script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        form: {
          emailAdd: "",
          userPass: "",
        },
        loginError: null,
      };
    },
    methods: {
      ...mapActions(["loginUser"]),
      async login() {
        try {
          const response = await this.loginUser({
            emailAdd: this.form.emailAdd,
            userPass: this.form.userPass,
          });
          if (
            response &&
            response.token &&
            response.status === 200 &&
            response.data
          ) {
            const token = response.token;
            this.$cookies.set("userToken", token);
            const userData = response.data;
            localStorage.setItem("userData", JSON.stringify(userData));
            this.$router.push("/");
          } else {
            this.$router.push("/");
            console.log(response);
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.loginError = "Log Err";
          } else {
            console.log(error);
          }
        }
      },
    },
  };
  </script>
  <style scoped>
  form {
    max-width: 22.875rem;
    height: 20rem;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 100px;
    padding: 1.875rem;
    border: 2px solid pink;
    border-radius: 0.375rem;
    background: transparent;
  }
  input[type="text"],
  input[type="password"] {
    width: 85%;
    height: 3.125rem;
    padding: 0.938rem;
    border: 0.063rem solid pink;
    border-radius: 0.375rem;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 20px;
    margin-left: 15px;
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
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
    width: 100px;
    margin-left: 15px;
  }
  button[type="submit"]:hover {
    background-color: white;
    color: maroon;
  }
  .error-message {
    color: red;
    margin-top: 0.625rem;
  }
  .text-center{
      color: pink;
      font-size: 50px;
  }
</style>