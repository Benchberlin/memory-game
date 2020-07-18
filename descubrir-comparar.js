function descubrir() {
    let totalDescubiertas = document.querySelectorAll(
      ".descubierta:not(.acertada)"
    );
  
    if (totalDescubiertas.length > 1) {
      return;
    }
    this.classList.add("descubierta");
  
    let descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  
    if (descubiertas.length < 2) {
      return;
    }
  
    comparar(descubiertas);
  }
  
  function comparar(tarjetasComparar) {
    if (tarjetasComparar[0].dataset.value === tarjetasComparar[1].dataset.value) {
      acierto(tarjetasComparar);
    } else {
      error(tarjetasComparar);
    }
  }
  