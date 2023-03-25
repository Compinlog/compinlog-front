<template>
    
    <div class="container">

<div><h1><b style="font-weight: 950;">¡Las membresías que tenemos para ti!</b></h1><br>
<h3 style="text-align:center;">Únete a Compinlog y disfruta beneficios exclusivos que se <br> ajusten a tus necesidades y metas.</h3><br><br>

</div>


        <div class="card">
            <div class="left-column-background1">
                <h3><b style="font-weight: 800;">Membresía <br>COMPRADOR</b></h3>
                <h1><b style="font-weight: 900;">$PRECIO</b></h1>
                <h6><b>por mes</b ></h6>
                <button class="button-background1-left-column">Obtener ahora</button>
            </div>
            <div class="right-column">
				<div style="display:flex;">
                	<img src="../assets/circle-cards.svg" style="margin-right:1rem;"><h2> Asesoría especializada en los departamentos de compra, inventario y Logística</h2>
                </div>
				<h2><img src="../assets/circle-cards.svg"> Soporte 24/7 y con mayor prioridad</h2>
                <h2><img src="../assets/circle-cards.svg"> Cotizaciones más rápidas y sin límites</h2>
            </div>
        </div>
        <div class="card">
			<div class="left-column-background1">
				<h3><b style="font-weight: 800;">Membresía <br>VENDEDOR</b></h3>
				<h1><b style="font-weight: 900; font-size: 28px;">Inscripción Gratuita</b></h1>					
				<button class="button-background1-left-column">Obtener ahora</button>
			</div>

				<div class="right-column">                                
					<h2><img src="../assets/circle-cards.svg"> Incrementa tus ventas de forma mas sencilla</h2>
					<h2><img src="../assets/circle-cards.svg"> Mayor vísibilidad para los compradores</h2>
					<div style="display:flex;">
                	<img src="../assets/circle-cards.svg" style="margin-right:1rem;"><h2> Envía cotizaciones a una gran cantidad de compradores</h2>
					</div>
				</div>            
        </div>


    </div>  

</template>

<style scoped>

.circle-card {
    width: 8px;
    height: 8px;
    background-color: #171923;
}
.card {
    background: #ffffff;
}

.left-column-background1{
    display: grid;
    grid-row: 0.5rem;
    grid-gap: 0px;
    text-align: center;
	background: #e0e0e0;
	border-radius: 30px;
    color: #171923;
	padding: 2rem;
	max-width: 378px;
	height: 300px;
}

.right-column{
	background: #ffffff;
}


.container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	align-items: center;
}
.card{
	background: #ffffff;
	border-radius:30px;
	box-shadow: 0.5rem 0.5rem #9e9e9e;
	display:flex;
	margin: 1.5rem;
	overflow: hidden;
	width: 800px;
	height: 300px;
}
.card h1 {
    color:#171923;
}

.card h6 {
	letter-spacing: .1rem;
	font-size: 18px;
}

.card  h2 {
	letter-spacing: .02rem;
	margin: 1rem 0;
	color: #171923;
}
.card  h3 {
	letter-spacing: .02rem;
	margin: 1rem 0;
	color: #171923;
}
.right-column {
	padding: 30px;
	width: 100%;
	display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
	color: black;
}
.button-background1-left-column{
	border-radius: 30px;
	color:#ffffff;
	font-size: 16px;
	padding: .8rem 1.5rem;
	letter-spacing: .1rem;
	align-self: center;
	width: 180px;
	background: #69686a;
    border:none;
    text-decoration: none;
	box-sizing: border-box;
}


</style>
