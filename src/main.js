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


const drawTable = (allValue) => {
  //Constante que contiene la tabla
  const tableArea = document.getElementById('tableData');
  resultArea.innerHTML = '';
  for (let i =0; i < allValue.length; i++){
    const column = `<tr><td>${allValue[i][0]}</td><td>${allValue[i][1]}</td>`
    const row = document.createElement("tr");
    row.innerHTML= column;
    tableArea.appendChild(row)
  }
  orden.addEventListener("click", () => {
    resultArea.innerHTML = '';
    const sortTable = allValue.sort()
    for (let i =0; i < sortTable.length; i++){
      const column = `<tr><td>${sortTable[i][0]}</td><td>${sortTable[i][1]}</td>`
      const row = document.createElement("tr");
      row.innerHTML= column;
      tableArea.appendChild(row)
    }
  })
};


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

