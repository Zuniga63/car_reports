/**
 * @fileoverview Utilizacíon de los metodos map, reduce y filter;
 * @author Andrés Zuñiga <andres.zuniga.063@gmail.com>
 * @version 1.0
 * 
 * History
 * 
 * - primera versión escrita por Andrés Zuñiga
 */

const arr = [1, 2, 3, 4, 5, 6];

/**
 * Duplica el valor de cada uno de los elementos.
 * @param {Array} list Listado de numeros.
 * @returns {Array}
 */
function duplicateArr(list) {
  return list.map((num) => num * 2);
}

/**
 * Duplica el valor de cada uno de los elementos.
 * @param {Array} list Listado de numeros.
 * @returns {Array}
 */
function getEvenNumbers(list) {
  return list.filter((num) => num % 2 === 0);
}

/**
 * Duplica el valor de cada uno de los elementos.
 * @param {Array} list Listado de numeros.
 * @returns {Array}
 */
function sumArr(list) {
  return list.reduce((sum, num) => sum + num);
}

console.log(duplicateArr(arr));
console.log(getEvenNumbers(arr));
console.log(sumArr(arr));
