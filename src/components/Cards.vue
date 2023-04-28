

<template>
    <div class="container">
      <div class="card">
        <center><img src="../assets/lista-de-deseos.png" /></center>
        <h1><b>Compras</b><br /><br /></h1>
        <p>
          Evaluamos ofertas con<br /> cuadros comparativos entre ellas.<br /><br />Negociamos precios y
          <br />marcas.
        </p>
      </div>
      <div class="card">
        <center><img src="../assets/logistica.png" /></center>
        <h1><b>Inventario</b><br /><br /></h1>
        <p>
          Sistema de control de <br />
          inventario de materiales o mercancía. <br />
          <br />Software de administración y control de inventarios.
        </p>
      </div>
      <div class="card">
        <center><img src="../assets/envio-internacional.png" /></center>
        <h1><b >Logistica</b><br /><br /></h1>
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
  gap: 10%;
  background: #BC2C2C ;
  padding: 100px;
  border-radius: none;
}

.card {
  width: 85%;
  height: 450px;
  border-radius: 30px;
  overflow: hidden;
  background-color: #F8F8FA  ;
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
  cursor: default;
  padding: 10px;
  
  
}

.card img {
  width: 100px;
  height: 95px;
  left: 99px;
  top: 28px;
  padding: 30px;
}

.card h1 {
  font-family: 'Poppins'; 
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color:#BC2C2C 
  
}

.card p {
  font-family: 'Roboto'; 
  text-align: center;
  font-size: 18px;
  color:#697279;
}
</style>

