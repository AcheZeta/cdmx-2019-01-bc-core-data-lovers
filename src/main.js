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
  // const allData = window.data.consult(injuriesBy, yearValue, userValue);
  //Constante que contiene la tabla
  const tableArea = document.getElementById('tableData');
  resultArea.innerHTML = '';
  tableArea.innerHTML =  `${allValue}`   

  orden.addEventListener("click", () => {
    resultArea.innerHTML = '';
    tableArea.innerHTML =  `${allValue.sort()}`   
  })
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



// orden.addEventListener("click", () => {
//   let rows
//   let switching
//   let i
//   let x
//   let y
//   let shouldSwitch
//   // tabla
//   const table = document.getElementById("tableTable")


//   switching = true;
//   while (switching) {
//     rows = table.rows;
//     for (i = 1; i < rows.length - 1; i++) {
//       shouldSwitch = false;
//       x = rows[i].getElementByTagName("TD")[0];
//       y = rows[i].getElementByTagName("TD")[0];
//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }

//       if (shouldSwitch) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   }
