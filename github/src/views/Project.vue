<template>
  <div class="container">
    <div class="row justify-content-center">
      <Header/>
      <body>
        <div class="card bg-dark text-white card1">
          <img src="img/taco.png" class="card-img" alt="...">
          <div class="card-img-overlay">
          </div>
        </div>
      </body>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
  export default {
    components: {
      Header, Footer
    }
  }
</script>

<style lang="scss" scoped>
  header { width:100%; font-size: 20px;}
  .nav-item { margin-left: 5%;}
  body { width:100%; margin-left: 11%; margin-top: 10%;}

  .card1 { width: 50%; margin-left: 10%; }
</style>