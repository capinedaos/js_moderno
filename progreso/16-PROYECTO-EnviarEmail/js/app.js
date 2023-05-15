document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    remitente: "",
    mensaje: "",
  };

  console.log(email);

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const inputRemitente = document.querySelector("#remitente");
  const btbSubmit = document.querySelector('#formulario button[type="submit"]');

  // Asignar eventos
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
  inputRemitente.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      return;
    }
    limpiarAlerta(e.target.parentElement);

    // Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();

    // Compro el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");

    if (alerta) {
      alerta.remove();
    }

    // Generar alerta HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Inyectar el error al campo
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes("")) {
    } else {
    }
  }
});
