
<template>
    <div>
      <div class="container-login">
        <div class="container-login-img">
          <img style="height: 100vh" src="../assets/image-login.svg" alt="" />
        </div>
        <div class="container-login-form">
          <img src="../assets/image-logo2.svg" alt="" />
          <p style="font-family: sans-serif;">
            ¡Todo lo que necesitas a un solo click de distancia! Compras, inventarios y logística.
          </p>
          <form class="form-style">
            <div>
              <label for="">User name</label>
              <input class="input-form-login" type="text" style="width: 100%" />
            </div>
            <div>
              <label for="">password</label>
              <input class="input-form-login" type="text" style="width: 100%" />
            </div>
            <input class="button-send-form" type="submit" />
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container-login {
    display: flex;
  }
  .text-prod {
    color: rgb(223, 223, 223);
    font-size: 6rem;
    font-family: sans-serif;
  }
  
  .container-login-img {
    background: white;
    width: 80%;
    height: 80%;
  }
  
  .container-login-form {
    background: white;
    padding: 2rem;
    text-align: center;
  }
  
  .form-style {
    display: grid;
    gap: 2rem;
    text-align: start;
    margin-top: 4rem;
    font-family: sans-serif;
  }
  
  .input-form-login {
    width: 100%;
    height: 40px;
    border: 1px solid #949494;
    border-radius: 16px;
  }
  
  .button-send-form {
    margin-top: 2rem;
    color: white;
    height: 60px;
    background: #373737;
    box-shadow: 9px 9px 10px rgba(114, 113, 255, 0.25);
    border-radius: 32px;
    border-block: none;
  }
  </style>