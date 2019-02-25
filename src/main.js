//Data
const injuriesBy = window.INJURIES;
//Input de Año
let yearButton = document.getElementById("yearbttn");
//Input del usuario
let userButton = document.getElementById("user");
//Input del botón de consulta
let searchButton = document.getElementById("search");
//Constante de la sección know del HTML
let resultArea = document.getElementById("result");
//Sección que contiene DIV table
let tableArea = document.getElementById('tableD');
//boton de ordenar 
let orden = document.getElementById('orden')
//Variable que contiene el resultado
let sortTable = []

//Función que pinta la habla predeterminada
const drawTable = (allValue) => {
  let yearV = yearButton.value;
  //Mantener libre resultArea
  resultArea.innerHTML = '';
  tableArea.innerHTML = `<tr><th colspan = "2">${yearV.substr(0,4)}</th></tr>`

  //Por cada elemento de la data pintara columna y fila

  for (let i = 0; i < allValue.length; i++) {
    const column = `<tr><td>${allValue[i][0]}</td><td>${allValue[i][1]}</td>`
    const row = document.createElement("tr");
    row.innerHTML = column;
    tableArea.appendChild(row)
  }
  //Función que ordena la data
  orden.addEventListener("click", () => {
    resultArea.innerHTML = '';
    tableArea.innerHTML = `<tr><th colspan = "2">${yearV.substr(0,4)}</th></tr>`;
    for (let i = 0; i < allValue.length; i++) {
      sortTable = allValue.sort((a, b) => a[1] - b[1])
      const column = `<tr><td>${sortTable[i][0]}</td><td>${sortTable[i][1]}</td>`
      const row = document.createElement("tr");
      row.innerHTML = column;
      tableArea.appendChild(row)
    }
  })
  return sortTable
};


//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchButton.addEventListener("click", () => {
  let yearValue = yearButton.value;
  let userValue = userButton.value;
  if (userValue === 'all') {
    const AllResult = window.data.allData(injuriesBy, yearValue, userValue);
    drawTable(AllResult)
  } else {
    tableArea.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultArea.innerHTML = `<table><tr><th colspan = "2">Durante ${resultData[0]}</th></tr><tr><td colspan = "2">El total de heridos fue ${resultData[1]}</td></tr><table>`;
  }
});
