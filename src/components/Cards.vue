

<template>
    <div class="container">
        <div class="card">
                <center><img src="../assets/lista-de-deseos.png"></center>
                <h1><b style="font-weigth:500" >COMPRAS</b><br><br></h1>
                <p>Evaluamos ofertas con cuadros comparativos entre ellas.<br><br>Negociamos precios y <br>marcas. </p>
                
        </div>    

        <div class="card">
                <center><img src="../assets/logistica.png"></center>
                <h1><b style="font-weigth:500">INVENTARIO</b><br><br></h1>
                <p>Sistema de control de <br> inventario de materiales o mercancía. <br> <br>Software de administración y control de inventarios.</p>      
        </div>

        <div class="card">
                <center><img src="../assets/envio-internacional.png"></center>
                <h1><b style="font-weigth:500">LOGISTICA</b><br><br></h1>
                <p>Transporte y entrega de<br> productos. <br> <br> Seguimiento de transporte.<br><br>Logística inversa.</p>
                    
        </div>
        
    </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anybody&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container{
    width: 100%;
    max-width: 1100px;
    display: flex;
    

}



.card{
    width: 80%;
    height: 493px;
    margin: 20px;
    border-radius: 30px;
    overflow: hidden;
    
    background: linear-gradient( rgba(72, 207, 173, 0) 70%, #48CFAD 189.27%);
    box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
    cursor: default;
    
    }

.card img {
    width: 115px;
    height: 115px;
    left: 99px;
    top: 28px;
    padding: 50px;
    

    
}

.card h1{
    
    font-family: 'Anybody', cursive;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #204945;
}

.card p{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 18px;
   
}
</style>
