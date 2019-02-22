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

    let yearFind = [];
    let allValue = {}
    injuriesBy.forEach(element => {
      let year = element.Year;
      let moto = element.Total_Injured_Persons_Motorcyclists;
      let bike = element.Total_Injured_Persons_Pedalcyclists;
      let walk = element.Total_Injured_Persons_Pedestrians;
      let transit = element.Total_Injured_Persons_Transit_Total;
      //let allInjured = [moto, bike, walk, transit];
      if (yearValue === year && userValue === "all") {
        //yearFind.push(year.substr(0, 4), moto, bike, walk, transit);
        allValue = {
          Año: element.Year,
          Motociclistas: element.Total_Injured_Persons_Motorcyclists,
          Peaton: element.Total_Injured_Persons_Pedestrians,
          Ciclistas: element.Total_Injured_Persons_Pedalcyclists,
          Automovilistas: element.Total_Injured_Persons_Transit_Total
        }
      }
    }) //ForEach
    console.log(allValue)
    return allValue
  },


}; //window
