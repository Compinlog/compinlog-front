<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.svg" alt="Compinlog" >
      </div>
    <nav>
      <ul class = "MenuSuperior">
        <li><button id="B_Home">Home</button></li>

        <li><button id="B_Servicios">Servicios</button></li>

        <li><button id="B_Membresias">Membresías</button></li>

        <li><button id="B_Blog">Blog</button></li>

        <li><button id="B_Login">Login</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
//export default {
//  name: 'Header',
//  props: {
//    msg: String
//  }
//}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

html{
  background-color: #F0F0F0;
}

header{
top: 0px; /*Que se pegue a la parte superior de la ventana*/
align-items: center;
display: flex;
/*display: inline-block;*/
width: 100vw;/*100% ancho de la ventana*/
height: 75px;
/*padding: 10px; /*Borde interno del header*/
padding-top: 43px;
margin: 0px;
border: none;
background-color: #F0F0F0;
justify-content: space-between;
}

/*nav{
align-items: center;
display: flex;
}*/

.logo{ /*Contenedor que guarda el logo*/
height: 75px;
width: 35%; /*Ancho del 35% del ancho total del padre Header*/
border: none;
display: flex;
margin-left: 63px;
/*align-items: left; /*Que pegue el logo a la parte izquierda del header*/
/*justify-content: center;*/
float:left; /*Mandar el logo a la parte derecha*/
}

.MenuSuperior{
  width: 600px; 
  height: 30px;
  display: flex; /*Para que el menu se ponga horizontal*/
  /*display: flex-end;*/
  align-content: right;
  margin-left: auto;
  margin-right: 40px;
  list-style: none; /*Para que no salgan las viñetas negras que enumeran los elementos de la lista*/  
  float: right;
  align-items: center;
}

li {
  align-content: center;
  margin-left: auto; /*Margenes auto para que se ajusten proporcionalmente al ancho del menu superior navbar*/
  margin-right: auto; /*Margenes auto para que se ajusten proporcionalmente al ancho del menu superior navbar*/
}

button{ /*Estilos de los botones*/
  position: relative;
  width: 100px;
  height: 35px;
  color: #4A4A4A;
  background-color: #F0F0F0;
  border-radius: 5px;
  border: 1px solid #989898;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;/*Grosor de letra*/
  align-items: center;
  justify-content: center;
  /*box-shadow: 7px 7px 12px 0 rgba(20, 20, 20, 0.3); /*La sombra que hay debajo de cada botón*/  
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
   
#B_Home{  /*Estilos para un ID especial*/
  color: white;
  border: 1px solid #373737;
  background-color: #373737;
}




/*Display: grid  - Es una instrucción CSS para poner todo en forma de cuadriculas*/






h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/*a {
  color: #42b983;
}*/
</style>



