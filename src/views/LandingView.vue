<script>
import Cards from '../components/Cards.vue'
import Banner from '../components/Banner.vue'
import BlogHome from '../components/BlogHome.vue'
import Membresia from '../components/Membresia.vue'


    export default {
    name: "Landing-view", // Nombre del componente
    data() {
    // definición de variables y banderas
    return {};
    },
    // estados o propiedades
    components: {
        Banner,
        Cards,
        BlogHome,
        Membresia,
        
    }
};
</script>

<template>
    <div>
        <Banner/>
        <Cards/>
        <BlogHome/>
        <Membresia/>
    </div>
</template>