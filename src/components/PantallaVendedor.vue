<template>
  <div class="container">

    <div class="container-order">

        <div>
            <div>ESTADO:</div>
            <button class="pendiente">Pendiente</button>
        </div>

        <div>FECHA DE CREACIÓN:<br>27/04/2023</div>
        <div>CANTIDAD DE PEDIDO:<br>1</div>
        <div>SOLICITANTE:<br>Compinlog.inf@gmail.com</div>
        <div>DIRECCIÓN:<br>Usaquen Cra 9 57 21</div>
        <div><img src="../assets/img/firma.png"><br>AUTORIZA</div>
        <div>SUBTOTAL:<br>$180.000.000 COP</div>
        <div>TOTAL:<br>$230.000.000 COP</div>
        
   
    </div>

    <div class="button-order">
    <div>
        <button style="  background-color:#42A345;color:#ffff;margin:7px; border: none;" class="new-order">APROBAR</button>
    </div>

    <div>
        <button style="background-color:#CA4720;color:#ffff;margin:7px; border: none;" class="new-order">MODIFICAR</button>
    </div>

    <div>
        <button style="background-color:#697279; color:#ffff;margin:7px; border: none;" class="new-order">RECHAZAR</button>
    </div>

    </div>

    


  </div>

</template>

<script>

</script>


<style scoped>


.container{
    display: flex;
    padding: 120px;
    font-family: sans-serif;
    background-color:#FFFFFF;
    color:#1E1E21 


}

.container-order{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 30px;
    width:700px;
    height: 380px;
    background-color: #F8F8FA;
    border-radius: 10px;
    

}

.pendiente{
    width:80px ; 
    background-color:#FBAF2A;
    color:white;
    border-radius: 10px;
    border: none;
    font-family: sans-serif;
    
    

}
.new-order{
    width: 150px;
    height: 29px;
    border-radius:3px;
}
.button-order{
    display: flex;
    flex-direction: column;
    margin:90px;
    border: none;
    
}

</style>
