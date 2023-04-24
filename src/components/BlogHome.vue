
<template>
  <div class="contenedor_completo_blog">
    <!--COMPRADOR-->
    <div id="horizontal_comprador">
      <div id="texto_comprador">
        <h3 class="titulo_comprador">COMPRADOR</h3>
        <p id="parrafo1_comprador" style="color: #8b53d5;">
          Ahorra tiempo, presupuesto y esfuerzo al gestionar tus departamentos de compras,
          inventario y logística desde un solo lugar.
        </p>
        <p id="parrafo2_comprador">
          Nuestra plataforma te ofrece la mejor manera para hacerlo: más rapido, sencillo y eficaz.
        </p>
        <button id="boton_comprador"><router-link class="navbar__link" to="/comprador">Más información</router-link></button>
      </div>
      <img style="width: 600px;" src="@/assets/blog-image-comp.svg"/>
    </div>
    <!--VENDEDOR-->
    <div id="horizontal_vendedor">
      <img style="width: 600px;" src="@/assets/blog-image-vend.svg"/>
      <div id="texto_vendedor">
        <h3 class="titulo_comprador">VENDEDOR</h3>
        <p id="parrafo1_vendedor" style="color: #8b53d5;">¡Enfocate en vender y no en buscar clientes!</p>
        <p id="parrafo2_vendedor">
          Gracias a esta plataforma, tus empleados podrán realizar cientos de cotizaciones de
          compradores y lo mejor es que no debes pasar por tediosos procesos de registro de
          proveedores.
        </p>
        <button id="boton_vendedor">Más información</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor_completo_blog {
  display: grid;
  gap: 200px;
  font-family: sans-serif;
  padding: 183px 15% 100px 15%;
  justify-content: space-between;
  background-color: #eee;
}

.titulo_comprador {
  color: #48cfad;
}

#texto_comprador,
#texto_vendedor {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-style: normal;
font-weight: 400;
font-size: 32px;
}

#video_comprador,
#video_vendedor {
  width: 568px;
  height: 447px;
  border-radius: 15px;
  background-color: #ababab;
}

button {
  color: white;
  background-color: #48cfad;
  align-items: center;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  width: 160px;
  height: 45px;
  border: #48cfad;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
}

#horizontal_vendedor,
#horizontal_comprador {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 116px;
}

p {
  font-size: 16px;
}

#parrafo1_comprador,
#parrafo1_vendedor {
  font-weight: bold; /*Grosor de letra*/
  width: 70%;
  color: #3a0874;
  font-size: 22px;
}

#parrafo2_comprador,
#parrafo2_vendedor {
  width: 70%;
  font-size: 20px;
}

.navbar__link {
  text-decoration: none;
  color: white;
}
</style>
