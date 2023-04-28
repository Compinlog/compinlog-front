
<template>
    <div class="separador"></div>
        <h1 >Crea y gestiona todas tus órdenes de compra<span style="color:#1E1E21 "> en un solo lugar. </span></h1>
        <p class="parrafo">Ahorra tiempo, presupuesto y esfuerzo al gestionar tu departamento de compras desde un solo lugar.
        Nuestra plataforma te ofrece la mejor manera para hacerlo: más rápido, sencillo y eficaz. ¡Diseñado para
        tu éxito!</p> 

        <div class="separador2"></div>
    
   <div class="cajon">
        <div class="bloqueuno">
        <p class ="textodiv">3.300+</p>
        <p class ="textodiv1">Solicitudes realizadas</p>
        </div>

        <div class="contenedor_vertical"><div class="vertical"></div></div>

        <div class="bloquedos">
        <p class ="textodiv">1.600M+</p>
        <p class ="textodiv1">transacciones exitosas</p> 
        </div>

        <div class="contenedor_vertical"><div class="vertical"></div></div>

        <div class="bloquetres">
        <p class ="textodiv">300+</p>
        <p class ="textodiv1">Proveedores activos</p> 
        </div>

        <div class="bloquecuatro">
        <p>Descubre más</p>
        </div>
   </div>
   <div class="separador1"></div>

<!--Segunda parte del landing-->
   <div class="cajon2">
    <div class="imagen">
        <img style="width: 600px; padding:0px 20px 0px -10px, margin-left:30px" src="@/assets/img/comp.png"/>
    </div>
    <div >
        <h4 style="margin-top:-10px; margin-left:-15px; margin-right: 40px; color:#1E1E21 font-size:60px; font-size:20px">COMPRAS A CRÉDITO</h4>
        <span style=" width:800px;" class="textocajon2">Despídete de los problemas de flujo de caja: Obtén créditos para comprar todo lo que necesites.</span>
    <p class="parrafo2">¡Déjate de preocupaciones y aprovecha todas las oportunidades de compra que se te presenten! <br>Con nosotros, financiar tus compras es fácil e inmediato. Olvídate de los proveedores que no ofrecen créditos y disfruta de todas las opciones de compra sin ninguna preocupación. Contamos con el respaldo necesario para garantizar el pago a tus proveedores.</p>
    </div>
   </div>

</template>


<script>

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400&display=swap');



.separador, .separador1{
  width: 100vw; 
  height: 300px;  
}

.separador2{
  width: 100vw; 
  height: 50px;  
}
.cajon{
  width: 750px; 
  height: 90px;
  display: flex; /*Para que el menu se ponga horizontal*/
  /*display: flex-end;*/
  align-items: center;
  border-radius: 15px;
  margin: auto;
  background-color: #C0C0C2 ;
}

.bloqueuno{
width: 150px;
height: 70px;
padding: 10px;
display: flex;
border-radius: 12px 0px 0px 12px; 
align-items: center; /*Centra a nivel vertical*/
color:  #1E1E21 ;
flex-direction: column; /*Hace que el display flex sea en sentido vertical y no horizontal*/
line-height: 0.5; /*Distancia entre lineas de texto o entre contenedores: Acerca o aleja una linea de texto de la otra*/
/*border-right: solid #55008e;*/


}

.bloquedos, .bloquetres{
    font-family:  "Roboto";
    
    padding: 10px;
    display: flex;
    /*position: relative;*/
   /*align-content: center;*/
    align-items: center; /*Centra a nivel vertical*/
    color: #1E1E21 ;
    width: 150px;
    height: 70px;
    flex-direction: column; /*Hace que el display flex sea en sentido vertical y no horizontal*/
    border-right: 20px;
    border-right-color:  #1E1E21 ;
    line-height: 0.5; /*Distancia entre lineas de texto o entre contenedores: Acerca o aleja una linea de texto de la otra*/   
}

