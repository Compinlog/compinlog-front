<template>
<div style="width: 3rem;">
  <div style="margin-top: 1rem; position: absolute;">
      <span class="container__tittle">{{this.nameWindow}}</span> 
    </div>
  <aside class="menu__toggle" :class="{'menu__toggle--active': open == true }">
    <div>
      <img v-if="open == false" style="width:35px;" src="@/assets/img/logo-white-removebg.png" alt="">
      <img v-if="open == true" style="width:115px;" src="@/assets/img/logo-white-full-removebg.png" alt="">
    </div>
    <div>
      <div class="container__router">
        <router-link @click="changeName('Home')" class="side-menu__link" :class="{'side-menu__link--active': open == true }" to="/MiServicios">
          <img style="width: 25px; margin-left:-0.8rem;" src="@/assets/icons/iconHouse.svg" alt="">
          <span class="side-menu__text" :class="{'side-menu__text--active': open == true }">Home</span>
        </router-link>
        <router-link @click="changeName('Service')" class="side-menu__link" :class="{'side-menu__link--active': open == true }" :to="{ name: 'InicioComprador'}">
          <img style="width: 25px; margin-left:-0.8rem;" src="@/assets/icons/iconTray.svg" alt="">
          <span class="side-menu__text" :class="{'side-menu__text--active': open == true }">Mis servicios</span>
        </router-link>
        <router-link @click="changeName('Register Service')" class="side-menu__link" :class="{'side-menu__link--active': open == true }" to="">
          <img style="width: 25px; margin-left:-0.8rem;" src="@/assets/icons/iconCardholder.svg" alt="">
          <span class="side-menu__text" :class="{'side-menu__text--active': open == true }">Registrar Servicios</span>
        </router-link>
      </div>
    </div>
    <button  class="menu__toggle--button" :class="{'menu__toggle--button--active': open == true }" @click="openSidebar">
        <img style="width: 25px;" src="@/assets/icons/iconDoubleRight.svg" alt="">
  </button>
  </aside>
  
</div>
  
</template>

<script>
export default {
  data() {
    return {
      open: false,
      nameWindow: 'Home'
    }
  },
  methods:{
    openSidebar(){
      this.open = !this.open
    },
    changeName(names){
      this.nameWindow = names
    }
  }
}
</script>

<style lang="scss" scoped>
.container__tittle {
  color: white;
  font-family: 'Poppins';
  margin-left: 5rem;
  font-weight: bold;
  font-size: 32px;
  z-index: 5;
}
.menu__toggle {
  position: absolute;
  margin: 0;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(185deg, #cc4f36 0, #c53f31 25%, #bc2c2c 50%, #b31027 75%, #ab0024 100%);
  width: 2rem;
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-out;
  z-index: 10;
  &--button {
    margin-left: -0.3rem;
    margin-top: 5rem;
    background-color: transparent;
    border-style: none;
    &--active {
      width: 30px;
      margin-left: 10rem;
      transform: rotate(-180deg);
  }
  }
  &--active {
    width: 13rem;
    padding: 1rem;
  }
  &--button:hover {
    cursor: pointer;
    &--active:hover {
      cursor: pointer;
  }
  }
}
.container__router {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.side-menu{
&__text{
  display: none;
  &--active{
    margin-left: 1rem;
    display: block;
  }
}
&__link {
  display: flex;
  align-items: center;
  text-align: start;
  height: 25px;
  font-family: sans-serif;
  padding: 1rem;
  text-decoration: none;
  color: white;
  &--active{
  border-width: 1px 0;
  border-color: rgba(255, 255, 255, 0.452);
  border-style: solid;
  }
}
}
.side-menu__link:active {
  background-color: #BC2C2C;
  color: white;
}
</style>