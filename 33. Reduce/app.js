/* El metodo reduce() --> es una funcion de la clase Array que permite aplicar una funcion a cada elemento 
de un array y reducirlo a un unico valor. 

Es muy util para realizar calculos sobre un array de una forma rapida y sencilla */

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log("sumaaa de SUM  ES: ", sum); // 15

/* En este ejemplo, hemos creado un array numbers con cinco números. Luego, hemos utilizado 
reduce() para sumar todos los números del array y guardar el resultado en una variable sum. 
Al final, hemos imprimido esta variable en la consola y podemos ver que contiene la suma de todos 
los números del array. */

//---------Otro ejemplo de cómo se puede usar **`reduce()`** es para calcular el promedio de un array de números:

const scores = [90, 75, 60, 100, 85];

const average =
  scores.reduce((accumulator, currentValue) => accumulator + currentValue) /
  scores.length;

console.log(average); // 82

/* En este caso, tenemos un array `scores` con cinco números que representan las calificaciones de 
distintos estudiantes. Usamos `reduce()` para sumar todas las calificaciones y luego dividimos el 
resultado entre la cantidad de calificaciones para obtener el promedio. Al final, imprimimos el promedio 
en la consola y podemos ver que es 81. */

// AVANZANDO EN EL USO DEL REDUCE() ---------------------

/* Al igual que .map(), .reduce() también ejecuta una devolución de llamada para cada elemento de un array. 
Lo diferente aquí es que reduce el resultado de esta devolución de llamada (el acumulador) de un elemento del 
array a otro.

El acumulador puede ser prácticamente cualquier cosa (entero, cadena, objeto, etc.) y debe instanciarse o
 pasarse al llamar a .reduce().*/

// EJEMPLO -->  Digamos que tienes una Array con estos pilotos y sus respectivos años de experiencia.

const pilots = [
  { id: 10, name: "Poe Dameron", years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: "Tallissan Lintra", years: 16 },
  { id: 99, name: "Ello Asty", years: 22 },
];

//Necesitamos conocer el total de años de experiencia de todos ellos. Con .reduce(), es bastante sencillo.

const totalYears = pilots.reduce((accumulator, pilot) => {
  return accumulator + pilot.years;
}, 0);
console.log(totalYears); //82

const menoresDe30 = pilots.filter((pilot) => pilot.years < 20);
console.log(menoresDe30); /* imprime:
 { id: 10, name: 'Poe Dameron', years: 14 },
  { id: 41, name: 'Tallissan Lintra', years: 16 } ---> he filtrado para ver los usuarios menores de 20 */

// Ahora quiero ver el piloto mas experimentado::

const mostExpPilot = pilots.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilot.years ? oldest : pilot; // TERNARIO!!!!!!! "condicion" ? "si se cumple" : "si NO se cumple"
}, {}); //   { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
console.log("Soy el mas experimentado", mostExpPilot);

//Ahora al menos experimientado::

const youngExpPilot = pilots.reduce((younger, pilot) => {
  return younger.years < pilot.years ? younger : pilot;
}, {});
console.log("Soy el menos experimentado!", youngExpPilot);

//-------------------------------
//-------------------------------
//-------------------------------COMBINANDO map(), reduce() y filter()

//Nuestro objetivo: obtener la puntuación total de los usuarios de la fuerza solamente. ¡Hagámoslo paso a paso!

const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// Primero hay que filtrar al personal que si puede usar la fuerza:

const jediFuerza = personnel.filter((person) => person.isForceUser);
console.log("Jedis de Fuerza: ", jediFuerza);

/* Con esto nos quedan 3 elementos en nuestra matriz resultante. Ahora necesitamos crear una matriz
que contenga la puntuacion total de cada jedi con un map()*/

const jediTotalScores = jediFuerza.map(
  (jedi) => jedi.pilotingScore + jedi.shootingScore
);
console.log("Puntuaciones Jedi: ", jediTotalScores); // [154, 110, 156] --> Suma de Scores de los jedi de fuerza

// Por ultimo usaremos .reduce() para obtener el total:

const jedissFuerzaTotalScores = jediTotalScores.reduce((accumulator, jedis) => {
  return accumulator + jedis; // ------------SINTAXIS SIEMPRE DEL REDUCE(): const x = y.reduce(accumulator, xx) => { return accumulator + xx}, 0)
}, 0);
console.log(jedissFuerzaTotalScores); //  420
