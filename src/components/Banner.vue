
<template>
  <div class="Banner">
    <div class="Descripción_Banner">
      <h1 class="Banner_tittle">¡Todo lo que necesitas</h1><h1 class="Banner_tittle" style="margin-top:-2rem; color: #BC2C2C;">a un solo click de distancia!</h1>
      <p class="Banner_text">
        Aportamos soluciones a tu empresa, contamos con un equipo de trabajo especializado y
        proveedores más competitivos del mercado.
      </p>

      <div class="botones_banner">
        <router-link to="/register" class="banner__Registrarse">Regístrarse</router-link>
        <a href="#" class="banner__Contact">Contáctanos</a>
      </div>
    </div>
    <div class="banner__video">
      <video style="width: 120%; border-radius: 20px " src="@/assets/video/banner-video.mp4" controls></video>
    </div>
  </div>
</template>
    
    <script>
export default {}
</script>
    
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400&display=swap');

.Banner {
  padding: 0 94px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: #F8F8FA ;
  gap: 122px;
  margin-top: 90px;
}
.Banner_tittle {
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  font-family: 'Poppins';
  font-style: normal;
  color:#1E1E21;
}

.Banner_text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  color:#1E1E21 ;
}

.banner__video {
  height: 447px;
  margin-right: 100px;
  margin-bottom: 100px;
}

.Descripción_Banner {
  flex-basis: 50%;
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 20px;
  padding: 0px 20px 0px 0px;
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
  background-color: #BC2C2C ;
  color: #FFFFFF  ;
  padding: 10px 20px;
  border-radius: 5px;
  
  margin-right: 30px;
  margin-left: -50px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
  font-family:'Roboto';
}

.banner__Registrarse :hover {
  background-color: #555;
}

.banner__Contact {
  border:solid 1px;
  background-color: #1E1E21 ;
  color: #FFFFFF;
  padding: 10px 30px;
  border-radius: 5px;
  font-family: 'Roboto';
  margin-right: 10px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
}
</style>