.bloquecuatro{
    font-family: "Roboto";
    background-color: #1E1E21 ;
    border-radius: 0px 12px 12px 0px; 
    padding: 10px;
    display: flex;
    /*position: relative;*/
    /*align-content: center;*/
    align-items: center; /*Centra a nivel vertical*/
    color: #ffffff;
    width: 200px;
    height: 70px;
    flex-direction: column; /*Hace que el display flex sea en sentido vertical y no horizontal*/
    line-height: 0.5; /*Distancia entre lineas de texto o entre contenedores: Acerca o aleja una linea de texto de la otra*/   
    font-size: 20px;
    justify-content: center; /*Centra a nivel horizontal*/
    font-weight: 550;
}

.textodiv{
    font-family: Poppins;
    width: 200px;
    height: 35px;
    margin:0;
    margin-top: 10PX;
    align-items: center; /*Centra a nivel vertical*/
    display: flex;
    color:  #1E1E21 ;
    font-size: 30px;
    justify-content: center; /*Centra a nivel horizontal*/
    font-weight: 700;
}

.textodiv1{
    font-family: 'Roboto';
    font-size: 10px;
    margin-top: 5px;
   
    justify-content: center; /*Centra a nivel horizontal*/
    align-items: center; /*Centra a nivel vertical*/
}

h1{
    color:#BC2C2C;
    font-family:'poppins';
    font-weight: 800;

    justify-content: center; /*Centra a nivel horizontal*/
    align-items: center; /*Centra a nivel vertical*/
    width:1200px;
    margin: auto;
    margin-top:-100px;
    margin-bottom: 50px;
    font-size: 60px;

    text-align: center; /*Alinea el texto hacia el centro*/
}
.parrafo{
    font-family: 'Roboto';
    font-size: 26px;
    font-weight: 400;
    color: #697279;
    justify-content: center; /*Centra a nivel horizontal*/
    align-items: center; /*Centra a nivel vertical*/
    width:900px;
    margin: auto;
    line-height: 32px; /*Altura o salto entre lineas de texto*/
    font-size: 21px;
    text-align: center; /*Alinea el texto hacia el centro*/
    font-weight: 400;
}

.contenedor_vertical{
    height: 90px;
    width: 10px;
    background-color: #d8d3d3;
    justify-content: center; /*Centra a nivel horizontal*/
    align-items: center; /*Centra a nivel vertical*/   
}
.vertical{
    width: 3px;
    height: 70px;
    background-color:#BC2C2C;
    margin-top:10px;
    margin-left: 4.5px;
}

/*Segunda Parte*/

.cajon2{
display: grid;
grid-template-columns: 1.5fr 1fr;
text-align: start;
margin-top: 60px;
grid-column-gap: 150px;
}

.imagen{
    width:300px;
    height: 500px;
    margin: auto;
    margin-left: 150px;
    border-radius: 20px;
}

.textocajon2 {
    color:#BC2C2C;
    font-family:'poppins';
    font-size:40px; 
    text-align:start;
    display: flex;
    margin-left:-15px;
    margin-right: 40px;

}

.textocajon2 p{
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 400;
  color: #697279;
  margin-left: 380px;
  margin-top: 130px;
}

h4{
    font-family:"Roboto"; 
    color:#1E1E21 ;
    /*justify-content: flex-start; /*Ubica a izquierda*/
    align-items: center; /*Centra a nivel vertical*/
    width:500px;
    font-size: 15px;
    font-weight: 700;
    line-height: 48px; /*Altura entre lineas de texto*/
    text-align: left; /*Alinea el texto hacia la izquierda*/
    margin:0;
}

h2{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto"; 
    width:500px;
    font-size: 29px;
    line-height: 40px; /*Altura o salto entre lineas de texto*/
    margin-top: 5px;
}
.parrafo2{
   font-family: 'Roboto';
    font-size: 26px;
    font-weight: 400;
    color: #697279;
    margin-left:-15px;
    margin-right: 40px;

}



</style>


