
<template>
  <div>
    <HeaderHome/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    HeaderHome,
    Footer,
  }
}
</script>
