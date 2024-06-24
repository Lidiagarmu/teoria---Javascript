// 1) Boolean

let verdadero = true;
let falso = false;

// 2) String

let exampleString = "esto es string";

// 3) Null

let nomina = null;

// 4) Undefined

let car; // undefined

// 5) Number

let age = 30;

// 6) Object

//! ------> object object

const teacher = {
  name: "Lau",
  apellidos: "Sanchez",
};

//! --------> object array

const arrayExample = [1, 2, 3, 4, 5, 241];

const largo = arrayExample.length; // aqui daria 6, no confudir con la posicion del array que empieza por 0

// SE PUEDEN METER OBJETOS DENTRO DE UN ARRAY:
let developersDatalist = [
  {
    name: "Maria",
    age: 43,
    isDeveloper: true,
  }, // --> esto es un objeto. separado por una , antes del sig objeto
  {
    name: "Pepe",
    age: 23,
    isDeveloper: true,
  }, // --> otro objeto
]; // --> el array sienpre con []

//! CONCEPTOS CLAVES DE LA MEZCLA DE DATO/*STYLE*/

let name = "Lau";
name += 1; // muestra Lau1. Convierte el nombre en string

console.log(name);

let random = 33;

console.log(random + 1 + "Lili + 4" + 1); // muestra 34Lili + 41

//--------ES6--------------
const templateString = `Hola esto es una prueba de template string, me llamo ${name}`;
const h1Custom = `<p>${name}</p>`;
console.log(templateString);

// ------------------------------------CLASES----------------------------------------------------//

// orden de los datos importa

let schoolName = "Neoland" + 1 + 2; // --> Muestra "Neoland12"
let nameSchool = 1 + 2 + "Neoland"; // --> Muestra "3Neoland"
let schoolNombre = "Neoland" + (1 + 2); // --> Muestra "Neoland3" Opera primero el parentesis por ello lo suma
console.log(schoolName);
console.log(nameSchool);

console.log(typeof isDeveloper); // --> nos devuelve en la consola que es un boolean
