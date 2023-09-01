<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sisipho's<br>Vogue Vault</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link" to="/">HOME</router-link>

              <router-link class="nav-link" to="/about">ABOUT</router-link>

              <router-link class="nav-link" to="/products">PRODUCTS</router-link>

              <router-link class="nav-link" to="/contact">CONTACT</router-link>

              <router-link class="nav-link" to="/admin">ADMIN</router-link>

              <router-link class="nav-link" to="/login">LOGIN</router-link>

              <router-link class="nav-link" to="/wishlist">WISHLIST</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<style scoped>
.navbar {
  padding: 10px;
  background-color: #F4C2C2 !important;
  color: white !important;
}

.navbar-nav {
  font-weight: bold;
 color:white !important;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>