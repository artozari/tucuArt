const btnCrearGrid = document.getElementById("btnInput");
const btnInputFondo = document.getElementById("btnInputFondo");
const btnBorrar = document.getElementById("btnBorrar");
const btnLapiz = document.getElementById("btnLapiz");
const checkboxBordes = document.getElementById("bordesGrilla");

const container = document.getElementById("container");

const inputNumber1 = document.getElementById("inputNumber1");
const inputNumber2 = document.getElementById("inputNumber2");
const inputColor = document.getElementById("inputColor");
const inputColorFondo = document.getElementById("inputColorFondo");

let modo = "";

btnLapiz.addEventListener("click", function () {
  modo = "lapiz";
});
btnBorrar.addEventListener("click", function () {
  modo = "goma";
});

btnCrearGrid.addEventListener("click", function () {
  container.innerHTML = "";
  const cantidadDeGrilla = inputNumber1.value * inputNumber2.value;

  for (let i = 0; i < cantidadDeGrilla; i++) {
    const grilla = document.createElement("div");
    grilla.classList.add("grilla");
    grilla.style.background = inputColorFondo.value;

    //evento para realizar la accion del modo en grilla
    grilla.addEventListener("click", function () {
      //modo goma.
      if (modo == "goma") {
        grilla.classList.remove("pintado")
        this.style.background = inputColorFondo.value;
      }
      // modo lapiz.
      if (modo == "lapiz") {

        grilla.classList.add("pintado");
        this.style.background = inputColor.value;
      }
    });

    container.appendChild(grilla);
  }
});

//Evento que cambia el color del fondo.
btnInputFondo.addEventListener("click", function () {
  const listaDeGrilla = document.querySelectorAll(".grilla:not(.pintado)");
  for (let i = 0; i < listaDeGrilla.length; i++) {
    listaDeGrilla[i].style.background = inputColorFondo.value;
  }
});


//Evento del checkbox para mostrar los bordes de las grillas.
checkboxBordes.addEventListener("click", function () {
  const grilla = document.querySelectorAll(".grilla");
  for (let i = 0; i < grilla.length; i++) {
    if (this.checked) {
      grilla[i].style.border = "1px solid black";
    } else {
      grilla[i].style.border = `1px solid ${grilla[i].style.background}`;
    }
  }

});