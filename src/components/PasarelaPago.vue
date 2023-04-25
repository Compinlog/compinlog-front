!<template>
  <div class="pasarela-container">
    <div class="logo-compinlog">
      <img
        class="imagen"
        style="padding: 10px; width: 90%; margin: 15px 15px"
        src="@/assets/logo.svg"
        alt="Imagen"
      />
    </div>

    <main class="main-container">
      <div class="container-pay-card">
        <section class="main-container_background">
          <div class="card">
            <img
              class="card_logo"
              style="width: 55px; margin-bottom: 10px"
              src="@/assets/img/card-logo.svg"
              alt="logo"
            />
            <p class="card_numero" style="margin-bottom: 15px">0000 0000 0000 0000</p>

            <div
              class="card_details"
              style="
                display: flex;
                font-size: 0.9rem;
                justify-content: space-between;
                text-transform: uppercase;
              "
            >
              <p class="card_details_nombre">Nombre Tarjeta</p>
              <p><span class="card_mes">00</span><span>/</span><span class="card_año">00</span></p>
            </div>
          </div>

          <div class="card-back">
            <p
              class="card-back_code"
              style="font-size: 0.7rem; margin-top: 50px; text-align: right; padding-right: 10px"
            >
              000
            </p>
          </div>
        </section>

        <section class="main-container_form">
          <form class="form" action="">
            <label class="form_label" for="cardnombre">Nombre Propietario</label>
            <input
              class="form_input"
              type="text"
              Nombre="cardnombre"
              id="cardnombre"
              placeholder="Nombre Propietario"
            />
            <div class="form_cardholder_error error"></div>

            <label class="form_label" for="cardNumber">Numero de Tarjeta</label>
            <input
              class="form_input"
              type="text"
              Nombre="cardNumber"
              id="cardNumber"
              maxlength="19"
              placeholder="0000 0000 0000 0000"
            />
            <div class="form_input_numero_error error"></div>

            <div class="form_fecha-cvc">
              <label class="form_label" for="cardmes">Exp. Date (MM/YY)</label>
              <label for="carCvc">CVC</label>

              <div class="form_fecha">
                <input
                  class="form_input"
                  type="text"
                  maxlength="2"
                  Nombre="cardmes"
                  id="cardmes"
                  placeholder="MM"
                />
                <input
                  class="form_input"
                  type="text"
                  maxlength="2"
                  Nombre="cardaño"
                  id="cardaño"
                  placeholder="YY"
                />
              </div>

              <input
                class="form_input"
                type="text"
                maxlength="3"
                Nombre="cardCvc"
                id="cardCvc"
                placeholder="000"
              />

              <div class="conteiner-error">
                <div class="form_input_mm_error error"></div>
                <div class="form_input_yy_error error"></div>
              </div>
              <div class="form_input_cvc_error error"></div>
            </div>

            <input class="form_submit" type="submit" value="Confirmar" />
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {}

//CARDHOLDER NOMBRE

let namecard = document.querySelector('.card_details_nombre')
let nameInput = document.querySelector('#cardnombre')
let nameErrorDiv = document.querySelector('.form_cardholder_error')

//CARDNUMERO NUMERO

let numbercard = document.querySelector('.card_numero')
let numberInput = document.querySelector('#cardNumber')
let numberErrorDiv = document.querySelector('.form_input_numero_error')

//MES - AÑO
let monthcard = document.querySelector('.card_mes')
let monthInput = document.querySelector('#cardmes')
let MonthErrorDiv = document.querySelector('.form_input_mm_error')
//-----//
let yearcard = document.querySelector('.card_año')
let yearInput = document.querySelector('#cardaño')
let yearErrorDiv = document.querySelector('.form_input_yy_error')

//CVC
let cvccard = document.querySelector('.card-back_code')
let cvcInput = document.querySelector('#cardCvc')
let cvcErrorDiv = document.querySelector('.form_input_cvc_error')

//INGRESO DINAMICO

//NOMBRE:

if (nameInput) {
  nameInput.addEventListener('input', () => {
    if (nameInput.value == '') {
      namecard.innerText = 'NOMBRE TARJETA'
    } else {
      namecard.innerText = nameInput.value
    }
  })
}

//NUMERO:

if (numberInput) {
  numberInput.addEventListener('input', () => {
    let regExp = /[A-z]/g
    let inputValue = event.target.value

    numbercard.innerText = numberInput.value

    if (regExp.test(numberInput.value)) {
      mostrarError(numberInput, numberErrorDiv, 'Formato invalido, ingrese solo numeros')
    } else {
      numberInput.value = inputValue
        .replace(/\s/g, '')
        .replace(/([0-9]{4})/g, '$1 ')
        .trim()
      mostrarError(numberInput, numberErrorDiv, '', false)
    }

    if (numberInput.value == '') {
      numbercard.innerText = '0000 0000 0000 0000'
    }
  })
}

