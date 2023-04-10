

<template>
    <div class="title"><h1>COMPINLOG</h1></div>
    <div class="title"><p>Aportamos soluciones a tu empresa, contamos con un equipo de trabajo especializado y los proveedores mas competitivos del mercado.</p></div>
    <div class="container">
        <div class="card">
                <center><img src="../assets/logisticaa.png"></center>
                <h1><b style="font-weigth:500" >LOS MEJORES EN <br> LOGISTICA</b><br><br></h1>
                <p>Mediante la automatización de tu proceso logístico, ofrecemos diversas soluciones que te ayudarán a ahorrar tiempo y dinero en tediosas licitaciones</p>
        </div>   
        <div class="card">
                <center><img src="../assets/compras.png"></center>
                <h1><b style="font-weigth:500">LOS MEJORES EN <br> COMPRAS</b><br><br></h1>
                <p>Mejoramos la eficiencia en la gestión de compras mediante la automatización del proceso, lo que conlleva a una disminución de los riesgos y costos operativos asociados</p>      
        </div>
        <div class="card">
                <center><img src="../assets/inventarios.png"></center>
                <h1><b style="font-weigth:500">LOS MEJORES EN <br> INVENTARIOS</b><br><br></h1>
                <p>Asumimos la responsabilidad de administrar, organizar y gestionar el inventario de tu empresa, garantizando así una efectiva gestión del almacén.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    background-color: #eee;
    padding: 100px;
}



.card{
    width: 326px;
    height: 493px;
    border-radius: 30px;
    overflow: hidden;
    background: linear-gradient( rgba(72, 207, 173, 0) 70%, #48CFAD 189.27%);
    box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
    cursor: default;
    background-color: #FFFFFF;
    }

.card img {
    width: 130px;
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
}

.card p{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 15px;
    padding: 15px;
}

.title{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-left: 100px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans';
    font-weight: 700;
    font-size: 22px;
}
</style>
