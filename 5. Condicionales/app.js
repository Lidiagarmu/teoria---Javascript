// 1) condicion if --- ejecuta bloque si se cupmple la condicion
let age = 18;
if (age >= 18) {
  console.log("Eres mayor de edad");
}

// 2)condicional if...else ---- esta ejecuta un bloque de codigo si se cumple una determinada condicion y otro bloque de codigo si no se cumple
let edad = 17;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/* 3) condicional if...else  if...else

if (condicion 1) {
    se ejecuta el codigo se cumple la condicion1
} else if (condicion2) {codigo a ejecutar si no se cumple la condicion} */

// En ocasiones queremos asignar un valor a una variable dependiendo de su condicion

let accesAllowed; // creo la variable sin valor

let agE = 18;

if (agE >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);

// 4) condicional switch --- anida multiples instrucciones tipo if...else

const superhero = "Lilo";

switch (superhero) {
  case "Spiderman":
    console.log("Su nombre real es Peter Parker");
    break;
  case "Iron Man":
    console.log("Su nombre real es Tony Stark");
    break;
  default:
    console.log("No hay superhero");
    break; // la sentencia break en cada case es super importante, en caso de no ponerla continuara automaticamente hasta encontrar la coincidencia
}
// es importante recordar que switch siempre realizara la comparacion con "estrictamente igual", por lo que en el siguiente caso ejecutara el default al no coincidir el tipo

// MINI RETO:

let character = "Legolas";
let race = "Elfo";
let hasRing = false;
let isArcher = true;
if ((hasRing = true)) {
  console.log("Legolas es el portador del Anillo Unico");
} else if ((isArcher = true)) {
  console.log("Legolas es un arquero experto");
} else {
  console.log("Legolas es un guerrero valiente");
}

// extra Lidi mini reto:

const cantante = "Rosalia";

switch (cantante) {
  case "Rosalia":
    console.log("Saoko papi saooooko");

    break;
  case "Bisbal":
    console.log("Buleria buleria!");
    break;
  default:
    console.log("No hay ritmo que lo baile!");
    break;
}

//ejemplos bootcamp

let ageAna = 16;

if (ageAna > 18) {
  console.log("ana puede conducir si se saca el carnet");
} else {
  console.log("es una baby ");
}
console.log("ageAna");
