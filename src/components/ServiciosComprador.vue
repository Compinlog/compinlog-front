<template>
  <div>
    <div class="container__card">
      <img style="width:170px; filter: invert(100%); margin-right:2rem;" src="@/assets/img/logo-white-removebg.png" alt="">
      <h1>
      Incrementa tus ventas de manera más eficiente al enviar cotizaciones a cientos de clientes sin
      preocuparte por las limitaciones.<br/><br/>
      ¡Alcanza tus metas de ventas sin esfuerzo!
    </h1>
    </div>
    <div class="container">
      <div class="card">
        <center><img style="filter: invert(100%);" src="../assets/lista-de-deseos.png" /></center>
        <h1><b style="font-weigth: 500; color: #BC2C2C">COMPRAS</b><br/><br/></h1>
      </div>
      <div style="margin-left: 25%;" class="card">
        <center><img style="filter: invert(100%);" src="../assets/logistica.png" /></center>
        <h1><b style="font-weigth: 500; color: #BC2C2C">INVENTARIO</b><br/><br/></h1>
      </div>
      <div style="margin-left: 50%;" class="card">
        <center><img style="filter: invert(100%);" src="../assets/envio-internacional.png" /></center>
        <h1><b style="font: weigth 500px; color: #BC2C2C">LOGISTICA</b><br/><br/></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Servicios-Comprador',
  data() {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container__card {
  display: flex;
  border-radius: 12px;
  box-shadow: 2px 2px 40px 2px rgba(0, 0, 0, 0.288);   
  padding: 3rem;
  margin: 0;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: -3rem;
  z-index: 5;
}

h1,
h2 {
  font-family: 'Poppins';
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15%;
  padding: 100px;
  margin: 0 auto;
  border-radius: 50px;
}

.card {
  width: 300px;
  height: 300px;
  border-radius: 30px;
  background-image: linear-gradient(180deg, #152120 0, #0f1615 25%, #020202 50%, #000000 75%, #000000 100%);
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: absolute;
  transition: 0.1s ease-out;
}

.card:hover {
  width: 350px;
  height: 350px;
  border-radius: 30px;
  background-image: linear-gradient(180deg, #152120 0, #0f1615 25%, #020202 50%, #000000 75%, #000000 100%);
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 115px;
  height: 115px;
  left: 99px;
  top: 28px;
  padding: 50px;
}

.card h1 {
  font-family: 'Anybody', cursive;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #204945;
}
</style>