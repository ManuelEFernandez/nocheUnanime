const agruparporCriterio = (array, criterio) => {
    let posibilidades = [];
    for (let index = 0; index < array.length; index++) {
      if (!posibilidades.some((valor) => valor === array[index][criterio])) {
        posibilidades.push(array[index][criterio]);
      }
    }
  
    let valoresAgrupacion = posibilidades.reduce((accumulator, value) => {
      return { ...accumulator, [value]: 0 };
    }, {});
  
    let resultado = arrayCatalogoLibros.reduce((acumulador, value) => {
      for (let index = 0; index < posibilidades.length; index++) {
        if (value[criterio] === posibilidades[index]) {
          acumulador[posibilidades[index]]++;
        }
      }
  
      return acumulador;
    }, valoresAgrupacion);
  
    return resultado;
  };
  
  console.log(agruparporCriterio(arrayCatalogoLibros, "coleccion"));
  console.log(agruparporCriterio(arrayCatalogoLibros, "año"));
  