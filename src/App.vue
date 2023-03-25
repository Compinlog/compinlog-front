
<template>
    <div>
        <Login/>
        <Footer/>
        <Membresia/>
        <Cards/>
        <Banner/>
    </div>
</template>
<script>
import NewComponent from './components/NewComponent.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Membresia from './components/Membresia.vue'
import Cards from './components/Cards.vue'
import Banner from './components/Banner.vue'

export default {
  components: {
    NewComponent,
    Footer,
    Membresia,
    Login,
    Cards,
    Banner,
  }
}
</script>


<style scoped>



</style>
