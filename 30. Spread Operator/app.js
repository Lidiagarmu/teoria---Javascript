// SPREAD OPERATOR -->  el operador spread (o de propagacion) permite expandir un objeto iterable en una serie de objetos individuales

/* mas tecnicamente: El operador de propagación spread operator permite que una expresión sea expandida en situaciones donde
 se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales) */

let xmen = ["Ciclops", "Beast", "Angel", "Marvel-girl"];
let newXmen = ["Wolverine", "NightCrawler", "Storm"];

// Antes se usaba el concat y ahora ...
let myMutants = [...xmen, ...newXmen];

// Se puede usar también para copiar un array
let xmenCopy = [...xmen];

// se usa para jugar con tu array sin modificarlo
let [lastMutant] = [...xmen].reverse();

// No se ha modificado
console.log(xmen); // imprime [ 'Ciclops', 'Beast', 'Angel', 'Marvel-girl' ]
console.log(lastMutant); // imprime   Marvel-girl

//---------------
//---------------

// Spread Operator in Parameters

function suma(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

suma(...numbers);

// Spread Operator in Strings

const myTeam = "RAYO";
const characters = [...myTeam]; // imprime [ 'R', 'A', 'Y', 'O']

// Spread Operator in Object
const obj1 = { firstName: "Foo", age: 22 };
const obj2 = { lastName: "Bar", gender: "M" };

const newObj = { ...obj1, ...obj2, planet: "Earth" };

console.log(newObj); /* imprime
{
  firstName: 'Foo',
  age: 22,
  lastName: 'Bar',
  gender: 'M',
  planet: 'Earth'
}

*/

// Destructuring with spread operator!!!!!!!!!!!!!!!!!!!!!!!!!!
const details = {
  firstName: "Code",
  lastName: "Burst",
  age: 22,
};
// Saca el valor 22 y deja el resto de atributos
const { age, ...restOfTheDetails } = details;
console.log(age, restOfTheDetails); // imprime   22 { firstName: 'Code', lastName: 'Burst' }

// USO DETALLADO :::

/* El operador de propagación (también conocido como "spreed operator") es una 
característica de JavaScript que te permite expandir una expresión iterable
 (como un arreglo o un objeto) en una lista de elementos o propiedades individuales. 
 
 Aqui algunos ejemplos de como se puede usar el spread operator  */

// Para copiar un array:

const colores = ["rojo", "verde", "azul"];
const coloresCopia = [...colores]; // ['rojo', 'verde', 'azul']

// Para concatenar arreglos:

const colorines = ["rojo", "verde", "azul"];
const masColores = ["amarillo", "naranja"];
const todosLosColores = [...colores, ...masColores]; // ['rojo', 'verde', 'azul', 'amarillo', 'naranja']

// Para pasar argumentos a una funcion como una lista:

function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
console.log(sumar(...numeros)); // imprime 6

// Para clonar un objeto:

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    ciudad: "Bogotá",
    pais: "Colombia",
  },
};

const personaCopia = { ...persona }; /* imprime:
 { 
    nombre: 'Juan', 
    edad: 30, 
    direccion: { ciudad: 'Bogotá', pais: 'Colombia' } }

    */

/* Es importante tener en cuenta que el operador de propagación solo crea 
    una copia superficial del objeto o arreglo. Si el objeto o arreglo original 
    contiene referencias a otras estructuras de datos, la copia tendrá las mismas referencias. */
