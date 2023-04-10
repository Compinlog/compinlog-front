<script>
import Cards from '../components/Cards.vue'
import Banner from '../components/Banner.vue'
import BlogHome from '../components/BlogHome.vue'
import Membresia from '../components/Membresia.vue'
import InicioComprador from '../components/InicioComprador.vue'

    export default {
    name: "Home-view", // Nombre del componente
    data() {
    // definición de variables y banderas
    return {};
    },
    // estados o propiedades
    components: {
        InicioComprador,
        Banner,
        Cards,
        BlogHome,
        Membresia,
        
    }
};
</script>

<template>
    <div>
        <InicioComprador/>
        <Banner/>
        <Cards/>
        <BlogHome/>
        <Membresia/>
    </div>
</template>