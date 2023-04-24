<template>
  <div class="image-principal">
    <section class="container-login">
      <div class="container-login-form">
        <div class="container">
          <form v-on:submit.prevent @submit="saveData">
            <img class="Icon" src="../assets/Icono-Compinlog.svg" alt="Icono" />

            <label for="Nombre">Nombre de la Empresa:</label>
            <input v-model="user.name" type="text" id="Nombre" name="Nombre" /><br />

            <label for="ID">NIT:</label>
            <input v-model="user.nit" type="text" id="ID" name="ID" /><br />

            <label for="Correo">Correo electrónico:</label>
            <input v-model="user.email" type="email" id="Correo" name="Correo" /><br />

            <label for="Contraseña">Contraseña:</label>
            <input v-model="user.password" type="password" id="Contraseña" name="Contraseña" /><br />

            <label for="TipoEmpresa">Tipo de empresa:</label>
            <select v-model="user.profile" id="TipoEmpresa" name="TipoEmpresa">
              <option value="comprador">Comprador</option>
              <option value="vendedor">vendedor</option></select
            ><br />

            <label for="Certificado-existencia">Certificado existencia: </label>
            <div class="file-select">
              <img
                style="margin-top: 5px; width: 20px; position: absolute; margin-right: 180px"
                src="../assets/cloud-computing.svg"
                alt="upload-icon"
              />
              <label
                style="margin-right: -20px; height: 20px; width: 100%"
                class="label-select"
                for="certificado_existencia"
                >Subir documento</label
              >
              <input
                style="display: none"
                type="file"
                id="certificado_existencia"
                name="certificado_existencia"
              /><br />
            </div>

            <label for="Certificado-cuenta bancaria">Certificado de cuenta bancaria: </label>
            <div class="file-select">
              <label for=""></label>
              <img
                style="margin-top: 5px; width: 20px; position: absolute; margin-right: 180px"
                src="../assets/cloud-computing.svg"
                alt="upload-icon"
              />
              <label
                style="margin-right: -20px; height: 20px; width: 100%"
                class="label-select"
                for="certificado_bancario"
                >Subir documento</label
              >
              <input
                style="display: none"
                type="file"
                id="certificado_bancario"
                name="certificado_bancario"
              /><br />
            </div>

            <label for="Certificado-RUT">Certificado de RUT: </label>
            <div class="file-select">
              <label for=""></label>
              <img
                style="margin-top: 5px; width: 20px; position: absolute; margin-right: 180px"
                src="../assets/cloud-computing.svg"
                alt="upload-icon"
              />
              <label
                style="margin-right: -20px; height: 20px; width: 100%"
                class="label-select"
                for="copia_rut"
                >Subir documento</label
              >
              <input style="display: none" type="file" id="copia_rut" name="copia_rut" /><br />
            </div>

            <div class="check-terms">
              <input type="checkbox" id="terminos_condiciones" name="terminos_condiciones" />
              <label for="terminos_condiciones">He leído y acepto los términos y condiciones</label
              ><br />
            </div>
            <input type="submit" value="Crear Cuenta" />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'Register-view',

  data() {
    return {
      user: {
        name: '',
        nit: '',
        email: '',
        password: '',
        profile: ''
      }
    }
  },
  
  methods: {
    async registerData(){
      const router = useRouter()
      try {
        await this.$store.dispatch('register', {
          email: this.user.email,
          password: this.user.password
        })
        this.$router.push('/login');
      }
      catch (err) {
        console.log(err)
      }
    },
    saveData() {
      const url = 'https://compinlog-back-production.up.railway.app/api/users'
      axios.post(url, this.user).then((res) => {
        alert('Usuario registrado exitosamente')
        console.log(res)
      })
      this.registerData()
    },
    validarRegistro() {
      var Nombre = document.getElementById('Nombre').value
      var ID = document.getElementById('ID').value
      var Correo = document.getElementById('Correo').value
      // var Contraseña = document.getElementById('Contraseña').value
      var TipoEmpresa = document.getElementById('TipoEmpresa').value

      if (!Nombre || !ID || !Correo || !Contraseña || !TipoEmpresa) {
        alert('Debe completar todos los campos')
        return false
      }

      if (this.password.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        alert(
          'La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número'
        )
      }
      return true
    },

    validarCorreoUnico(Correo) {
      // Validar que el correo tenga el formato correcto utilizando una expresión regular
      const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!expresionRegular.test(Correo)) {
        return 'El correo electrónico no tiene un formato válido'
      }
    },

    ValidaContraseña(_Contraseña) {
      if (this.Contraseña.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        alert(
          'La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número'
        )
      }
    }
  }
}
</script>
  
  <style scoped>
.container-login {
  display: flex;
  margin: 2rem auto;
  width: 700px;
}

.image-principal {
  background-image: url('../assets/image-login.svg');
  background-size: cover;
}
.registroDiv {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: auto;
  justify-content: center;
  padding: 0 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #000000a3;
  background-color: white;
}

.derecha {
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
  border-radius: 20px;
}

.izquierda {
  background-color: #ffffff;
  background-size: cover;
  background-position: center;
  width: 100%;
  border-radius: 3px;
}

.Icon {
  display: flex;
  width: 400px;
  height: 85px;
  margin: 5rem auto;
}

.container form {
  width: 100%;
}

.container-login-img {
  background: white;
  width: 80%;
  height: 80%;
  margin-top: 4rem;
}

.container h1 {
  font-size: 50px;
  margin: 0%;
  text-align: center;
  padding: 20px;
  color: black;
}

.container p {
  font-size: 20px;
  margin: 0%;
  text-align: center;
  padding: 5px;
  margin-bottom: 30px;
  color: #b9b9b9;
}

label {
  display: block;
  margin-left: 12px;
  font-weight: bold;
  color: black;
  font-family: 'Poppins';
  text-align: left;
}

.label-select {
  color: gray;
  font-weight: bold;
  font-family: 'Poppins';
  text-align: center;
  font-size: 16px;
}

input[type='submit'] {
  background-color: #373737;
  color: #fff;
  width: 90%;
  height: 45px;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Poppins';
  margin: 5rem auto;
  display: flex;
}

input[type='submit']:hover {
  background-color: #3e8e41;
}

input[type='text'],
input[type='email'],
input[type='password'],
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

.file-select input[type='file'] {
  opacity: 0;
  width: 100%;
  display: inline-block;
}

.file-select {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 35px;
  padding: 2px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  height: 40px;
  width: 90%;
}

.check-terms {
  display: flex;
}
input[type='checkbox'] {
  display: flex;
  margin-right: 10px;
}
</style>
  
  
  