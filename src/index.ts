let posicion = document.getElementById("posicion");
let btnCalculo = document.getElementById("button");

btnCalculo.addEventListener("click", () => {
  let posicionLlegada: number = Number(posicion.value);

  if (posicionLlegada == 1) {
    console.log("Entregar Medalla de Oro");
  }
  if (posicionLlegada == 2) {
    console.log("Entregar Medalla de Plata");
  }
  if (posicionLlegada == 3) {
    console.log("Entregar Medalla de Bronce");
  }
  if (posicionLlegada > 3) {
    console.log("Segui participando Deeeaaa....");
  }
});
