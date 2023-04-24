
<template>
    <div>
        <HeaderHome/>
        <Login></Login>
        <Footer></Footer>
        <Membresia/>
        <Cards/>
        <BlogHome/>
        <Banner/>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Membresia from './components/Membresia.vue'
import Cards from './components/Cards.vue'
import Banner from './components/Banner.vue'
import BlogHome from './components/BlogHome.vue'
import HeaderHome from './components/HeaderHome.vue'

export default {
    components: {
        Footer,
        Membresia,
        Login,
        Cards,
        Banner,
        HeaderHome,
        BlogHome
    }
}
</script>

<style scoped>



</style>
