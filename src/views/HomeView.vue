<script>

import HeaderHome from '@/components/HeaderHome.vue'
import Footer from '@/components/Footer.vue'

    export default {
    name: "Home-view", // Nombre del componente
    data() {
    // definición de variables y banderas
    return {};
    },

    components: {
        HeaderHome,
        Footer,
    }
};
</script>

<template>
    <div>
        <HeaderHome/>
        <router-view/>
        <Footer/>
    </div>
</template>