//MES Y AÑO:

if (monthInput) {
  monthInput.addEventListener('input', () => {
    if (monthInput.value == '') {
      monthcard.innerText = '00'
    } else {
      monthcard.innerText = monthInput.value
    }
  })
}

if (yearInput) {
  yearInput.addEventListener('input', () => {
    if (yearInput.value == '') {
      yearcard.innerText = '00'
    } else {
      yearcard.innerText = yearInput.value
    }
  })
}

//CVC

if (cvcInput) {
  cvcInput.addEventListener('input', () => {
    cvccard.innerText = cvcInput.value
  })
}

//FUNCION ERROR
function mostrarError(divInput, divError, msgError, mostrar = true) {
  if (mostrar) {
    divError.innerText = msgError
  } else {
    divError.innerText = ''
  }
}

//BOTON
let botonConfirm = document.querySelector('.form_submit')

if (botonConfirm) {
  botonConfirm.addEventListener('click', (event) => {
    event.preventDefault()

    //VERIFICAR
    function verificarDatos(divInput, divError) {
      if (divInput.value.length > 0) {
        mostrarError(divInput, divError, '', false)
        return true
      } else {
        mostrarError(divInput, divError, 'Debe llenar este espacio')
        return false
      }
    }

    //validar nombre
    verificarDatos(nameInput, nameErrorDiv)

    //validar numero
    if (verificarDatos(numberInput, numberErrorDiv) == true) {
      if (numberInput.value.length == 19) {
        mostrarError(numberInput, numberErrorDiv, '', false)
      } else {
        mostrarError(numberInput, numberErrorDiv, 'numero incorrecto')
      }
    }

    //validar mes
    if (verificarDatos(monthInput, MonthErrorDiv)) {
      if (parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <= 12) {
        mostrarError(monthInput, MonthErrorDiv, '', false)
      } else {
        mostrarError(monthInput, MonthErrorDiv, 'Mes erroneo')
      }
    }

    //validar año
    if (verificarDatos(yearInput, yearErrorDiv)) {
      if (parseInt(yearInput.value) > 22 && parseInt(monthInput.value) <= 27) {
        mostrarError(yearInput, yearErrorDiv, '', false)
      } else {
        mostrarError(yearInput, yearErrorDiv, 'año erroneo')
      }
    }

    //validar cvc
    if (verificarDatos(cvcInput, cvcErrorDiv)) {
      if (cvcInput.value.length == 3) {
        mostrarError(cvcInput, cvcErrorDiv, '', false)
      } else {
        mostrarError(cvcInput, cvcErrorDiv, 'Codigo incorrecto')
      }
    }
  })
}
</script>

<style scoped>
.pasarela-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.main-container {
  margin: auto;
  width: 500px;
  position: relative;
}

.container-pay-card {
  background: white;
  height: 700px;
  padding: 2rem;
  border-radius: 20px;
}

.main-container_background {
  background-image:url("./images/bg-main-desktop.png");
  height: 255px;
}

.main-container_form {
  padding: 90px 24px 45px;
}

.card {
  width: 290px;
  height: 180px;
  color: white;
  padding: 20px;
  background-image: url("../assets/img/bg-card-front.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 136px;
  left: 60px;
  letter-spacing: 2px;
  z-index: 1;
}

.card-back {
  width: 290px;
  height: 160px;
  color: white;
  padding: 20px;
  background-image: url("../assets/img/bg-card-back.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 40px;
  left: 140px;
  letter-spacing: 2px;
}

.form_label {
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
  display: block;
  font-weight: bold;
}

.form_input[type='text'] {
  width: 100%;
  height: 30px;
  margin-bottom: 25px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  border: solid 1px gray;
  padding-left: 10px;
}

.form_fecha-cvc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 16px;
}

.form_fecha {
  display: flex;
  gap: 10px;
}

.form_submit {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 1em;
  letter-spacing: 1px;
  font-family: 'Courier New', Courier, monospace;
}

.form_submit:hover {
  cursor: pointer;
}

.error {
  color: red;
  font-size: 0.7rem;
  margin: -25px 0 12px;
}

.conteiner-error {
  display: flex;
  gap: 5px;
}

.conteiner-error div {
  width: 100px;
  text-align: center;
}
</style>