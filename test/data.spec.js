require('../src/data.js');
require('../src/data/injuries/injuries.js');

describe('DATA', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });
});

describe('CONSULT', () => {
  it('Debería ser una funcion', () => {
    expect(typeof window.data.consult).toBe('function');
  });
  it('Debería devolver el año 2015 y 2443175, al elegir 2015 y TODOS', () => {
    expect(window.data.consult(window.INJURIES, "2015-01-04", "Total_Injured_Persons")).toEqual(["2015", 2443175])
  });
  it('Debería devolver el año 2001 y 60236, al elegir 2001 y MOTOCICLISTAS', () => {
    expect(window.data.consult(window.INJURIES, "2001-01-04", "Total_Injured_Persons_Motorcyclists")).toEqual(["2001", 60236])
  });
});

describe('allData', () => {
  it('Debería ser una funcion', () => {
    expect(typeof window.data.allData).toBe('function');
  });
  it('Debería devolver el año 2010 y 82000,52000,70000,25222,  al elegir 2010 y TODOS LOS HERIDOS', () => {
    expect(window.data.allData(window.INJURIES, "2010-01-04", "all")).toEqual([
      ["Motociclistas", 82000],
      ["Peatones", 70000],
      ["Ciclistas", 52000],
      ["Automovilistas", 25222]
    ])
  });
  it('Debería devolver el año 2015 y 88000,45000,70000,24252,  al elegir 2015 y TODOS LOS HERIDOS', () => {
    expect(window.data.allData(window.INJURIES, "2015-01-04", "all")).toEqual([
      ["Motociclistas", 88000],
      ["Peatones", 70000],
      ["Ciclistas", 45000],
      ["Automovilistas", 24252]
    ])
  });
});

describe('orderData', () => {
  it('Debería devolver los datos ordenados de menor a mayor al pulsar el botón ordenar', () => {
    expect(window.data.orderData(window.INJURIES, "2012-01-04", "all")).toEqual([
      ["Automovilistas", 23345],
      ["Ciclistas", 49000],
      ["Peatones", 76000],
      ["Motociclistas", 93000],
    ])
  })
});
