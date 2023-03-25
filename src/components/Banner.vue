<template>

    <div class="Banner">
    
        <div class="Descripción_Banner">
            
            <h2>We Help Everyone Here For A Better Life</h2>
            <p>Aportamos soluciones a tu empresa, contamos con un equipo de trabajo especializado y proveedores más competitivos del mercado</p>
            
            <div class="botones_banner">
            
            <a href="#" class="banner__Registrarse">Regístrarse</a>
            <a href="#" class="banner__Contact">Contáctanos</a>
            
            </div>
    
            </div>
            <div class="banner__video">
            <video src="mi_video.mp4" controls></video>
            
        </div>
            
    </div>
      
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    
    .Banner {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #eee;
        
    }
    
    .banner__video {
        flex-basis: 90%;
        margin-left: 30%;
        
    }
    
    .Descripción_Banner {
        flex-basis: 50%;
        font-size: 20px;
        line-height: 1.8;
        margin-bottom: 20px;
    }
    
    .Descripción_Banner h2{
        margin: 10%;
        font-size: 40px;
    
    }
    
    .Descripción_Banner p{
        margin: 10%;
        font-size: 20px;
        text-align:left;
    }
    
    .botones_banner {
        display: flex;
        flex-direction: row;
        margin: 10%;
    }
    
    .banner__Registrarse {
        background-color: #333;
        color: #fff;
        padding: 10px 30px;
        border-radius: 5px;
        margin-right: 30px;
        font-size: 16px;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }
    
    .banner__Registrarse :hover {
        background-color: #555;
    }
    
    .banner__Contact{
        border:#333 solid 1px;
        color:  black;
        padding: 10px 30px;
        border-radius: 5px;
        margin-right: 10px;
        font-size: 16px;
        text-decoration: none;
        transition: background-color 0.3s ease;
        
    }
    
    </style>