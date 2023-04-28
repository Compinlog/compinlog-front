
<template>
    
      <div class="container-login">
        <div class="container-login-inf">
          <img style="justify-content: center; margin-left:45px;margin-top:90px ;" src="../assets/img/logob.png" alt="" >
           <p>
            
            ¡Todo lo que necesitas a un solo click de distancia! <br>Compras, inventarios y logística.
          </p>
        </div>
        
        <div class="container-login-form">
          <p> Login</p>
          
         
          <form class="form-style">
            
            
            <div>
              
              <label for="">Email</label>
              <input class="input-form-login" type="text" style="width: 100%" placeholder="Email"/>
            </div>
            <div>
              <label for="">Password</label>
              <input class="input-form-login" type="text" style="width: 100%" placeholder="Password"/>
            </div>
            <input class="button-send-form" type="submit" value="SIGN IN" />
          </form>
          <div class="login__text-register">
          ¿Todavía no eres miembro?
          <router-link to="/register">Regístrate</router-link>
        </div>
        </div>
        
      </div>
    
  </template>
  
  <style scoped>
    
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 10px;
    
  }
  .container-login {
    display: flex;
    height: 600px;
    width: 900px;
    box-shadow: 0 0 20px rgb(133, 132, 132);
    margin: auto;
    margin-top: 130px;
    
    
     
  }
 

  .container-login-inf{
    background-image:url(../assets/img/3.png) ;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding:100px 30px;
    width: 60%;
    height: 100%;
    margin-bottom: 100px;
  }

   .container-login-inf p{
    font-family: poppins;
    color: #FFFFFF;
    margin-top: 18px;
    justify-content: center;
    text-align: center;

   }
 
  .text-prod {
    color: rgb(223, 223, 223);
    font-size: 6rem;
    font-family: 'Roboto';
  }
  
   .container-login-form {
    display: grid;
    background: white;
    padding: 5rem;
    text-align: center;
    margin:0px 0px ;
    
  }

  .container-login-form p{
    font-family: Roboto;
    font-weight: 800;
    font-size: 40px;
    color: #BC2C2C;
    margin-top:-20px; 
    margin-left:2.5px;

  }
  
  .form-style {
    display: grid;
    
    gap: 2rem;
    text-align: start;
    margin-top: 4rem;
    font-family: poppins;
  }
  
  .input-form-login {
    width: 100%;
    height: 40px;
    border: 1px solid #a3a3a3;
    border-radius: 16px;
    padding-left: 1rem;
    margin-top: 1rem;
  }
  
  .button-send-form {
    margin-top: 2rem;
    color: white;
    height: 40px;
    background: #BC2C2C;
    box-shadow: 5px 5px 7px rgba(114, 114, 114, 0.25);
    border-radius: 0.5rem;
    border:none;
    font-family:poppins
  }
  .login__text-register {
    margin-top: 4rem;
    font-family: sans-serif;
  }

  
 
  </style>
