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
        <router-view style="margin-bottom: 6rem;"/>
        <Footer/>
    </div>
</template>