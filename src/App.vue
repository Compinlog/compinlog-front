<template>
    <div>
        <Login></Login>
        <Footer></Footer>
        <Membresia/>
        
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Membresia from './components/Membresia.vue'
export default {
    components: {
        Footer,
        Membresia,
        Login
    }
}
</script>

<style scoped>



</style>
