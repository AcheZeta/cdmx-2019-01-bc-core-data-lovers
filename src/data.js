//window es un objeto global que contiene la funcion consult.
window.data = {
  consult: (injuriesBy, yearValue, userValue) => {

//Variables que guardan en resultado de la busqueda
    let yearResult = "";
    let userResult = "";
    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year === yearValue);
    //console.log(yearFound);
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario.
    for (const key in yearFound) {
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          yearResult = yearValue.substr(0,4);
          userResult = element;
        } //for if If
      } //For IF
    } // For
    return [yearResult, userResult];
  }, //Consult

order: (injuriesBy, )

}; //window
