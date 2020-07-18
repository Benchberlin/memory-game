function iniciarCronometro() {
  let segundos = 60;
  let minutos = 1;
  let segundosTexto;
  let minutosTexto;

  function actualizarContador() {
    segundos--;

    if (segundos > 59) {
      segundos = 00;
      minutos--;
    }

    segundosTexto = segundos;
    minutosTexto = minutos;

    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }

    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }

    document.querySelector("#segundos").innerText = segundosTexto;

    document.querySelector("#minutos").innerText = minutosTexto;
  }

  setInterval(actualizarContador, 1000);
}
