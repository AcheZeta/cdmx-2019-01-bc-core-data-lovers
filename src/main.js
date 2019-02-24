//Data
const injuriesBy = window.INJURIES;
//Input de Año
let yearButton = document.getElementById("yearbttn");
//Input del usuario
let userButton = document.getElementById("user");
//Input de la sección consulta
let searchButton = document.getElementById("search");
//Constante de la sección know del HTML
let resultArea = document.getElementById("result");
//Sección que contiene DIV table
let tableArea = document.getElementById('tableData');
//DIV que contiene la tabla
let tableOrden = document.getElementById('tableOrden');
//boton de ordenar 
let orden = document.getElementById('orden')

//Función que pinta la habla predeterminada
const drawTable = (allValue) => {
  
  //Mantener libre resultArea
  resultArea.innerHTML = '';
  //Por cada elemento de la data pintara columna y fila
  for (let i = 0; i < allValue.length; i++) {
    const column = `<tr><td>${allValue[i][0]}</td><td>${allValue[i][1]}</td>`
    const row = document.createElement("tr");
    row.innerHTML = column;
    tableArea.appendChild(row)
  }
  //Función que ordena la data
  orden.addEventListener("click", () => {
    tableArea.style.display = "none";
    resultArea.innerHTML = '';
    for (let i = 0; i < allValue.length; i++) {
      const sortTable = allValue.sort((a, b) => a[1] - b[1])
      const column = `<tr><td>${sortTable[i][0]}</td><td>${sortTable[i][1]}</td>`
      const row = document.createElement("tr");
      row.innerHTML = column;
      tableOrden.appendChild(row)
    }
  })
};
// tableArea.insertAdjacentHTML('afterend', `${sortTable}`)
// console.log(sortTable)

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchButton.addEventListener("click", () => {
  
  let yearValue = yearButton.value;
  let userValue = userButton.value;
  if (userValue === 'all') {
    const AllResult = window.data.allData(injuriesBy, yearValue, userValue);
    drawTable(AllResult)
  } else {
    tableData.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultArea.innerHTML = `<b>Año: </b>${resultData[0]} <br> <b>Total de heridos: </b>${resultData[1]}`;
  }
});
