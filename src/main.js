//Data
const injuriesBy = window.INJURIES;
//Input de Año
let yearButton = document.getElementById("yearbttn");
//Input del usuario
let userButton = document.getElementById("user");
//Input de la sección consulta
let searchButton = document.getElementById("search");
//Constante de la sección know del HTML
const resultArea = document.getElementById("result");
// usuarios

drawTable = (allValue) => {
  //Constante que contiene la tabla
  const tableArea = document.getElementById('table');
  resultArea.innerHTML = '';

  for (let j = 0; j < allValue.length; j++) {
    tableArea.innerHTML = `${allValue}`
    //   `<table>
    // <tr>
    //   <th scope = "col">AÑO</th>
    //   <th scope = "col">TIPO DE HERIDO</th>
    //   <th scope = "col">TOTAL</th>
    // </tr>

    // <tr><td>${yearValor[j]}</td></tr>
    // `
  }
}
//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchButton.addEventListener("click", () => {
  let yearValue = yearButton.value;
  let userValue = userButton.value;
  if (userValue === 'all') {
    const AllResult = window.data.allData(injuriesBy, yearValue, userValue);
    drawTable(AllResult)
  } else {
    table.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultArea.innerHTML = `<b>Año: </b>${resultData[0]} <br> <b>Total de heridos: </b>${resultData[1]}`;
  }
});
