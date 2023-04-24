

<template>
    <div class="container">
      <div class="card">
        <center><img src="../assets/lista-de-deseos.png" /></center>
        <h1><b style="font-weigth: 500; color: #8b53d5">COMPRAS</b><br /><br /></h1>
        <p>
          Evaluamos ofertas con cuadros comparativos entre ellas.<br /><br />Negociamos precios y
          <br />marcas.
        </p>
      </div>
      <div class="card">
        <center><img src="../assets/logistica.png" /></center>
        <h1><b style="font-weigth: 500; color: #8b53d5">INVENTARIO</b><br /><br /></h1>
        <p>
          Sistema de control de <br />
          inventario de materiales o mercancía. <br />
          <br />Software de administración y control de inventarios.
        </p>
      </div>
      <div class="card">
        <center><img src="../assets/envio-internacional.png" /></center>
        <h1><b style="font: weigth 500px; color: #8b53d5">LOGISTICA</b><br /><br /></h1>
        <p>
          Transporte y entrega de<br />
          productos. <br />
          <br />
          Seguimiento de transporte.<br /><br />Logística inversa.
        </p>
      </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15%;
  background: linear-gradient(rgba(93, 6, 206, 0.301) 70%, #3d028a 120.27%);
  padding: 100px;
  margin: 0 auto;
  border-radius: 50px;
}

.card {
  width: 100%;
  height: 493px;
  border-radius: 30px;
  overflow: hidden;
  background: linear-gradient(rgba(44, 207, 166, 0.034) 70%, #48cfad 120.27%);
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
  cursor: default;
  background-color: #ffffff;
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

.card p {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 18px;
}
</style>

