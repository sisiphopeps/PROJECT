<template>
  <div>
    <h2 class="text-center">Register Now!</h2>
    <form @submit.prevent="addUser">
      <input v-model="newUser.firstName" type="text" placeholder="firstName" required>
      <input v-model="newUser.lastName" type="text" placeholder="lastName" required>
      <input v-model="newUser.userRole" type="text" placeholder="userRole" required>
      <input v-model="newUser.emailAdd" type="text" placeholder="Email" required />
      <input v-model="newUser.userPass" type="password" placeholder="Password" required />
      <input v-model="newUser.profileUrl" type="text" placeholder="ProfileUrl" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        firstName: '',
        lastName: '',
        userRole: '',
        emailAdd: '',
        userPass: '',
        profileUrl: '',
      },
    };
  },
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch('addNewUser', this.newUser);
        this.newUser = {
            firstName: '',
            lastName: '',
            userRole: '',
            emailAdd: '',
            userPass: '',
            profileUrl: '',
        };
      } catch (error) {
        console.error('Failed to register user:', error);
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 22.875rem;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 1.875rem;
  border: 2px solid pink;
  border-radius: 0.375rem;
  background: transparent;
}
input {
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

.text-center{
  color:pink;
  font-size: 50px;
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
</style>