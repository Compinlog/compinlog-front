<script>
import Membresia from '../components/Membresia.vue'
import Cards from '../components/Cards.vue'
import Banner from '../components/Banner.vue'
import BlogHome from '../components/BlogHome.vue'

    export default {
    name: "Home-view", // Nombre del componente
    data() {
    // definición de variables y banderas
    return {};
    },
    // estados o propiedades
    components: {
        Banner,
        Cards,
        Membresia,
        BlogHome
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