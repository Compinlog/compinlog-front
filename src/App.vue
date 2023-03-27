
<template>
  <div>
    <HeaderHome/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import HeaderHome from '@/components/HeaderHome.vue'
export default {
  components: {
    HeaderHome,
    Footer,

  }
}
</script>


<style scoped>



</style>
