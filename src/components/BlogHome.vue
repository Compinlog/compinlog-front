
<template>
  <div id="contenedor_completo_blog">
    <!--COMPRADOR-->
    <div id="horizontal_comprador">
      <div id="texto_comprador">
        <h3 id="titulo_comprador">COMPRADOR</h3>
        <p id="parrafo1_comprador">
          Ahorra tiempo, presupuesto y esfuerzo al gestionar tus departamentos de compras,
          inventario y logística desde un solo lugar
        </p>
        <p id="parrafo2_comprador">
          Nuestra plataforma te ofrece la mejor manera para hacerlo: más rapido, sencillo y eficaz
        </p>
        <button id="boton_comprador">Más información</button>
      </div>
      <div id="video_comprador"></div>
    </div>
    <!--VENDEDOR-->
    <div id="horizontal_vendedor">
      <div id="video_vendedor"></div>
      <div id="texto_vendedor">
        <h3 id="titulo_vendedor">VENDEDOR</h3>
        <p id="parrafo1_vendedor">¡Enfocate en vender y no en buscar clientes!</p>
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
#contenedor_completo_blog {
  display: grid;
  gap: 200px;
  font-family: sans-serif;
  padding: 183px 183px 100px 183px;
  justify-content: space-between;
  background-color: #eee;
}

#texto_comprador,
#texto_vendedor {
  justify-content: left;
  font-style: normal;
font-weight: 400;
font-size: 24px;
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
  background-color: #373737;
  align-items: center;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  width: 160px;
  height: 45px;
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
  width: 280px;
}

#parrafo2_comprador,
#parrafo2_vendedor {
  width: 290px;
}
</style>
