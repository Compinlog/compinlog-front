
<template>
  <div>
    <HeaderHome/>
    <router-view/>
    <Footer/>
    <!--
    <Banner/>
    
    <PantallaVendedor/>
    -->
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import Footer from '@/components/Footer.vue'
//import PantallaVendedor from '@/components/PantallaVendedor.vue'
//import Banner from '@/components/Banner.vue'
//import BannerVue from './components/Banner.vue'

export default {
  components: {
    HeaderHome,
     Footer,
    //PantallaVendedor,
    //Banner,
  }
}
</script>
