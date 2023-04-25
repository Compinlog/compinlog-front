
<template>
    <div class="separador"></div>
        <h1>Crea y gestiona todas tus órdenes de compra en el mismo lugar</h1>
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
        <p class ="textodiv1">En transacciones exitosas</p> 
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
        <img src="../assets/imagen1LV.png" alt="Dibujo" >
    </div>
    <div class="textocajon2">
        <h4>COMPRAS A CRÉDITO</h4>
        <h2>Despídete de los problemas de
    flujo de caja: Obtén créditos para
    comprar todo lo que necesites.</h2>
    <p class="parrafo2">¡Déjate de preocupaciones y aprovecha todas las oportunidades de compra que se te presenten! Con nosotros, financiar tus compras es fácil e inmediato. Olvídate de los proveedores que no ofrecen créditos y disfruta de todas las opciones de compra sin ninguna preocupación. Contamos con el respaldo necesario para garantizar el pago a tus proveedores.</p>
    </div>
   </div>

</template>


<script>

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
}

.bloqueuno{
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
--e-global-typography-accent-font-family: "Roboto";
background-color: #d8d3d3;
width: 150px;
height: 70px;
padding: 10px;
display: flex;
border-radius: 12px 0px 0px 12px; 
align-items: center; /*Centra a nivel vertical*/
color: #333;
flex-direction: column; /*Hace que el display flex sea en sentido vertical y no horizontal*/
line-height: 0.5; /*Distancia entre lineas de texto o entre contenedores: Acerca o aleja una linea de texto de la otra*/
/*border-right: solid #55008e;*/
padding-right: 5px solid #55008e;

}

.bloquedos, .bloquetres{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto";
    background-color: #d8d3d3;
    padding: 10px;
    display: flex;
    /*position: relative;*/
   /*align-content: center;*/
    align-items: center; /*Centra a nivel vertical*/
    color: #333;
    width: 150px;
    height: 70px;
    flex-direction: column; /*Hace que el display flex sea en sentido vertical y no horizontal*/
    border-right: 20px;
    border-right-color: #55008e;
    line-height: 0.5; /*Distancia entre lineas de texto o entre contenedores: Acerca o aleja una linea de texto de la otra*/   
}

.bloquecuatro{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto";
    background-color: #524040;
    border-radius: 0px 12px 12px 0px; 
    padding: 10px;
    display: flex;
    /*position: relative;*/
    /*align-content: center;*/
    align-items: center; /*Centra a nivel vertical*/
    color: rgb(196, 155, 240);
    width: 150px;
    height: 70px;
    flex-direction: column; /*Hace que el display flex sea en sentido vertical y no horizontal*/
    line-height: 0.5; /*Distancia entre lineas de texto o entre contenedores: Acerca o aleja una linea de texto de la otra*/   
    font-size: 20px;
    justify-content: center; /*Centra a nivel horizontal*/
    font-weight: 550;
}

.textodiv{
    width: 150px;
    height: 35px;
    margin:0;
    align-items: center; /*Centra a nivel vertical*/
    display: flex;
    color: rgb(79, 9, 155);
    font-size: 30px;
    justify-content: center; /*Centra a nivel horizontal*/
    font-weight: 650;
}

.textodiv1{
    font-size: 13px;
    justify-content: center; /*Centra a nivel horizontal*/
    align-items: center; /*Centra a nivel vertical*/
}

h1{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto"; 
    color: #48CFAD;
    justify-content: center; /*Centra a nivel horizontal*/
    align-items: center; /*Centra a nivel vertical*/
    width:960px;
    margin: auto;
    margin-bottom: 50px;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px; /*Altura entre lineas de texto*/
    text-align: center; /*Alinea el texto hacia el centro*/
}
.parrafo{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto"; 
    color: #121515;
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
    background-color:#6a53d5;
    margin-top:10px;
}

/*Segunda Parte*/

.cajon2{
display: grid;
display: flex;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
--e-global-typography-accent-font-family: "Roboto";
width: 100vw;
justify-content: space-between;
}

.imagen{
    width:500px;
    height: 500px;
    margin: auto;
    border-radius: 20px;
}

.textocajon2{
    width:500px;
    margin: auto;
    margin-top:0px;
    margin-left: 20px;
}

h4{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto"; 
    color: #48CFAD;
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
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    --e-global-typography-accent-font-family: "Roboto"; 
    width:500px;
    font-size: 19px;
    line-height: 28px; /*Altura o salto entre lineas de texto*/
}



</style>


