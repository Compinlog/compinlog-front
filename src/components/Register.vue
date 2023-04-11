<template>
    <section class="container-login">
    
        
        <div class="container-login-img">
          <img style="width: 100%;" src="../assets/image-login.svg" alt="" />
        </div>
    
        <div class="container-login-form">
          <div class="container">
            <form v-on:submit.prevent @submit="validarRegistro()">
              <img class="Icon" src="../assets/Icono-Compinlog.svg" alt="Icono">
    
              <label for="Nombre">Nombre de la Empresa:</label>
              <input v-model = "Nombre" type="text" id="Nombre" name="Nombre" /><br />
    
              <label for="ID">NIT:</label>
              <input type="text" id="ID" name="ID" /><br />
    
              <label for="Correo">Correo electrónico:</label>
              <input type="email" id="Correo" name="Correo" /><br />
    
              <label for="Contraseña">Contraseña:</label>
              <input v-model = "Contraseña" type="password" id="Contraseña" name="Contraseña" /><br />
    
              <label for="TipoEmpresa">Tipo de empresa:</label>
              <select id="TipoEmpresa" name="TipoEmpresa">
                <option value="comprador">Comprador</option>
                <option value="vendedor">vendedor</option></select
                ><br/>
              <input type="submit" value="Crear Cuenta">
            </form>
          </div>
        </div>
    </section>
  </template>
  
  <script>
    export default {
    name: 'Register-view',
  
    data(){
      return {
        Contraseña:''
      }
    },
  
    methods: {
  
        validarRegistro(){
          var Nombre = document.getElementById('Nombre').value
          var ID = document.getElementById('ID').value
          var Correo = document.getElementById('Correo').value
          var Contraseña = document.getElementById('Contraseña').value
          var TipoEmpresa = document.getElementById('TipoEmpresa').value
  
          if (!Nombre || !ID || !Correo || !Contraseña || !TipoEmpresa) {
            alert('Debe completar todos los campos')
            return false
          }
  
          if(this.Contraseña.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
              alert('La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número')
  
            }
          
          return true
        },
  
        validarCorreoUnico(Correo){
          // Validar que el correo tenga el formato correcto utilizando una expresión regular
            const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!expresionRegular.test(Correo)) {
                return "El correo electrónico no tiene un formato válido";
            }
        },
    
        ValidaContraseña(_Contraseña){
            // var regrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            // return regrex.test(_Contraseña);
            if(this.Contraseña.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
              alert('La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número')
  
            }
        },
  
    }
  }
  </script>
  
  <style scoped>
    .container-login {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
  }
  .registroDiv{
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin: auto;
      justify-content: center;
      padding: 0 2rem;
      border-radius: 8px;
      box-shadow: 0px 0px 10px #000000a3;
      background-color: white;
  }
  
  .derecha{
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      border-radius: 3px;
  }
  .container-login-form {
    background: white;
    padding: 2rem;
    text-align: center;
    margin-right: 8rem;
  }
  
  .izquierda{
      background-color: #ffffff;
      background-size: cover;
      background-position: center;
      width: 100%;
      border-radius: 3px;
      
  }

  .Icon{
    display: flex;
    width: 400px; 
    height: 85px; 
    margin: 5rem auto;
  }


  .container form{
      width: 100%;
      padding: 2rem;
  }

  .container-login-img {
    background: white;
    width: 80%;
    height: 80%;
    margin-top: 4rem;
  }
  
  .container h1{
      font-size:50px;
      margin: 0%;
      text-align: center;
      padding: 20px;
      color:black;   
  }
  
  .container p{
      font-size:20px;
      margin: 0%;
      text-align: center;
      padding: 5px;
      margin-bottom: 30px;
      color: #b9b9b9;
  }
  
  label{
      display: block;
      margin-bottom: 10px;
      margin-left: 12px;
      font-weight: bold;
      color: black;
      font-family: 'Poppins';
  }

  input[type="submit"]{
      background-color: #373737;
      color: #fff;
      padding: 20px 200px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Poppins';
      margin: 5rem auto;
      display: flex;
      
  }
    
  input[type="submit"]:hover {
      background-color: #3e8e41;
  }
    
  input[type="text"],
  input[type="email"],
  input[type="password"],
  select {
      padding: 10px;
      margin-bottom: 5px;
      margin-left: 10px;
      width: 90%;
      border: 2px solid #ccc;
      border-radius: 12px;
      box-sizing: border-box;
      display: block;
      font-weight: bold;
      align-items: center;
      font-family: 'Poppins';
  }
  
  
  </style>
  
  
  