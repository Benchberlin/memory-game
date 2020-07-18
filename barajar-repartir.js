
function barajarTarejtas() {
    result = totalTarjetas.sort(function () {
      return 0.5 - Math.random();
    });
    return result;
  }

  
  function reparteTarjetas() {
    let mesa = document.querySelector("#mesa");
  
    mesa.innerHTML = " ";
  
    tarjetasBarajadas = barajarTarejtas();
  
    tarjetasBarajadas.forEach((element, index) => {
      let tarjeta = document.createElement("div");
  
      tarjeta.innerHTML =
        "<div class='tarjeta' data-value = " +
        element +
        ">" +
        "<div class='tarjeta__contenido'>" +
        element +
        "</div>" +
        "</div>";
  
      mesa.appendChild(tarjeta);
    });
  }