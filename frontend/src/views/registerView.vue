<template>
    <div>
        <h1>Registration Form</h1>
        <form @submit.prevent="register">
          <label for="username">UserId:</label>
          <input type="text" id="username" v-model="username" required>
          
          <label for="password">Name:</label>
          <input type="password" id="password" v-model="password" required>

          <label for="password">Surname:</label>
          <input type="password" id="password" v-model="password" required>

          <label for="password">Date of birth:</label>
          <input type="password" id="password" v-model="password" required>

          <label for="password">Role:</label>
          <input type="password" id="password" v-model="password" required>

          <label for="password">Email:</label>
          <input type="password" id="password" v-model="password" required>
          
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>

          <label for="password"></label>
          <input type="password" id="password" v-model="password" required>


          <button type="submit">Register</button>
        </form> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>