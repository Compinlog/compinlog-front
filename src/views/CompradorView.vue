<script>
import InicioCompradorV2 from '../components/InicioCompradorV2.vue'
import NavbarUser from '../components/NavbarUser.vue'
import SideMenu from '../components/SideMenu.vue'


export default {
  name: 'Comprador-view', // Nombre del componente
  data() {
    // definición de variables y banderas
    return {}
  },
  // estados o propiedades
  components: {
    InicioCompradorV2,
    SideMenu,
    NavbarUser
  },
  methods: {}
}
</script>

<template>
  <div class="container__compradorview">
    <SideMenu class="container__menu"/>
    <section class="container__section">
      <NavbarUser class="container__navbar"/>
      <router-view style="padding-left: 10rem;"/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container__compradorview {
  display: grid;
  background-color: white;
  &__menu{
    margin-right: 3rem;
  }
}
</style>