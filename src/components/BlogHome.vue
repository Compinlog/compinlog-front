<template>
<div id="contenedor_completo_blog">
<!--COMPRADOR-->
<div id="horizontal_comprador">
<div id="texto_comprador">
    <h3 id="titulo_comprador">COMPRADOR</h3>
    <p id="parrafo1_comprador">Ahorra tiempo, presupuesto y esfuerzo al gestionar tus departamentos 
        de compras, inventario y logística desde un solo lugar</p>
    <p id="parrafo2_comprador">Nuestra plataforma te ofrece la mejor manera para hacerlo: más rapido, 
        sencillo y eficaz</p>
    <button id="boton_comprador">Más información</button>
</div>

<div id="video_comprador"></div>
</div>

<!--VENDEDOR-->
<div id="horizontal_vendedor">

<div id="video_vendedor"></div>

<div id="texto_vendedor">
    <h3 id="titulo_vendedor">VENDEDOR</h3>
    <p id="parrafo1_vendedor">¡Enfocate en vender y no en buscar clientes!</p>
    <p id="parrafo2_vendedor">Gracias a esta plataforma, tus empleados podrán realizar 
        cientos de cotizaciones de compradores y lo mejor es que no debes pasar por tediosos 
        procesos de registro de proveedores.</p>
    <button id="boton_vendedor">Más información</button>
</div>
</div>

</div>

</template>



<script>

</script>


<style scoped>
#contenedor_completo_blog{
    display: grid;
    display: flex;
    width: 100vw;
    font-family: sans-serif;
    padding: 150px;
    padding-top: 200px;
    justify-content: space-between;

}

#texto_comprador, #texto_vendedor{
    justify-content: left;
    height: 300px;
    /*width: 568px;*/
    width: 50%;
}

#video_comprador, #video_vendedor{
    height: 250px;
    width: 400px;
    border-radius: 15px;
    background-color: #ABABAB;
}

button{
    color: white;
    background-color: #373737;
    align-items: center;
    font-size: 10px;
    font-family: sans-serif;
    border-radius: 5px;
    cursor: pointer;
    height: 30px;
    width: 95px;
}

#horizontal_vendedor, #horizontal_comprador{
    width: 100vw;
    align-items: center;
    display: grid;
    justify-content: space-between;
    height: 300px;
}

p{
    font-size: 16px;
}

#parrafo1_comprador, #parrafo1_vendedor{
    font-weight: bold;/*Grosor de letra*/
    width: 280px;
}

#parrafo2_comprador, #parrafo2_vendedor{
    width: 290px; 
}

</style>