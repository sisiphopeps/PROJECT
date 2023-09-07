<template>
    <div>
        <h2>Login</h2>
    <form @submit.prevent="login" class="container">
      <label for="username">Email:</label><br>
      <input type="text" id="username" v-model="username" /><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" v-model="password" /><br>
      <button type="submit">Enter</button>
    </form>
    </div>
</template>
<script>


export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {

      this.error = '';

        // validation
    if (!this.emailAdd || !this.password) {
      this.error = 'Please enter both username and password.';
      return;
    }

      if (this.emailAdd === 'user' && this.password === 'password') {
        // Redirect to the home page
        this.$router.push({ name: 'home' });
      } else {
      this.error = 'Invalid email or password.';
    }
    },
  },
};
</script>
<style scoped>
    .container {
 justify-content: center;
 align-items: center;
 background-color: #D9D9D9;
 border-radius: 10px;
 width: 40%;
    }

    input{
      border-radius: 10px;

    }
</style>
