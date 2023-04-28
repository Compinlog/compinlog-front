<template>
  <div class="container">
    <div>
      <h1 style="margin-top: 100px; color:  #BC2C2C;">¡Las membresías que tenemos para ti!</h1>
      <br />
      <h3 style="text-align: center;color:#1E1E21; ">
        Únete a Compinlog y disfruta beneficios exclusivos que se <br />
        ajusten a tus necesidades y metas.
      </h3>
      <br/><br />
    </div>
    <div class="card">
      <div class="left-column-background1">
        <h3 style="font-weight: 900">COMPRADOR</h3>
        <h1 style="font-weight: 800">$69.900</h1>
        <h6>por mes</h6>
        <button class="button-background1-left-column">Obtener ahora</button>
      </div>
      <div class="right-column">
        <div style="display: flex">
          <img src="../assets/circle-cards.svg" style="margin-right: 1rem" />
          <h2>Asesoría especializada en los departamentos de compra, inventario y Logística</h2>
        </div>
        <h2><img src="../assets/circle-cards.svg" style="margin-right: 1rem" />Soporte 24/7 y con mayor prioridad</h2>
        <h2><img src="../assets/circle-cards.svg" style="margin-right: 1rem" />Cotizaciones más rápidas y sin límites</h2>
      </div>
    </div>
    <div class="card">
      <div class="left-column-background1">
        <h3 style="font-weight: 600">VENDEDOR</h3>
        <h1 style="font-weight: 800; font-size: 26px">Inscripción Gratuita</h1>
        <button class="button-background1-left-column">Obtener ahora</button>
      </div>

      <div class="right-column">
        <h2>
          <img src="../assets/circle-cards.svg" style="margin-right: 1rem" />Incrementa tus ventas de forma mas sencilla
        </h2>
        <h2><img src="../assets/circle-cards.svg" style="margin-right: 1rem" />Mayor vísibilidad para los compradores</h2>
        <div style="display: flex">
          <img src="../assets/circle-cards.svg" style="margin-right: 1rem" />
          <h2>Envía cotizaciones a una gran cantidad de compradores</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1, h2, h3, h6 {
  font-family: 'Poppins';
  margin: 0;
  
}

h2 {
  font-size: 18px;
  font-weight: 300;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 800px;
  align-items: center;
  background-color: #F8F8FA ;
}
.circle-card {
  width: 8px;
  height: 8px;
  background-color: #1E1E21;
}
.card {
  background: #FFFFFF;
}

.left-column-background1 {
  display: grid;
  grid-row: 0.5rem;
  text-align: center;
  background: #C0C0C2 ;
  border-radius: 30px;
  color: #1E1E21;
  padding: 2rem;
  width: 378px;
  
}

.right-column {
  background: #ffffff;
  padding: 50px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: #1E1E21;
}
.card {
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0.5rem 0.5rem 4px #9e9e9e77;
  display: flex;
  margin: 1.5rem;
  overflow: hidden;
  width: 800px;
  height: 320px;
}
.card h1 {
  color: #1E1E21 ;
}

.card h6 {
  font-size: 18px;
}

.card h2 {
  margin: 0;
  color: #1E1E21 ;
}
.card h3 {
  margin: 0;
  color: #1E1E21;
}
.button-background1-left-column {
  border-radius: 30px;
  color: #ffffff;
  font-size: 16px;
  padding: 0.8rem 1.5rem;
  letter-spacing: 0.1rem;
  align-self: center;
  width: 180px;
  background:#BC2C2C ;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0.8rem auto;
  cursor: pointer;
}
</style>
