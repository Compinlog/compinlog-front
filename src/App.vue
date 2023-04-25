
<template>
  <div>
    <HeaderHome/>
    <PasarelaPago/>
    <Footer/>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import Footer from '@/components/Footer.vue'
import PasarelaPago from '@/components/PasarelaPago.vue'
// import PasarelaPago from './components/PasarelaPago.vue';

export default {
  components: {
    HeaderHome,
    Footer,
    PasarelaPago,
  }
}
</script>
