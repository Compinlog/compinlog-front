
<template>
  <div class="contenedor_completo_blog">
    <!--COMPRADOR-->
    <div id="horizontal_comprador">
      <div id="texto_comprador">
        <h3 class="titulo_comprador">Comprador</h3>
        <p id="parrafo1_comprador" style="color: #FFFFFF;">
          Ahorra tiempo, presupuesto y esfuerzo al gestionar tus departamentos de compras,
          inventario y logística desde un solo lugar.
        </p>
        <p id="parrafo2_comprador">
          Nuestra plataforma te ofrece la mejor manera para hacerlo: más rapido, sencillo y eficaz.
        </p>
        <button id="boton_comprador"><router-link class="navbar__link" to="/comprador">Más información</router-link></button>
      </div>
      <img style="width: 600px;" src="@/assets/img/log.png"/>
    </div>
    <!--VENDEDOR-->
    <div id="horizontal_vendedor">
      <img style="width: 600px; padding:0px 20px 0px -10px" src="@/assets/img/comp.png"/>
      <div id="texto_vendedor">
        <h3 class="titulo_comprador">Vendedor</h3>
        <p id="parrafo1_vendedor" style="color: #FFFFFF;">¡Enfocate en vender y no en buscar clientes!</p>
        <p id="parrafo2_vendedor">
          Gracias a esta plataforma, tus empleados podrán realizar cientos de cotizaciones de
          compradores y lo mejor es que no debes pasar por tediosos procesos de registro de
          proveedores.
        </p>
        <button id="boton_vendedor">Más información </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400&display=swap');

.contenedor_completo_blog {
  display: grid;
  gap: 200px;

  padding: 183px 15% 100px 15%;
  justify-content: space-between;
  background-color:#11151E;
}

.titulo_comprador {
  color:#FFFFFF;
  font-family: 'Poppins';
  font-size: 38px;
  line-height: 40px;
}

#texto_comprador,
#texto_vendedor {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0px 30px 0px 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height:29px;
  
}

#video_comprador,
#video_vendedor {
  width: 568px;
  height: 447px;
  border-radius: 15px;
  background-color: #ababab;
}

button {
  color: #FFFFFF;
  background-color: #BC2C2C;
  align-items: center;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  font-family: 'Roboto';
  border-radius: 5px;
  cursor: pointer;
  width: 160px;
  height: 45px;
  border:none;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
}

#horizontal_vendedor,
#horizontal_comprador {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 60px;
}

p {
  font-size: 16px;
}

#parrafo1_comprador,
#parrafo1_vendedor {
  font-weight: bold; /*Grosor de letra*/
  width: 300px;
  color: #FFFFFF;
  font-size: 22px;
}

#parrafo2_comprador,
#parrafo2_vendedor {
  width: 300px;
  font-size: 20px;
  color:#FFFFFF;
  
}

.parrafo2_vendedor{
  margin-right: 100px;
}

.navbar__link {
  text-decoration: none;
  color: white;
}
</style>
