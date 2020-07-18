function acierto(tarjetasComparar) {
  tarjetasComparar.forEach((element) => {
    element.classList.add("acertada");
  });
}

function error(tarjetasComparar) {
  tarjetasComparar.forEach((element) => {
    element.classList.add("error");
  });

  setTimeout(function () {
    tarjetasComparar.forEach((element) => {
      element.classList.remove("descubierta");
      element.classList.remove("error");
    });
  }, 1000);
}
