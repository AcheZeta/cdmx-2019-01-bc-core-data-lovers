//window es un objeto global que contiene la funcion consult.
window.data = {
  
  //Consult filtra el objeto apartir de año. 
  consult: (injuriesBy, yearValue, userValue) => {
    //Variables que guardan en resultado de la busqueda
    let yearResult = "";
    let userResult = "";
    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year == yearValue);
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario.
    for (const key in yearFound) {
      const injuredPerson = key
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          yearResult = yearValue.substr(0, 4);
          userResult = element;
          injuredPerson;
        }
      }
    }
    return [yearResult, userResult]
  }, //Consult

  allData: (injuriesBy, yearValue, userValue) => {
    let allValue = []
    injuriesBy.forEach(element => {
      let year = element.Year;
      if (yearValue === year && userValue === "all") {
        allValue.push(["Motociclistas", element.Total_Injured_Persons_Motorcyclists],
          ["Peatones", element.Total_Injured_Persons_Pedestrians],
          ["Ciclistas", element.Total_Injured_Persons_Pedalcyclists],
          ["Automovilistas", element.Total_Injured_Persons_Transit_Total])
      }
    })
    return allValue
  }, //AllData 
}; //window