

<template>
  <div class="container">
    <div class="container__card">
      <p>Purchase Order #a12313123</p>
      <div class="card">
        <div>
            <div>ESTADO:</div>
            <button class="pendiente">Pendiente</button>
        </div>
        <div>FECHA DE CREACIÓN:<br><span>27/04/2023</span></div>
        <div>CANTIDAD DE PEDIDO:<br><span>1</span></div>
        <div>SOLICITANTE:<br><span>Compinlog.inf@gmail.com</span></div>
        <div>DIRECCIÓN:<br><span>Usaquen Cra 9 57 21</span></div>
        <div><img src="../assets/img/firma.png"><br><span>AUTORIZA</span></div>
        <div>SUBTOTAL:<br><span>$180.000.000 COP</span></div>
        <div>TOTAL:<br><span>$230.000.000 COP</span></div>
      </div>
    </div>
    <div class="container__buttons">
      <div class="box3R1">
        <button class="btnL"><strong>APPROVE</strong></button>
        <button class="btnR"><strong>REJECT</strong></button>
      </div>
      <button class="btn"><strong>REVISE</strong></button>
      <button class="btn__two"><strong>REPEAT</strong></button>
      <button class="btn__two"><strong>REVISION HISTORY</strong></button>
      <button class="btn__two"><strong>EDIT PURCHASE ORDER</strong></button>
      <button class="btn__two"><strong>DOCUMENTS</strong></button>
      <button class="btn__two btn__two--add">ADD DOCUMENTS</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


.container {
  display: grid;
  gap: 4rem;
  grid-template-columns: 60% 25%;
  width: 85%;
  padding: 2rem 1rem 2rem 8rem;
  background-color: white;
}

.container__card {
  border-radius: 12px;
  box-shadow: 2px 2px 40px 2px rgba(0, 0, 0, 0.288);   
  padding: 1rem;
  margin: 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 140%;
  font-family: 'Poppins';
  font-size: 24px;
  color: gray;
  margin-top: -5rem;
  z-index: 5;
}
.card {
  width: 95%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 30px;
  background-color: #F8F8FA;
  border-radius: 10px;
}

.card span {
  font-size: 16px;
}
.container__buttons {
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: 2px 2px 40px 2px rgba(0, 0, 0, 0.288);   
  display: grid;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 140%;
  margin-top: -5rem;
  z-index: 5;
}

.box3R1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 2rem;
}

.btnL {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: rgb(104, 241, 104);
  color: white;
  border: none;
}

.btnR {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgb(250, 62, 62);
  color: white;
  border: none;
}

.btn {
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border-style: none;
  border-color: rgb(44, 37, 37);
  &__two {
    height: 40px;
    border-radius: 4px;
    width: 100%;
    border-style: none;
    &--add {
      background-color: rgba(81, 119, 243, 0.938);
      color: white;
    }
  }
}
</style>
