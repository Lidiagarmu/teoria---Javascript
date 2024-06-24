/* MAP --> El metodo MAP de JS es una funcion de la clase Array que permite aplicar una 
funcion a cada elemento de un array y devolver un nuevo array con los resultados. Es muy util para 
transformar un array de una forma rapida y sencilla */

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

// Otro ejemplo en el que podemos usar map() es para transformar un array de objetos:

const users = [
  { name: "Lidi", age: 29 },
  { name: "Lau", age: 30 },
  { name: "Cholo", age: 3 },
];

const names = users.map((users) => users.name);
console.log(names); // imprime: ['Lidi', 'Lau', 'Cholo']

/* En este caso, tenemos un array users con objetos que tienen dos propiedades: name y age. Usamos map() 
para extraer el valor de la propiedad name de cada objeto y guardarlo en un nuevo array names. 
Al final, imprimimos este nuevo array en la consola y podemos ver que sólo contiene los nombres de los usuarios. */

// AVANZANDO EN EL USO DE MAP:::::::::.

// Lo que tenemos

var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

// Lo que necesitamos [20, 24, 56, 88]..... se puede hacer de mhas formas.  PUES ENTONCES usando map():::

var officersIds = officers.map((officers) => officers.id);
console.log(officersIds);

//usando .forEach() :::

var officersIds = [];
officers.forEach((officer) => {
  officersIds.push(officer.id);
});

console.log(officersIds);

// Entonces, ¿Como funciona .map()??

/*Básicamente  recibe dos argumentos, una devolución de llamada y un contexto opcional 
(se considerará así en la devolución de llamada) que no utilicé en el ejemplo anterior.
 La devolución de llamada se ejecuta para cada valor en el array y devuelve cada nuevo 
 valor en el array resultante. */
