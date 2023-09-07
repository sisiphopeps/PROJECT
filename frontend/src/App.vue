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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
