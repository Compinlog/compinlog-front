<template>
  <div class="container">
    
    <div style="display: flex;">
      <div class="container__name"></div>
      <button class="container__button" @click="singout">Cerrar sesion</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar-User',
  data() {
    return {
      userEmail: ''
    }
  },
  methods:{
    singout(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed: {
  now() {
    return this.$store.state.user.email
  }
}
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: flex-end;
  background-image: linear-gradient(180deg, #152120 0, #0f1615 25%, #020202 50%, #000000 75%, #000000 100%);
  &__tittle {
    color: white;
    font-family: 'Poppins';
    margin-left: 5rem;
    font-weight: bold;
    font-size: 32px;
  }
  &__name{
    height: 3rem;
    font-family: 'Poppins';
    color: white;
    margin: 1.4rem 2rem 0 0;
  }
  &__button {
    cursor: pointer;
    height: 2rem;
    border-style: none;
    border-radius: 8px;
    margin: 1rem 1rem 0 0;
  }
}
</style>
