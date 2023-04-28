<template>
  <div class="container-comprador">
    <section style="display: grid; gap: 1rem">
      <h1 class="tittle-comprador" >
        Crea y gestiona todas tus órdenes de compra <span style="color:#BC2C2C"> en un solo lugar. </span>
      </h1>
      <p class="text-tree" style="margin-top:15px" >
        Ahorra tiempo, presupuesto y esfuerzo al gestionar tu departamento de compras desde un solo
        lugar. 
        <br> Nuestra plataforma te ofrece la mejor manera para hacerlo: más rápido, sencillo y
        eficaz. <br> ¡Diseñado para tu éxito!
      </p>
      <button class="button-comprador">DESCUBRE COMPINLOG</button>
    </section>
    <section style="background-color: #1E1E21; margin: 100px 0px  auto; padding: 10px 0px 0px 10px ">
      
      <h1 class="tittle-comprador" style="color:#FFFFFF">Compras más rápidas</h1>
      <p class="text-tree " style="padding: 10px 10px 0px 10px; color:#FFFFFF ">
        Automatiza y estandariza tu flujo de creación de solicitudes de cotización y nosotros las
        distribuimos a los mejores proveedores.
      </p>
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
        <h3 style="color:#697279"> IMPACTO</h3>
        <h1 style="color:#1E1E21; font-family:popins; font-weigth:900; font-size:40px">¡Más que clientes,<span style="color:#BC2C2C; font-family:popins; font-weigth:900; font-size:40px; margin-top:0px" > tenemos aliados estratégicos!</span></h1>
        <p>En Compinlog, no solo tenemos clientes, sino que contamos con aliados que nos acompañan en
        nuestra misión de simplificar y revolucionar los procesos empresariales. Trabajamos juntos y nos comprometemos a ofrecer soluciones efectivas que aumenten la productividad y mejoren la experiencia en los departamentos de compra, inventario y logística. Nos enfocamos en hacer que el proceso sea ágil, eficiente y sencillo para todos los involucrados.<br><br>
        <span style="color:#1E1E21">¡Únete a nosotros en este camino!</span></p>
      </div>
      <div style="margin-top: 4rem" class="text-tree">
        <img src="@/assets/img/log.png" alt=""/>
        
      </div>
    </section>
    <section>
      
      <h1 class="tittle-comprador">Asegura la competitividad de tu operación</h1>
      <button class="button-comprador">
        <router-link class="navbar__link" to="/login">Empieza ahora</router-link>
      </button>
    </section>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400&display=swap');

.container-comprador {
  display: grid;
  gap: 7rem;
  width: 90%;
  margin: 100px auto;
  text-align: center;
  font-family: 'Roboto';
 background-color:#F8F8FA;
 padding: 0 25px;
  
}
.tittle-comprador {
  font-family: 'Poppins';
  font-style: normal;
  font-size: 60px;
  font-weight: 800;
  margin-top: 90px;
  
}
.button-comprador {
  display: flex;
  margin: 2rem auto;
  color: white;
  padding: 2rem;
  align-items: center;
  height: 80px;
  font-size: 24px;
  background: #BC2C2C ;
  box-shadow: 9px 9px 10px rgba(114, 113, 255, 0.25);
  border-radius: 0.5rem;
  border: none;
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
  color: #FFFFFF;
  background-color: #BC2C2C;
  border-radius: 5px;
  border: 1px solid  #BC2C2C;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal; /*Grosor de letra*/
  align-items: center;
  justify-content: center;
  /*box-shadow: 7px 7px 12px 0 rgba(20, 20, 20, 0.3); /*La sombra que hay debajo de cada botón*/
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 100px;
}

.section-comprador-tree {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  text-align: start;
  margin-top: 60px;
  grid-column-gap: 150px;
}


.text-tree {
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 400;
  color: #697279;
}
.navbar__link {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
.section-comprador-tree p{
  font-family: "Roboto";
  font-size: 24px;
  color:#697279
  
}
</style>