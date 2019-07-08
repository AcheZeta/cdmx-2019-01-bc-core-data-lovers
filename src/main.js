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
//Secciones donde se pinta la información en la página. 
let infoSecc = document.getElementById('info')
let knowSecc = document.getElementById('know')
let faqSecc = document.getElementById('faq')
let totalSecc = document.getElementById('total')
//Boton del menú
let mobBtn = document.getElementById('navbtn')
//Nav Mobile
let mobNav = document.getElementById('mobileNav')
//Variable que contiene el resultado
let sortTable = []
let imagesTransport = [
  "images/bike_w.png",
  "images/pedestrian-walking.png",
  "images/bicycle.png",
  "images/front-car.png"
]

mobBtn.addEventListener("click", () => {
  if (mobNav.style.display === "none") {
    mobNav.style.display = "block"
  } else {
    mobNav.style.display = "none"
  }
});


const printInfo = () => {
  infoSecc.innerHTML = `<h3 id="title">Cada año entre 20 millones y 50 millones de personas sufren traumatismos,
  como consecuencia de accidentes de tránsito. </h3><br>
<p id="infoSecI">
  En <b>PUNTO MUERTO</b> creemos importante prevenir accidentes viales en la población
  de jóvenes, por la proximidad de acceder a una licencia de conducir y
  ser este un momento propicio para fomentar conductas responsables trabajando de la mano de
  Instituciones Gubernamentales y Educativas.<br> </p>
<br>`
  knowSecc.innerHTML = `
  <h2> HECHOS FUNDAMENTALES </h2>
    <p id="totalParraph">

      Tan solo en el 2015, 1 de cada 2 percances automovilísticos
      fueron entre jóvenes y se relacionan con el consumo de alcohol,la velocidad,
      la conducción bajos los efectos de drogas y el envío de mensajes de texto.<br><br>
      Las tasas de mortalidad por accidentes de tránsito
      son <b>3 veces</b> mayores en países en desarrollo como México. <br>
    </p>
    <p class="find">
    Usa nuestro buscador para realizar una consulta
    </p>`

  faqSecc.innerHTML = `<h2 id="fqa"> FAQ </h2>
  <p class="question"> <b> ¿Qué es punto muerto?</b><br>
    Es una campaña de prevención contra accidentes de transito en adolescentes
    que tiene como objetivo concientizar y prevenir los accidentes que comprometen
    la vida de nuestra población. </p>
  <p class="question"> <b> ¿A quién se dirige esta campaña? </b><br>
    Está dirigida a adolescentes de 17 y 18 años que tienen acceso a la licencia
    de conducir </p>
  <p class="question"><b> ¿Qué medidas puedo realizar para evitar accidentes?</b><br>
    Respetar los limites de velocidad.<br>
    Uso de casco por ciclistas y motociclistas.<br>
    Protección para niños en automoviles como asientos
    para lactantes y niños, elevadores y cinturones de seguridad. </p>
  <p class="question"> <b> ¿De dónde son los datos que consulto?</b><br>
    Los datos que consultas son del <a href="https://www.bts.gov/content/transportation-fatalities-mode">Departamento
      de Transporte</a></p>
  <p class="question"><b> ¿Qué medidas debo tomar si soy peaton? </b><br>
    Evita caminar por carriles bici o por la calzada.<br>
    Cruza siempre en línea recta y por el paso de peatones o los pasos con semáforo.<br>
    Antes de cruzar una calle, mira bien a derecha e izquierda.</p>`
}
printInfo()

const printData = (allValue) => {
  let yearV = yearButton.value;
  //Mantener libre resultArea
  totalSecc.innerHTML = `
  <h2> La cantidad de heridos Durante <b>${yearV.substr(0,4)}</b> </h2>`;

  //Por cada elemento de la data pintara columna y fila
  for (let i = 0; i < allValue.length; i++) {
    console.log(allValue[i][0])
    totalSecc.insertAdjacentHTML("beforeend", `<img src="${imagesTransport[i]}" alt=${allValue[i][0]}" class="transportType"> ${allValue[i][1]}`)
  }
}

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
    window.data.orderData(allValue)
    tableArea.innerHTML = `<tr><th colspan = "2">${yearV.substr(0,4)}</th></tr>`;
    for (let i = 0; i < allValue.length; i++) {
      const column = `<tr><td>${allValue[i][0]}</td><td>${allValue[i][1]}</td>`
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
    printData(AllResult)
  } else {
    tableArea.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultArea.innerHTML = `<table><tr><th colspan = "2">Durante ${resultData[0]}</th></tr><tr><td colspan = "2">El total de heridos fue ${resultData[1]}</td></tr><table>`;
  }
});
