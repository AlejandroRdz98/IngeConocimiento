let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".abrir")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let enviar = document.querySelectorAll(".enviar")[0];
let prop = document.querySelectorAll(".prop")[0];
let message = document.querySelectorAll(".message")[0];
let cerrar_prop = document.querySelectorAll(".cerrar-prop")[0];

cerrar_prop.addEventListener("click", function (e) {
  e.preventDefault();

  message.classList.toggle("message-close");
  setTimeout(function () {
    prop.style.opacity = "0";
    prop.style.visibility = "hidden";
  }, 900);
});

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 900);
});

window.addEventListener("click", function (e) {
  if (e.target === modalC) {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
  if (e.target === prop) {
    message.classList.toggle("message-close");

    setTimeout(function () {
      prop.style.opacity = "0";
      prop.style.visibility = "hidden";
    }, 900);
  }
});

function calcularPorcentaje(datos, paciente, alimentacion) {
  let major = 0;
  let miniom = 0;
  let padecimiento = 0;
  let valorMajor = 1;
  let valorMiniom = 0.5;
  let porciento = 11.76470588235294;

  prop.style.visibility = "visible";
  prop.style.opacity = "1";
  message.classList.toggle("message-close");

  datos.map((dato) => {
    if (dato.respuesta == "si" && dato.tipo == "major") {
      major++;
    } else {
      if (dato.respuesta == "si" && dato.tipo == "miniom") {
        miniom++;
      }
    }
  });

  if (major == 0 && miniom == 0) {
    padecimiento = 0;
  } else {
    if (major == 5 && miniom == 7) {
      padecimiento = 99;
    } else {

        //calcular imc de la persona.
        let imc = 0


        imc = paciente.peso * (paciente.estatura * paciente.estatura);
        if (imc <= 18.5) {
            //Delgado
            if (alimentacion.respuesta == "insuficiente") {
                //Todo bien
            }
            if (alimentacion.respuesta == "adecuada") {
                //Algo mal
                major++
            }
            if (alimentacion.respuesta == "excesiva") {
                //Mal
                major++
            }
        } else {
            if (imc > 18.5 && imc <=24.9) {
                //Normal
                if (alimentacion.respuesta == "insuficiente") {
                    //Algo mal
                }
                if (alimentacion.respuesta == "adecuada") {
                    //Todo bien
                }
                if (alimentacion.respuesta == "excesiva") {
                    //Mal
                    major++
                }
            } else {
                if (imc >= 25.0 && imc <= 29.9) {
                    //Sobrepeso
                    if (alimentacion.respuesta == "insuficiente") {
                        //Mal
                        major++
                    }
                    if (alimentacion.respuesta == "adecuada") {
                        //Algo mal
                    }
                    if (alimentacion.respuesta == "excesiva") {
                        //Bien
                    
                    }
                } else {
                    if(imc > 30.0){
                        //Obesidad
                        if (alimentacion.respuesta == "insuficiente") {
                            //Mal
                            major++
                        }
                        if (alimentacion.respuesta == "adecuada") {
                            //Algo mal
                            major++
                        }
                        if (alimentacion.respuesta == "excesiva") {
                            //Bien
                        }
                    }
                }
            }
        }

      if (paciente.edad <= 3) {
        //4 SINTOMAS MAYORES Y 1 MENOR COMO MINIMO
        if (major >= 4 && miniom >= 1) {

            padecimiento = porciento * ( (major * valorMajor) + (miniom * valorMiniom))

          
        } else {
            padecimiento = porciento * ( (major * valorMajor) + (miniom * valorMiniom))
        }
      } else {
        if (paciente.edad > 3) {
            

          //5 MAYORES Y 3 MENORES COMO MINIMO
          if (major >= 5 && miniom >= 3) {
            padecimiento = porciento * ( (major * valorMajor) + (miniom * valorMiniom))
          } else {
            padecimiento = porciento * ( (major * valorMajor) + (miniom * valorMiniom))
            
          }
        }
      }
    }
  }

  document.getElementById(
    "mostrarN"
  ).innerHTML = `Paciente: ${paciente.nombre}`;
  document.getElementById(
    "probabilidad"
  ).innerHTML = `La probabilidad de paceder el sindrome de Prader-Willi es del ${padecimiento}%`;
  
}

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  let nombre = document.getElementsByClassName("input")[0].value;
  let edad = document.getElementsByClassName("input")[1].value;
  let estatura = document.getElementsByClassName("input")[2].value;
  let peso = document.getElementsByClassName("input")[3].value;
  console.log("Hola");
  let aprendizaje = document.getElementsByName("aprendizaje");
  for (let i = 0; i < aprendizaje.length; i++) {
    if (aprendizaje[i].checked) {
      aprendizaje = aprendizaje[i].value;
    }
  }

  let comportamiento = document.getElementsByName("comportamiento");
  for (let i = 0; i < comportamiento.length; i++) {
    if (comportamiento[i].checked) {
      comportamiento = comportamiento[i].value;
    }
  }

  let rasgos = document.getElementsByName("rasgos");
  for (let i = 0; i < rasgos.length; i++) {
    if (rasgos[i].checked) {
      rasgos = rasgos[i].value;
    }
  }

  let dormir = document.getElementsByName("dormir");
  for (let i = 0; i < dormir.length; i++) {
    if (dormir[i].checked) {
      dormir = dormir[i].value;
    }
  }

  let fuerza = document.getElementsByName("fuerza");
  for (let i = 0; i < fuerza.length; i++) {
    if (fuerza[i].checked) {
      fuerza = fuerza[i].value;
    }
  }
  let ojos = document.getElementsByName("ojos");
  for (let i = 0; i < ojos.length; i++) {
    if (ojos[i].checked) {
      ojos = ojos[i].value;
    }
  }
  let respirar = document.getElementsByName("respirar");
  for (let i = 0; i < respirar.length; i++) {
    if (respirar[i].checked) {
      respirar = respirar[i].value;
    }
  }

  let seca = document.getElementsByName("seca");
  for (let i = 0; i < seca.length; i++) {
    if (seca[i].checked) {
      seca = seca[i].value;
    }
  }

  let comer = document.getElementsByName("comer");
  for (let i = 0; i < comer.length; i++) {
    if (comer[i].checked) {
      comer = comer[i].value;
    }
  }

  let retraso = document.getElementsByName("retraso");
  for (let i = 0; i < retraso.length; i++) {
    if (retraso[i].checked) {
      retraso = retraso[i].value;
    }
  }
  let obsesion = document.getElementsByName("obsesion");
  for (let i = 0; i < obsesion.length; i++) {
    if (obsesion[i].checked) {
      obsesion = obsesion[i].value;
    }
  }

  let habla = document.getElementsByName("habla");
  for (let i = 0; i < habla.length; i++) {
    if (habla[i].checked) {
      habla = habla[i].value;
    }
  }

  calcularPorcentaje(
    [
      {
        respuesta: aprendizaje,
        tipo: "major",
      },
      {
        respuesta: comportamiento,
        tipo: "miniom",
      },
      {
        respuesta: rasgos,
        tipo: "major",
      },
      {
        respuesta: dormir,
        tipo: "miniom",
      },
      {
        respuesta: fuerza,
        tipo: "miniom",
      },
      {
        respuesta: ojos,
        tipo: "miniom",
      },
      {
        respuesta: respirar,
        tipo: "miniom",
      },
      {
        respuesta: seca,
        tipo: "miniom",
      },
      {
        respuesta: retraso,
        tipo: "major",
      },
      {
        respuesta: obsesion,
        tipo: "major",
      },
      {
        respuesta: habla,
        tipo: "miniom",
      },
    ],
    {
      nombre: nombre,
      edad: edad,
      estatura: estatura,
      peso: peso,
    },
    {
      respuesta: comer,
      tipo: "major",
    }
  );

  //Mostrar resultado
  /* {
            nombre: nombre,
            edad: edad, 
            estatura: estatura,
            peso: peso,
            aprendizaje: aprendizaje,
            comportamiento: comportamiento,
            rasgos: rasgos, 
            dormir: dormir,
            fuerza:fuerza,
            ojos:ojos,
            respirar: respirar,
            seca: seca,
            comer: comer,
            retraso: retraso,
            obsesion: obsesion,
            habla: habla
        }*/
});
