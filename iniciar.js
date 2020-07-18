let grupoTarjetas = ["😀", "🦄", "L", "I"];

iniciarCronometro();

let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
reparteTarjetas();
document.querySelectorAll(".tarjeta").forEach((element) => {
  element.addEventListener("click", descubrir);
});
