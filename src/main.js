//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Declaramos input del ALL DATA
//let allDataButton = document.getElementById("all");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");
//Constante que contiene la data
const injuriesBy = window.INJURIES;

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  const resultData = window.data.consult(injuriesBy, yearValue, userValue);
  // const resultDatos = window.data.order(injuriesBy, yearValue, userValue);
  resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
  // resultsecc.innerHTML = `<b>Año:</b>${resultDatos[0]} <b>Total de heridos en moto:</b>${resultDatos[1]}<b>Total de heridos en bici:</b>${resultDatos[2]} <b>Total de heridos peatones:</b>${resultDatos[3]}<b>Total de heridos en automovil:</b>${resultDatos[4]}`;
});

// // allDataButton.addEventListener("click", () => {
// //   alert("Hello! I am an alert box!!");
// //   let yearValue = injuriesBy
// //   //resultsecc.innerHTML = `${newData[0]}`;
// //   }
// );
