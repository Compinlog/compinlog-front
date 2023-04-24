
<template>
  <div class="Banner">
    <div class="Descripción_Banner">
      <h1 class="Banner_tittle" style="color: #8b53d5;">¡Todo lo que necesitas</h1><h1 class="Banner_tittle" style="margin-top:-2rem; color: #48cfad;">a un solo click de distancia!</h1>
      <p class="Banner_text">
        Aportamos soluciones a tu empresa, contamos con un equipo de trabajo especializado y
        proveedores más competitivos del mercado.
      </p>

      <div class="botones_banner">
        <a href="#" class="banner__Registrarse">Regístrarse</a>
        <a href="#" class="banner__Contact">Contáctanos</a>
      </div>
    </div>
    <div class="banner__video">
      <video style="width: 100%; height: 100%; border-radius: 30px" src="@/assets/video/banner-video.mp4" controls></video>
    </div>
  </div>
</template>
    
    <script>
export default {}
</script>
    
    <style>
.Banner {
  padding: 0 94px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  gap: 122px;
  margin-top: 4rem;
}
.Banner_tittle {
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  font-family: sans-serif;
  font-style: normal;
}

.Banner_text {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  color:#697279;
}

.banner__video {
  height: 447px;
}

.Descripción_Banner {
  flex-basis: 50%;
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.Descripción_Banner h2 {
  font-size: 40px;
}

.Descripción_Banner p {
  font-size: 20px;
  text-align: left;
}

.botones_banner {
  display: flex;
  flex-direction: row;
  margin: 10%;
}

.banner__Registrarse {
  background-color: #48cfad;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  margin-right: 30px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
  font-family: sans-serif;
}

.banner__Registrarse :hover {
  background-color: #555;
}

.banner__Contact {
  border: #48cfad solid 1px;
  color: black;
  padding: 10px 30px;
  border-radius: 5px;
  font-family: sans-serif;
  margin-right: 10px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
}
</style>
