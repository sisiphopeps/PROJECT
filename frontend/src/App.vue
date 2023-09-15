<template>
<div>
  <Navbar/>
  <router-view/>
  <Footer/>
</div>

</template>
<script>
 import Navbar from './components/NavbarComp.vue';
import Footer from './components/FooterComp.vue';
export default {
  components: {Navbar, Footer}
}
</script>




<style>
#app {

  font-family: 'Cormorant', serif;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
