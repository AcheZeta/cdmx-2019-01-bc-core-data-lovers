//window es un objeto global que contiene la funcion consult.
window.data = {
  //Consult filtra el objeto apartir de año. 
  consult: (injuriesBy, yearValue, userValue) => {
    //Variables que guardan en resultado de la busqueda
    let yearResult = "";
    let userResult = "";
    let injuredPerson = "";

    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year == yearValue);
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario.
    for (const key in yearFound) {
      injuredPerson = key
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          yearResult = yearValue.substr(0, 4);
          userResult = element;
        } //for if If
      } //For IF
    } // For

    return [yearResult, userResult]
  }, //Consult

  allData: (injuriesBy, yearValue, userValue) => {
    let allValue = {}
    injuriesBy.forEach(element => {
      let year = element.Year;

      if (yearValue === year && userValue === "all") {
        allValue = {
          date:["Año:", element.Year.substr(0,4)],
          moto:["Motociclistas", element.Total_Injured_Persons_Motorcyclists],
          walk:["Peatones", element.Total_Injured_Persons_Pedestrians],
          bike:["Ciclistas", element.Total_Injured_Persons_Pedalcyclists],
          auto:["Automovilistas", element.Total_Injured_Persons_Transit_Total]
        }
      }
    }) //ForEach
    console.log(allValue)
    return allValue
  },
}; //window
