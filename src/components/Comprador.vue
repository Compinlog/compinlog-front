<template>
  <div class="container-comprador">
    <section style="display: grid; gap: 1rem">
      <h1 class="tittle-comprador">
        Crea y gestiona todas tus órdenes de compra en el mismo lugar
      </h1>
      <h3>
        Ahorra tiempo, presupuesto y esfuerzo al gestionar tu departamento de compras desde un solo
        lugar. Nuestra plataforma te ofrece la mejor manera para hacerlo: más rápido, sencillo y
        eficaz. ¡Diseñado para tu éxito!
      </h3>
      <button class="button-comprador">Descubre Compinlog</button>
    </section>
    <section>
      <h4>TODO EL PROCESO EN UN SOLO LUGAR</h4>
      <h1 class="tittle-comprador">Compras más rápidas</h1>
      <h3>
        Automatiza y estandariza tu flujo de creación de solicitudes de cotización y nosotros las
        distribuimos a los mejores proveedores.
      </h3>
      <div>
        <nav>
          <ul class="MenuSuperior">
            <li><button class="button-steps-comprador">Por cotizar</button></li>
            <li><button class="button-steps-comprador">Adjudicar</button></li>
            <li><button class="button-steps-comprador">Por confirmar</button></li>
            <li><button class="button-steps-comprador">Por enviar</button></li>
            <li><button class="button-steps-comprador">En camino</button></li>
            <li><button class="button-steps-comprador">Recibido</button></li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="section-comprador-tree">
      <div>
        <h3 style="color: #8b53d5">IMPACTO</h3>
        <h1>¡Más que clientes, tenemos aliados estratégicos!</h1>
      </div>
      <div style="margin-top: 2rem" class="text-tree">
        En Compinlog, no solo tenemos clientes, sino que contamos con aliados que nos acompañan en
        el camino de simplificar y revolucionar el proceso de compras empresariales. Juntos, nos
        comprometemos a ofrecer soluciones efectivas para aumentar la productividad y mejorar la
        experiencia de compra. Hacemos que el proceso de compras sea ágil, eficiente y sencillo.
        ¡Únete a nosotros en este camino!
      </div>
    </section>
    <section>
      <img src="@/assets/comprador-image.svg" alt="" />
      <h1 class="tittle-comprador">Asegura la competitividad de tu operación</h1>
      <button class="button-comprador">
        <router-link class="navbar__link" to="/login">Empieza ahora</router-link>
      </button>
    </section>
  </div>
</template>

<style scoped>
.container-comprador {
  display: grid;
  gap: 10rem;
  width: 60%;
  margin: 200px auto;
  text-align: center;
  font-family: sans-serif;
}
.tittle-comprador {
  font-size: 48px;
}
.button-comprador {
  display: flex;
  margin: 2rem auto;
  color: white;
  padding: 2rem;
  align-items: center;
  height: 80px;
  font-size: 24px;
  background: #48cfad;
  box-shadow: 9px 9px 10px rgba(114, 113, 255, 0.25);
  border-radius: 0.5rem;
  border: #48cfad;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 1rem 1rem;
  align-content: center;
}

.button-steps-comprador {
  /*Estilos de los botones*/
  position: relative;
  width: 120px;
  height: 45px;
  color: #4a4a4a;
  background-color: #f0f0f0;
  border-radius: 5px;
  border: 1px solid #48cfad;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold; /*Grosor de letra*/
  align-items: center;
  justify-content: center;
  /*box-shadow: 7px 7px 12px 0 rgba(20, 20, 20, 0.3); /*La sombra que hay debajo de cada botón*/
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.section-comprador-tree {
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-align: start;
}

.text-tree {
  font-size: 24px;
  color: #6e6e6e;
}
.navbar__link {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
</style>