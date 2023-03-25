
<template>
    <div>
        <Login></Login>
        <Footer></Footer>
        <Membresia/>
        <Cards/>
        
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Membresia from './components/Membresia.vue'
import Cards from './components/Cards.vue'

export default {
    components: {
        Footer,
        Membresia,
        Login,
        Cards
    }
}
</script>

<style scoped>



</style>
