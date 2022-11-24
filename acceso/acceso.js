const form = document.getElementById("form");
const inputPassword = document.getElementById("password");
const emailInput = document.getElementById("input-email");
const usernameInput = document.getElementById("usuario");
const accesoCuenta = document.getElementById("acceso-cuenta");
const inputEmail = document.getElementById("e-mail");
const labelEmail = document.getElementById("label-email");
const infoRegistro = document.getElementById("info-registro");
const iniciarSesion = document.getElementById("inicio-sesion");

const accederConCuenta = () => {
  accesoCuenta.classList.toggle("boton-acceso-apretado");

  inputEmail.classList.toggle("input-oculto");
  labelEmail.classList.toggle("input-oculto");

  if (inputEmail.classList.contains("input-oculto")) {
    accesoCuenta.textContent = "Crear cuenta";
    infoRegistro.textContent =
      "Completá la siguiente información para acceder:";
  } else {
    accesoCuenta.textContent = "Ya tengo cuenta";
    infoRegistro.textContent =
      "Completá la siguiente información para registrarte:";
  }
};

accesoCuenta.addEventListener("click", accederConCuenta);

// const debounce = (fn, delay = 500) => {

//     console.log("holalla");
//     let timeoutId;
//     return (...args) => {

//             if (timeoutId) {

//                 clearTimeout(timeoutId)
//             }

//     else {

//         timeoutId = setTimeout(() => {

//             fn.apply(null, args);
//         }, delay);

//     };
//     };
// };

const passwordSegura = (password) => {
  // const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mayusRegex = /(?=.*[A-Z]).*/;
  const minusRegex = /(?=.*[a-z]).*/;
  const numeroRegex = /\d/;
  const caracteresEspecialesRegex = /[@$!%*?&¡(){}]/;
  const limiteRegex = /(?=.{8,})/;

  const objetoPassword = {
    mayuscula: {
      error: !mayusRegex.test(password),
      message: "La contraseña debe tener una mayúscula",
    },

    minuscula: {
      error: !minusRegex.test(password),
      message: "La contraseña debe tener una minúscula",
    },

    numeros: {
      error: !numeroRegex.test(password),
      message: "La contraseña debe tener un número",
    },

    caracterEspecial: {
      error: !caracteresEspecialesRegex.test(password),
      message: "La contraseña debe un caracter especial (@$!%*?&¡(){})",
    },

    limite: {
      error: !limiteRegex.test(password),
      message: "La contraseña debe tener al menos 8 caracteres",
    },
  };

  const contraseñaValida = Object.keys(objetoPassword)
    .map((key) => objetoPassword[key])
    .every((objeto) => !objeto.error);
  const mensajesError = Object.keys(objetoPassword)
    .map((key) => objetoPassword[key])
    .filter((objeto) => objeto.error)
    .map((objetoEntero) => objetoEntero.message);

  return {
    isValid: contraseñaValida,
    errores: mensajesError,
  };
};

const mostrarError = (input, mensaje) => {
  const formField = input.parentElement;

  input.classList.remove("success");
  formField.classList.add("error");

  const campoError = formField.querySelector("small");
  campoError.textContent = mensaje;
};

const mostrarExito = (input, mensaje) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  input.classList.add("success");

  const campoError = formField.querySelector("small");
  campoError.textContent = "";
};
const estaVacio = (valor) => {
  valor === "" ? false : false;
};
const checkPassword = () => {
  let valid = false;
  const password = inputPassword.value.trim();
  const contrasenaValidaChequeo = passwordSegura(password);

  if (estaVacio(password)) {
    mostrarError(inputPassword, "La contraseña es obligatoria");
  } else if (!contrasenaValidaChequeo.isValid) {
    mostrarError(inputPassword, contrasenaValidaChequeo.errores.join(" / "));
  } else {
    mostrarExito(inputPassword);
    valid = true;
  }

  return valid;
};

const isEmailValid = (email) => {
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegEx.test(email);
};

const checkEmail = () => {
  let valid = false;
  const emailValue = inputEmail.value.trim();

  if (estaVacio(emailValue)) {
    mostrarError(inputEmail, "Este campo es requerido");
  } else if (!isEmailValid(emailValue)) {
    mostrarError(inputEmail, "El mail no es válido");
  } else {
    mostrarExito(inputEmail);
    valid = true;
  }

  return valid;
};

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const username = usernameInput.value.trim();

  if (estaVacio(username)) {
    mostrarError(usernameInput, "Este campo es requerido");
  } else if (!isBetween(username.length, min, max)) {
    mostrarError(
      usernameInput,
      `El usuario debe tener entre ${min} y ${max} caracteres`
    );
  } else {
    mostrarExito(usernameInput);
    valid = true;
  }

  return valid;
};

// form.addEventListener("input", debounce((e) => {

//     switch (e.target.id) {

//         case "usuario":
//             checkUsername();
//             break;

//         case "email":
//             checkEmail();
//             break;

//         case "password":
//             checkPassword();
//             break;

//     }

// }))

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const accesoExitoso = () => {
  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();

  if (isUsernameValid & isEmailValid & isPasswordValid) {
    window.alert("Acceso exitoso");
  } else {
    window.alert("Revise los campos obligatorios");
  }
};

iniciarSesion.addEventListener("click", accesoExitoso);
