<template>
  <div style="padding: 0">
    <section class="container-section-service">
      <div class="container-text-service">
        <h1 class="service-h1">COMPRAS</h1>
        <p class="service-text">
          Buscamos proveedores competitivos.<br />Negociamos precios y marcas.<br />Evaluamos
          ofertas y comparamos entre ellas.
          
        </p>
        <button class="service-button">Únete</button>
      </div>
      <img style="width: 100%" src="../assets/img/Variant2.svg" alt="" />
    </section>
    <section class="container-section-service">
        <img style="width: 100%" src="../assets/img/Component 2.svg" alt="" />
      
    
      <div class="container-text-service">
        <h1 class="service-h1">INVENTARIO</h1>
        <p class="service-text">
          Software de administración y control de inventarios.<br />Inventarios anuales, periódicos, cíclicos y permanentes.<br />Inventario 
          de materiales o mercancía.<br />
          
        </p>
        <button class="service-button " >Únete</button>
      </div>
    </section>
    <section class="container-section-service">
      <div class="container-text-service">
        <h1 class="service-h1">LOGISTICA</h1>
        <p class="service-text">
        Almacenamiento de productos.<br />Procesamiento de órdenes de compra.<br />Transporte y entrega de productos.<br />
          
        </p>
        <button class="service-button">Únete</button>
      </div>
      <img style="width: 100%" src="../assets/img/Default.svg" alt="" />
      
    </section>
  </div>
</template>

<style scoped>


.container-section-service {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #E2E2E2;
}
.container-text-service {
  display: flex;
  flex-direction: column;
  margin: 4rem;
  justify-content: center;
  
}

.service-h1 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 93px;
  color: #565656;
  margin: 0%;
  padding: 0%;
}
.service-text {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  color: #3f3f3f;
}
.service-button {
  width: 99px;
  height: 45px;
  background: #373737;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: white;
  margin: 0rem auto;
  margin-left: 23%;
}
</style>